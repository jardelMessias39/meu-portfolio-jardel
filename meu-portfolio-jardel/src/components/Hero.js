import React from 'react';
import { ArrowRight, MessageCircle, Mic } from 'lucide-react';
import { Button } from './ui/button';
import AvatarFalante from './AvatarFalante';

const Hero = ({ onChatOpen }) => {
  // Removi o VoiceButton que estava sobrando e criando o segundo ícone fixo
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Lado Esquerdo: Conteúdo */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                Desenvolvedor Júnior
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transformando
              <span className="text-blue-600 block">Ideias em Código</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Desenvolvedor Full Stack apaixonado por criar soluções que fazem a diferença. 
              Focado em acessibilidade e experiência do usuário.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                Ver Projetos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={onChatOpen}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg group"
            >
              <Mic className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Falar com Jardel
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">5-1</div>
              <div className="text-sm text-gray-600">Projetos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2025</div>
              <div className="text-sm text-gray-600">DevClub</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-sm text-gray-600">Dedicação</div>
            </div>
          </div>
        </div>

        {/* Lado Direito: Avatar */}
        <div className="relative flex flex-col items-center justify-center">
          
          <AvatarFalante 
            imagemParado="/avatar-parado.jpeg"
            videoFalando="/avatar-falando.mp4"
            tamanho={350} // Aumentei um pouco para dar destaque
          />
          
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Jardel</h2>
            <p className="text-gray-600 mt-1">Full Stack Developer</p>
          </div>
          
          {/* Dica de voz unificada */}
          <div className="mt-6 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100 animate-fade-in">
            <p className="text-blue-600 font-medium flex items-center gap-2 text-sm">
              <span className="flex h-3 w-3 bg-blue-500 rounded-full animate-ping"></span>
              Clique em "Falar com Jardel" para interagir
            </p>
          </div>
          
          {/* Elementos flutuantes */}
          <div className="absolute -top-4 right-8 bg-white p-3 rounded-full shadow-lg animate-bounce">
            <span className="text-2xl">💻</span>
          </div>
          <div className="absolute top-1/4 -left-4 bg-white p-3 rounded-full shadow-lg animate-pulse">
            <span className="text-2xl">🚀</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;