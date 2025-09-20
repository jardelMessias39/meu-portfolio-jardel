from fastapi import FastAPI, APIRouter, HTTPException, Request, Body
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from contextlib import asynccontextmanager
from models import StatusCheck, StatusCheckCreate, ChatRequest, ChatResponse
from chat_service import ChatService
import traceback
from typing import List


ROOT_DIR = Path(__file__).parent
load_dotenv()
print("MONGO_URL:", os.getenv("MONGO_URL"))
print("DB_NAME:", os.getenv("DB_NAME"))
print("OPENAI_API_KEY:", os.getenv("OPENAI_API_KEY"))


# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Initialize chat service
chat_service = ChatService(db)

# Lifespan manager
@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("🔄 Conectando ao MongoDB...")
    yield
    logger.info("🛑 Encerrando conexão com MongoDB...")
    client.close()

# Create app and router
app = FastAPI(lifespan=lifespan)
api_router = APIRouter(prefix="/api")

# Configure CORS usando a variável de ambiente
# A variável `FRONTEND_URL` deve ser configurada no Render
frontend_url = os.environ.get("FRONTEND_URL")

origins = [
    frontend_url,
    "http://localhost:3000",
    "http://localhost:5173",
    "https://meu-portfolio-jardel-iknh6w3yf-jardel-messias-projects.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    # Use a variável 'origins' aqui para incluir todas as URLs permitidas
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rotas
@api_router.get("/")
async def root():
    return {"message": "API do portfólio rodando!"}

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj


@api_router.post("/chat", response_model=ChatResponse)
async def chat_endpoint(request: Request):
    try:
        data = await request.json()
        message = data.get("message")
        session_id = data.get("session_id")

        if not message:
            raise HTTPException(status_code=400, detail="Campo 'message' é obrigatório")

        resposta, nova_session_id = await chat_service.process_message(
            message=message,
            session_id=session_id
        )

        return ChatResponse(
            response=resposta,
            session_id=nova_session_id
        )

    except Exception as e:
        traceback.print_exc()
        logger.error(f"Erro no chat_endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Erro interno: {str(e)}")
    


@api_router.get("/chat/sessions/{session_id}")
async def get_chat_session(session_id: str):
    try:
        sessao = await chat_service.get_session_history(session_id)
        if not sessao:
            raise HTTPException(status_code=404, detail="Sessão não encontrada")
        return {
            "session_id": sessao.session_id,
            "messages": [
                {
                    "role": msg.role,
                    "content": msg.content,
                    "timestamp": msg.timestamp.isoformat()
                }
                for msg in sessao.messages
            ]
        }
    except HTTPException:
        raise
    

# Inclua o router APENAS depois de todas as rotas estarem definidas
app.include_router(api_router)