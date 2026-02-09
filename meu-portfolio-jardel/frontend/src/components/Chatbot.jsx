import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, Mic, MicOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';
import ReactMarkdown from 'react-markdown';


const BACKEND_URL = 'https://meu-portfolio-backend-wgmj.onrender.com';
const API = `${BACKEND_URL}/api`;

const Chatbot = ({ isOpen, onToggle }) => {
 
  // --- 1. ESTADOS ---
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Oi, tudo bem? Eu sou o Antônio. Fui criado pelo Jardel para ser o braço direito dele aqui no portfólio. Posso te contar sobre a experiência dele com Full Stack, mostrar os sistemas que ele já tirou do papel ou falar sobre as tecnologias que ele domina. O que você quer saber primeiro?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  // --- 2. REFS ---
  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const handleSendRef = useRef(null);
  const { toast } = useToast();
  

  // --- 3. FUNÇÕES (Definidas antes dos Effects para evitar o erro "v") ---

 const dispararDigitação = (textoCompleto) => {
  let i = 0;
  const novaMensagemId = Date.now();
  setMessages(prev => [...prev, { id: novaMensagemId, type: 'bot', content: '', timestamp: new Date() }]);

  const timer = setInterval(() => {
    setMessages(prev => prev.map(msg => {
      if (msg.id === novaMensagemId && i < textoCompleto.length) {
        return { ...msg, content: textoCompleto.substring(0, i + 1) };
      }
      return msg;
    }));
    
    i++;
    if (i >= textoCompleto.length) {
      clearInterval(timer);
      // NADA DE EVENTOS AQUI. O vídeo agora é escravo do ÁUDIO.
    }
  }, 35); // Digitação levemente mais veloz para dar fluidez
};
// 2. Ajuste na função falarTexto

const handleSendMessage = async (textoParaEnviar) => {
  const mensagemFinal = textoParaEnviar || inputValue;
  if (!mensagemFinal.trim() || isTyping) return;

  setInputValue('');
  setMessages(prev => [...prev, { id: Date.now(), type: 'user', content: mensagemFinal }]);
  setIsTyping(true);

  try {
    // 1. Chamada do Chat (Único await necessário aqui)
    const resposta = await fetch(`${API}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: mensagemFinal, session_id: sessionId })
    });

    const data = await resposta.json();
    if (data.session_id) setSessionId(data.session_id);

    // 2. LIBERAÇÃO IMEDIATA: O "Pensando" some e a mágica começa
    setIsTyping(false);
    
    // Executamos a sincronização SEM await para não travar o loop do React
    executarIACompleta(data.response);

  } catch (erro) {
    toast({ title: "Erro", description: "Falha na conexão.", variant: "destructive" });
    setIsTyping(false);
  }
};

const executarIACompleta = (texto) => {
  if (!texto) return;

  // A. Inicia a digitação na hora
  dispararDigitação(texto);

  // B. Busca o áudio em paralelo (sem travar a digitação)
  fetch(`${API}/tts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: texto }),
  })
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);

    // C. SINCRONIA MESTRE: O vídeo obedece APENAS ao áudio
    audio.onplay = () => {
      window.dispatchEvent(new CustomEvent("ia-falando", { detail: true }));
    };

    audio.onended = () => {
      window.dispatchEvent(new CustomEvent("ia-falando", { detail: false }));
      URL.revokeObjectURL(url);
    };

    audio.play().catch(e => console.warn("Áudio bloqueado pelo navegador"));
  })
  .catch(err => {
    console.error("Erro no TTS, mantendo apenas texto.");
  });
};
  const handleMicToggle = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      try {
        recognitionRef.current?.start();
      } catch (e) {
        console.error("Erro ao iniciar microfone", e);
      }
    }
  };

  // --- 4. USE EFFECTS (Sempre por último) ---

  // Sincroniza o Ref com a função atual
  useEffect(() => {
    handleSendRef.current = handleSendMessage;
  }, [handleSendMessage]);

  // Inicializa reconhecimento de voz
  useEffect(() => {
    const Reconhecimento = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Reconhecimento) return;

    const recognition = new Reconhecimento();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = 'pt-BR';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    
    recognition.onresult = (event) => {
      if (isTyping) return;
      const transcricao = event.results[event.results.length - 1][0].transcript;
      if (transcricao.trim()) {
        handleSendRef.current?.(transcricao); 
      }
    };

    recognitionRef.current = recognition;
    return () => recognition.stop();
  }, [isTyping]);

  // Scroll automático para a última mensagem
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Captura erros globais de áudio/promessas (ElevenLabs)
  useEffect(() => {
    const handleGlobalError = (event) => {
      if (event.reason?.message?.includes("ElevenLabs") || event.message?.includes("voice")) {
        event.preventDefault();
        console.warn("Áudio indisponível -  respondendo por texto...");
      }
    };
    window.addEventListener("unhandledrejection", handleGlobalError);
    return () => window.removeEventListener("unhandledrejection", handleGlobalError);
  }, []);

  if (!isOpen) return (
    <Button onClick={onToggle} className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 shadow-lg z-50 hover:bg-blue-700 transition-all">
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
  

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col z-50 font-sans animate-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isListening ? 'bg-green-400 animate-pulse' : 'bg-blue-500'}`}>
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Jardel Messias</h3>
            <p className="text-[10px] text-blue-100">
              {isListening ? '🎤 Ouvindo você...' : 'Chat Online'}
            </p>
          </div>
        </div>
        <Button onClick={onToggle} variant="ghost" size="icon" className="text-white h-8 w-8 hover:bg-blue-500">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-2xl p-3 max-w-[85%] text-sm shadow-sm ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white border text-gray-800'}`}>
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isTyping && <div className="text-xs text-gray-400 animate-pulse ml-2">Jardel Messias está processando...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t rounded-b-2xl">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Digite sua mensagem..."
            className="rounded-full bg-gray-100 border-none focus-visible:ring-1 focus-visible:ring-blue-400"
          />
          <Button
            onClick={handleMicToggle}
            variant="outline"
            size="icon"
            className={`rounded-full transition-all ${isListening ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-100'}`}
          >
            {isListening ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
          </Button>
          <Button onClick={() => handleSendMessage()} size="icon" className="rounded-full bg-blue-600 hover:bg-blue-700">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;