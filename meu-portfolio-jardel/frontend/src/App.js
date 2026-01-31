// App.jsx - ATUALIZADO
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
// AvatarFalante será usado DENTRO do Hero, não aqui

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    // Adicionamos 'layout-stack' aqui para controlar o scroll
    <div className="min-h-screen layout-stack">
      <Header onChatOpen={handleChatToggle} />
      
      <main>
        {/* Cada div id agora é uma 'janela' que "trava" no topo */}
        <div id="home" className="secao-janela">
          <Hero onChatOpen={handleChatToggle} />
        </div>
        
        <div id="about" className="secao-janela">
          <About />
        </div>
        
        <div id="projects" className="secao-janela">
          <Projects />
        </div>
        
        <div id="skills" className="secao-janela">
          <Skills />
        </div>
      </main>

      <div id="contact" className="secao-janela">
        <Footer />
      </div>

      <Chatbot isOpen={isChatOpen} onToggle={handleChatToggle} />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;