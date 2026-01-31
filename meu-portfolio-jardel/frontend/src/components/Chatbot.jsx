import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, Send, X, Bot, User, Mic, MicOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from '../hooks/use-toast';
import ReactMarkdown from 'react-markdown';
// O link que você acabou de criar no Render!
const BACKEND_URL = 'https://meu-portfolio-backend-wgmj.onrender.com';

// E para o endpoint da API:
const API = `${BACKEND_URL}/api`;
const Chatbot = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Olá! Sou o assistente virtual. Como posso te ajudar hoje?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [sessionId, setSessionId] = useState(null);

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const { toast } = useToast();
  

  // 1. Inicializa o Reconhecimento de Voz UMA VEZ
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
      // Se a IA estiver falando ou processando, ignoramos o áudio
      if (window.speechSynthesis.speaking || isTyping) return;

      const transcricao = event.results[event.results.length - 1][0].transcript;
      if (transcricao.trim()) {
        handleSendMessage(transcricao);
      }
    };

    recognitionRef.current = recognition;
  }, [isTyping]); // Só reinicia se o estado de digitação mudar drasticamente

  // 2. Liga/Desliga o microfone automaticamente ao abrir/fechar o chat
  useEffect(() => {
    if (isOpen && recognitionRef.current && !isListening) {
      try {
        recognitionRef.current.start();
      } catch (e) {
        console.log("Microfone já estava ativo");
      }
    }
    return () => {
      if (recognitionRef.current) recognitionRef.current.stop();
    };
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = useCallback(async (textoParaEnviar) => {
    const mensagemFinal = textoParaEnviar || inputValue;
    if (!mensagemFinal.trim() || isTyping) return;

    setInputValue('');
    const mensagemUsuario = {
      id: Date.now(),
      type: 'user',
      content: mensagemFinal,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, mensagemUsuario]);
    setIsTyping(true);
try {
     const resposta = await fetch(`${API}/chat`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        // 'ngrok-skip-browser-warning': 'true' // Tente COMENTAR esta linha após clicar em "Visit Site" no navegador
    },
    body: JSON.stringify({ message: mensagemFinal, session_id: sessionId })
});
      const data = await resposta.json();
      
      if (data.session_id) setSessionId(data.session_id);

     /* const respostaBot = {
        id: Date.now() + 1,
        type: 'bot',
        //content: data.response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, respostaBot]);
      */
      falarTexto(data.response);

    } catch (erro) {
      toast({ title: "Erro", description: "Falha na conexão.", variant: "destructive" });
    } finally {
      setIsTyping(false);
    }
  }, [inputValue, sessionId, isTyping, toast]);

  const handleMicToggle = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
  };

  if (!isOpen) return (
    <Button onClick={onToggle} className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 shadow-lg z-50">
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
  const dispararDigitação = (textoCompleto) => {
    let i = 0;
    // Adiciona uma nova mensagem vazia do bot
    const novaMensagemId = Date.now();
    setMessages(prev => [...prev, { 
      id: novaMensagemId, 
      type: 'bot', 
      content: '', 
      timestamp: new Date() 
    }]);

    const timer = setInterval(() => {
      setMessages(prev => {
        return prev.map(msg => {
          if (msg.id === novaMensagemId && i < textoCompleto.length) {
            return { ...msg, content: textoCompleto.substring(0, i + 1) };
          }
          return msg;
        });
      });
      
      i++;
      if (i >= textoCompleto.length) clearInterval(timer);
    }, 40);
  };

 const falarTexto = async (texto) => {
  if (!texto) return;
  
  setIsTyping(true); 

  try {
    const response = await fetch("https://meu-portfolio-backend-wgmj.onrender.com/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: texto }), 
    });

    // Se o servidor deu erro (500), a gente para aqui
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro vindo do servidor:", errorData);
      throw new Error("Falha ao buscar áudio");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const audio = new Audio(url);

    audio.onplay = () => {
      setIsTyping(false);
      window.dispatchEvent(new CustomEvent("ia-falando", { detail: true }));
      dispararDigitação(texto);
    };

    audio.onended = () => {
      window.dispatchEvent(new CustomEvent("ia-falando", { detail: false }));
      URL.revokeObjectURL(url);
    };

    // --- ESSA LINHA ABAIXO É A CHAVE PARA PARAR O VÍDEO NO ERRO ---
    audio.onerror = () => {
      window.dispatchEvent(new CustomEvent("ia-falando", { detail: false }));
      setIsTyping(false);
    };

    await audio.play();

  } catch (error) {
    console.error("Erro no sistema de voz:", error);
    setIsTyping(false);
    // Se der erro no fetch, avisamos o vídeo para parar
    window.dispatchEvent(new CustomEvent("ia-falando", { detail: false }));
  }
};

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border flex flex-col z-50 font-sans">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isListening ? 'bg-green-400 animate-pulse' : 'bg-blue-500'}`}>
            <Bot className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Assistente de Voz</h3>
            <p className="text-[10px] text-blue-100">
              {isListening ? '🎤 Ouvindo você...' : 'Microfone Pausado'}
            </p>
          </div>
        </div>
        <Button onClick={onToggle} variant="ghost" size="icon" className="text-white h-8 w-8">
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`rounded-2xl p-3 max-w-[85%] text-sm ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white border shadow-sm text-gray-800'}`}>
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {isTyping && <div className="text-xs text-gray-400 animate-pulse">Bot escrevendo...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Fale ou digite..."
            className="rounded-full bg-gray-100 border-none"
          />
          <Button
            onClick={handleMicToggle}
            variant="outline"
            size="icon"
            className={`rounded-full transition-all ${isListening ? 'bg-red-50 border-red-200 text-red-600' : 'bg-gray-100'}`}
          >
            {isListening ? <Mic className="h-4 w-4" /> : <MicOff className="h-4 w-4" />}
          </Button>
          <Button onClick={() => handleSendMessage()} size="icon" className="rounded-full bg-blue-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;