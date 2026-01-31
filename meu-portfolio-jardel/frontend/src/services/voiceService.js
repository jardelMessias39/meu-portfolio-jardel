// src/services/voiceService.js

// 1. Função para falar (TTS)
export const falar = (texto, callbackInicio, callbackFim) => {
  const sintetizador = window.speechSynthesis;
  const pronuncia = new SpeechSynthesisUtterance(texto);
  pronuncia.lang = 'pt-BR';
  pronuncia.rate = 1.1;

  pronuncia.onstart = () => callbackInicio(); // Ativa a animação da foto
  pronuncia.onend = () => callbackFim();      // Desativa a animação

  sintetizador.speak(pronuncia);
};

// 2. Configuração do Ouvinte (Escuta Ativa)
export const iniciarOuvinte = (onResultado) => {
  const Reconhecimento = window.SpeechRecognition || window.webkitSpeechRecognition;
  
  if (!Reconhecimento) {
    console.error("Navegador não suporta voz.");
    return null;
  }

  const escuta = new Reconhecimento();
  escuta.continuous = true;
  escuta.lang = 'pt-BR';

  escuta.onresult = (event) => {
    const transcricao = event.results[event.results.length - 1][0].transcript;
    onResultado(transcricao);
  };

  escuta.start();
  return escuta;
};
