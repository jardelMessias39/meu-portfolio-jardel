import React, { useState, useEffect, useRef } from 'react';
import { Mic } from 'lucide-react';

const AvatarFalante = ({
  imagemParado = "/avatar-parado.jpeg",
  videoFalando = "/avatar-falando.mp4",
  tamanho = 300
}) => {
  const [estaFalando, setEstaFalando] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleFalando = (event) => setEstaFalando(event.detail);
    window.addEventListener('ia-falando', handleFalando);
    return () => window.removeEventListener('ia-falando', handleFalando);
  }, []);

  // Adicione isso dentro do seu componente AvatarFalante
  useEffect(() => {
    if (videoRef.current) {
      if (estaFalando) {
        videoRef.current.play().catch(err => console.log("Erro ao dar play:", err));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Volta o vídeo para o primeiro frame (igual à foto)
      }
    }
  }, [estaFalando]);

  return (
    <div className="relative flex items-center justify-center" style={{ width: tamanho, height: tamanho }}>

      {/* Moldura Circular */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-200">

        {/* Imagem Parada */}
        <img
          src={imagemParado}
          alt="Avatar Parado"
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${estaFalando ? 'opacity-0' : 'opacity-100'
            }`}
          style={{ transform: 'scale(1.1)' }} // Ajuste o scale se precisar de mais zoom ou menos
        />

        {/* Vídeo Falando */}
        <video
            ref={videoRef}
            src={videoFalando}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              estaFalando ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ 
            transform: 'scale(1.2) translateX(70px)',
                          // O primeiro valor (65%) empurra para a direita, o segundo (10%) empurra para baixo
                          objectPosition: ' 40% 0%' 
            }}  
          />
      </div>

      {/* Microfone Animado (Fica na frente de tudo) */}
      {estaFalando && (
        <div className="absolute -bottom-4 z-20 bg-blue-600 p-3 rounded-full shadow-lg animate-bounce border-2 border-white">
          <Mic className="h-5 w-5 text-white" />
        </div>
      )}

      {/* Efeito de Ondas de Som atrás do círculo */}
      {estaFalando && (
        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 -z-10" />
      )}
    </div>
  );
};

export default AvatarFalante;