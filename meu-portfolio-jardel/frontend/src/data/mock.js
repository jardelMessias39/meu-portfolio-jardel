// Mock data para o portfólio

export const profileData = {
  name: "Jardel Messias",
  title: "Desenvolvedor Júnior Full Stack",
  bio: "Transformando ideias em código desde junho de 2025. Apaixonado por criar soluções que fazem a diferença na vida das pessoas.",
  studying: "DevClub",
  startDate: "1 de junho de 2025",
  education: "Licenciatura em Informática - UNIT (2019)",
  location: "Brasil",
  phone: "(79) 99806-1093",
  email: "jardel.messias.dev@gmail.com",
  linkedin: "www.linkedin.com/in/jardel-messias-desenvolvedor",
  github: "https://github.com/jardelMessias39"
};

export const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "React"],
  backend: ["Node.js", "MongoDB"],
  tools: ["Git", "VS Code", "Figma", "Vercel", "Render"]
};


export const projects = [
  {
    id: 1,
    title: "Jogo Embaralhado (Shuffle)",
    category: "Game Development",
    description: "Quebra-cabeça interativo onde o usuário escolhe uma imagem e define em quantas partes quer dividi-la para depois remontar. Inclui diferentes imagens temáticas do Brasil.",
    features: [
      "Múltiplas opções de divisão (4x2, 4x3, etc.)",
      "Imagens temáticas brasileiras", 
      "Interface intuitiva com modo difícil",
      "Sistema visual de peças embaralhadas"
    ],
    objective: "Desenvolver concentração, percepção visual e coordenação motora",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://customer-assets.emergentagent.com/job_prompt-portfolio-bot/artifacts/78a9s9os_shuffle.png",
    demo: "https://jardelmessias39.github.io/projeto-embrulhado/",
    github: "https://github.com/jardelMessias39/projeto-embrulhado"
  },
  {
    id: 2,
    title: "Chuva de Palavras",
    category: "Game Development", 
    description: "Jogo de digitação espacial onde palavras caem do céu como uma chuva cósmica. O jogador deve digitá-las rapidamente antes que atinjam o solo.",
    features: [
      "Tela inicial com entrada de nome do jogador",
      "Visual espacial com efeito de estrelas",
      "Interface limpa e moderna",
      "Sistema de confirmação de jogador"
    ],
    objective: "Desenvolver velocidade de digitação, reflexos e coordenação motora",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://customer-assets.emergentagent.com/job_prompt-portfolio-bot/artifacts/mpixj6x1_teladousuario.png",
    demo: "https://jardelmessias39.github.io/jogodepalavras/",
    github: "https://github.com/jardelMessias39/jogodepalavras"
  },
  {
    id: 3,
    title: "Site Comidas Típicas do Brasil",
    category: "Web Development",
    description: "Plataforma gastronômica dedicada à culinária brasileira, apresentando pratos típicos de diferentes regiões com receitas de chefs renomados.",
    features: [
      "Catálogo de comidas típicas regionais",
      "Seções organizadas: bebidas, doces, receitas",
      "Design responsivo e atrativo",
      "Sistema de cadastro e login",
      "Interface intuitiva para navegação"
    ],
    objective: "Preservar e divulgar a rica cultura gastronômica brasileira",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/comida-tipica-preview.png",
    demo: " https://jardelmessias39.github.io/comida-tipica-brasil/",
    github: "https://github.com/jardelMessias39/comida-tipica-brasil"
  },
  
   {
    id: 4,
    title: "Site de Turismo Interativo",
    category: "Web Development",
    description: "Aplicação web que permite explorar destinos turísticos pelo Brasil. Ao selecionar um estado, o mapa destaca a região e exibe imagens, descrições e curiosidades culturais.",
    features: [
      "Mapa interativo com destaque por estado",
      "Seleção de destinos via dropdown ou clique no mapa",
      "Card com imagem, título e descrição do destino",
      "Design responsivo e intuitivo",
      "Integração com JavaScript puro e BrMap"
    ],
    objective: "Oferecer uma experiência imersiva e educativa sobre os principais destinos turísticos do Brasil",
    technologies: ["HTML", "CSS", "JavaScript", "BrMap"],
    
    image:  "/turismo-preview.png",
    demo: "https://jardelmessias39.github.io/turismo/",
    github: "https://github.com/jardelMessias39/turismo"
},

{
  id: 5,
  title: "Crocodilo Aventura",
  category: "Game Development",
  description: "Jogo de sobrevivência e evolução ambientado na floresta Amazônica. Kroko nasce sozinho e precisa crescer, caçar e desenvolver habilidades para salvar sua mãe das garras de uma cobra gigante.",
  features: [
    "Sistema de evolução por fases",
    "Combate estratégico com inimigos da selva",
    "Narrativa envolvente e progressiva",
    "Ambientação inspirada na biodiversidade amazônica",
    "Idealizado por Jardel Messias"
  ],
  objective: "Criar uma experiência de aventura e superação com elementos de estratégia e evolução",
  technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
  image: "/crocodilo-preview.png", // substitua pelo print que você tirar do protótipo
  demo: "#", // substitua pelo link do jogo quando estiver disponível
  github: "#" // ou o repositório correto
}

];

export const experience = [
  {
    role: "Desenvolvedor Júnior Full Stack",
    company: "DevClub",
    period: "Jun 2025 - Presente",
    description: "Desenvolvimento de projetos web e jogos educativos com foco em acessibilidade e experiência do usuário. Aprendendo React e Node.js."
  },
  {
    role: "Cortador",
    company: "Dakota Calçados",
    period: "Experiência Anterior",
    description: "Responsável pelo corte de materiais para produção de calçados, desenvolvendo precisão e atenção aos detalhes."
  }
];

export const education = [
  {
    degree: "Licenciatura em Informática",
    institution: "Universidade Tiradentes (UNIT)",
    year: "2019",
    description: "Formação completa em informática com foco educacional, desenvolvendo base sólida em tecnologia."
  }
];

export const courses = [
  "Instalador Elétrico",
  "Atendimento ao Cliente", 
  "Desenvolvimento Web - DevClub",
  "JavaScript Avançado",
  "HTML e CSS Responsivo"
];

export const chatbotResponses = {
  greeting: "Olá! Sou o assistente virtual do portfólio. Posso te contar sobre a experiência, projetos e objetivos como desenvolvedor. O que gostaria de saber?",
  
  experience: "Comecei na programação em 1 de junho de 2025 na empresa DevClub. Sou formado em Licenciatura em Informática pela UNIT desde 2019. Atualmente estou focado em aprender HTML, CSS e JavaScript, com planos de estudar React e Node.js em breve.",
  
  projects: "Já desenvolvi 4 projetos principais: o Jogo Embaralhado (quebra-cabeça interativo), Chuva de Palavras (jogo de digitação) , um Site de Turismo interativo (que permite explorar destinos turísticos pelo Brasil) e o Site de Comida Típica Brasileira (que apresenta pratos típicos de diferentes regiões com receitas de chefs renomados). Cada projeto foi pensado para gerar impacto positivo na vida das pessoas.",
  
  motivation: "O que me fascina na programação é ver códigos se transformarem em algo visual e funcional. A capacidade de transformar uma ideia em realidade através do código é o que me motiva todos os dias. Quero fazer parte de equipes que desenvolvem projetos que melhoram a vida das pessoas.",
  
  goals: "Meu objetivo é me tornar um bom programador e profissional, sempre correndo atrás do conhecimento. Quero participar de equipes que fazem a diferença no mundo, desenvolvendo projetos que tragam produtividade e melhorem a vida das pessoas.",
  
  skills: "Atualmente estou estudando HTML, CSS e JavaScript. Meu próximo passo é aprender React e Node.js para me tornar um desenvolvedor full stack completo.",
  
  default: "Desculpe, não entendi sua pergunta. Você pode me perguntar sobre experiência, projetos, motivação, objetivos ou habilidades!"
};

export const testimonials = [
  {
    name: "Equipe DevClub",
    role: "Cursando na Empresa DevClub",
    content: "Um desenvolvedor dedicado e sempre disposto a aprender. Seus projetos mostram criatividade e preocupação com acessibilidade.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
  },
  {
    name: "Universidade Tiradentes (UNIT)",
    role: "UNIT - Licenciatura em Informática", 
    content: "Demonstrou excelente capacidade de transformar conceitos teóricos em soluções práticas e acessíveis.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
  }
];