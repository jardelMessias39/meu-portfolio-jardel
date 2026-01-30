// src/components/AvatarFalante.jsx
import React, { useState, useEffect, useRef } from 'react';

const AvatarFalante = ({ 
  imagemParado = "/avatar-parado.jpeg",
  videoFalando = "/avatar-falando.mp4",
  tamanho = 250 
}) => {
  const [estaFalando, setEstaFalando] = useState(false);
  const videoRef = useRef(null);

  // Escuta o evento que o chatbot dispara
  useEffect(() => {
    const handleFalando = (event) => {
      setEstaFalando(event.detail);
    };

    window.addEventListener('ia-falando', handleFalando);
    
    return () => {
      window.removeEventListener('ia-falando', handleFalando);
    };
  }, []);

  // Controla play/pause do vídeo
  useEffect(() => {
    if (videoRef.current) {
      if (estaFalando) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [estaFalando]);

  return (
    <div className="relative inline-block">
      {/* Efeito de ondas quando fala */}
      {estaFalando && (
        <>
          <div 
            className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"
            style={{ animationDuration: '1s' }}
          />
          <div 
            className="absolute inset-0 rounded-full bg-purple-500 animate-ping opacity-15"
            style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}
          />
        </>
      )}
      
      {/* Container das mídias */}
      <div 
        className="relative rounded-full overflow-hidden"
        style={{ width: tamanho, height: tamanho }}
      >
        {/* Imagem parado */}
        <img
          src={imagemParado}
          alt="Avatar parado"
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-300
            ${estaFalando ? 'opacity-0' : 'opacity-100'}
          `}
        />
        
        {/* Vídeo falando */}
        <video
          ref={videoRef}
          src={videoFalando}
          loop
          muted
          playsInline
          className={`
            absolute inset-0 w-full h-full object-cover
            transition-opacity duration-300
            ${estaFalando ? 'opacity-100' : 'opacity-0'}
          `}
        />
      </div>

      {/* Borda animada */}
      <div 
        className={`
          absolute inset-0 rounded-full pointer-events-none
          transition-all duration-300
          ${estaFalando 
            ? 'ring-4 ring-blue-500 ring-offset-4 ring-offset-transparent shadow-2xl shadow-blue-500/50' 
            : 'ring-2 ring-gray-300'
          }
        `}
        style={{ width: tamanho, height: tamanho }}
      />
      
      {/* Badge de status */}
      <div 
        className={`
          absolute -bottom-3 left-1/2 transform -translate-x-1/2
          px-4 py-1.5 rounded-full text-white text-sm font-medium
          transition-all duration-300
          ${estaFalando 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-100' 
            : 'bg-gray-400 scale-90'
          }
        `}
      >
        {estaFalando ? (
          <span className="flex items-center gap-2">
            <span className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
            Falando...
          </span>
        ) : (
          <span>🎤 Diga "Jardel"</span>
        )}
      </div>
    </div>
  );
};

export default AvatarFalante;