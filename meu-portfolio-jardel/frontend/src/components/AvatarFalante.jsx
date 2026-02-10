import React, { useState, useEffect, useRef } from 'react';
import { Mic } from 'lucide-react';

const AvatarFalante = ({
  imagemParado = "/avatar-parado.png",
  videoFalando = "/avatar-falando.mp4",
  tamanho = 300
}) => {
  const [estaFalando, setEstaFalando] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Handler para o evento customizado 'ia-falando'
    const handleFalando = (event) => {
      if (typeof event.detail === 'boolean') {
        setEstaFalando(event.detail);
      }
    };

    window.addEventListener('ia-falando', handleFalando);
    return () => {
      window.removeEventListener('ia-falando', handleFalando);
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    if (estaFalando) {
      // Tenta iniciar o vídeo, captura erros (ex: autoplay bloqueado)
      videoRef.current.play().catch(err => {
        console.warn('Erro ao tentar reproduzir o vídeo do avatar:', err);
      });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reinicia para o primeiro frame
    }
  }, [estaFalando]);

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: tamanho, height: tamanho }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Moldura Circular */}
      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-slate-200">
        {/* Imagem Parada */}
        <img
          src={imagemParado}
          alt="Avatar parado"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            estaFalando ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transform: 'scale(1.1)',
            objectPosition: '50% 10%',
          }}
          onLoad={() => console.log('Imagem carregada com sucesso!')}
          onError={(e) => console.error('Erro ao carregar imagem:', e)}
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
            transform: 'scale(1.1)',
            objectPosition: '50% 10%',
          }}
          aria-hidden={!estaFalando}
        />
      </div>

      {/* Microfone Animado */}
      {estaFalando && (
        <div
          className="absolute -bottom-4 z-20 bg-blue-600 p-3 rounded-full shadow-lg animate-bounce border-2 border-white"
          aria-label="Avatar falando"
        >
          <Mic className="h-5 w-5 text-white" />
        </div>
      )}

      {/* Ondas de Som */}
      {estaFalando && (
        <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20 -z-10" />
      )}
    </div>
  );
};

export default AvatarFalante;