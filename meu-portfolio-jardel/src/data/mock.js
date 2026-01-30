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
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  backend: ["Node.js", "MongoDB", "Python", "FastAPI", "OpenAI API"],
  tools: ["Git", "VS Code", "Figma", "Vercel", "Render", "ElevenLabs"]
};


 export const projects = [
  {
    id: 1,
    title: "Jogo Embaralhado",
    category: "Game Development",
    image: "/Shuffle-preview.png",
    description: "Um quebra-cabeça interativo que desafia a percepção lógica do usuário.",
    objective: "Explorar a manipulação de canvas e suporte avançado para dispositivos móveis.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API"],
    features: ["Rotação de peças", "Suporte a Touch Events", "Playlist de fundo"],
    github: "https://github.com/jardelMessias39/projeto-embrulhado", // Substitua pelo seu link real
    demo: "https://jardelmessias39.github.io/projeto-embrulhado/" // Substitua pelo seu link real
  },
  {
    id: 2,
    title: "Chuva de Palavras",
    category: "Game Development",
    image: "/chuvadepalavra-preview.png",
    description: "Jogo de digitação frenético para testar agilidade e coordenação.",
    objective: "Praticar manipulação de DOM em tempo real e lógica de persistência.",
    technologies: ["JavaScript", "LocalStorage", "Animações CSS"],
    features: ["Sistema de Recordes", "Dificuldade Progressiva", "Feedback Visual"],
    github: "https://github.com/jardelMessias39/jogodepalavras",
    demo: "https://jardelmessias39.github.io/jogodepalavras/"
  },
  {
    id: 3,
    title: "Chefes do Brasil",
    category: "Web Development",
    image: "/comida-tipicas-preview.png",
    description: "Plataforma focada na culinária brasileira, permitindo o compartilhamento de receitas.",
    objective: "Desenvolver uma aplicação com foco em interação social e comunidade.",
    technologies: ["React", "CSS Modules", "LocalStorage"],
    features: ["Mural Interativo", "Postagem de Receitas", "Layout Responsivo"],
    github: "https://github.com/jardelMessias39/comida-tipica-brasil",
    demo: "https://jardelmessias39.github.io/comida-tipica-brasil/"
  },
  {
    id: 4,
    title: "DevBurger",
    category: "Web Development",
    image: "/deliveryburguer-preview.png",
    description: "Interface completa de delivery para pedidos de lanches em tempo real.",
    objective: "Implementar lógica de carrinho de compras e gerenciamento de estado.",
    technologies: ["JavaScript", "Tailwind CSS", "Mobile First"],
    features: ["Carrinho Dinâmico", "Validação de horário", "Finalização via WhatsApp"],
    github: "https://github.com/jardelMessias39/dev-burguer-completo",
    demo: "https://github.com/jardelMessias39/dev-burguer-completo"
  },
  {
    id: 5,
    title: "App do Tempo",
    category: "Web Development",
    image: "/app-do-tempo-preview.png",
    description: "Consulta de clima global utilizando APIs de meteorologia em tempo real.",
    objective: "Dominar o consumo de APIs REST e tratamento de dados assíncronos.",
    technologies: ["JavaScript", "OpenWeather API", "Fetch API"],
    features: ["Busca por cidade", "Ícones Dinâmicos", "Previsão detalhada"],
    github: "https://github.com/jardelMessias39/projeto-clima",
    demo: "https://jardelmessias39.github.io/projeto-clima/"
  },
 
  {
  id: 6,
  title: "Acarajé do Diego / Dois Irmãos",
  category: "Web Development",
  image: "/app-Acaraje-preview.png", 
  description: "Sistema completo de delivery e gestão para acarajeteria, com cardápio dinâmico e painel administrativo.",
  objective: "Desenvolver uma solução ponta a ponta que automatiza desde a escolha dos recheios pelo cliente até o controle de vendas pelo proprietário.",
  technologies: ["React", "Tailwind CSS", "Node.js", "LocalStorage"],
  features: [
    "Cardápio com personalização de itens (recheios e opcionais)", //
    "Dashboard administrativo com métricas de vendas e gestão de pedidos", //
    "Integração de fechamento de pedido via WhatsApp com resumo detalhado", //
    "Fluxo de checkout completo com opções de entrega, retirada e métodos de pagamento" //
  ],
  github: "https://github.com/jardelMessias39/App-Acaraje",
  demo: " https://acarajedabahia.vercel.app/" 
},
{
  id: 7,
  title: "Dashboard Financeiro PME",
  category: "Web Development",
  image: "/dashboard-pme-preview.png", 
  description: "Sistema de gestão financeira voltado para pequenas e médias empresas, com foco em fluxo de caixa e análise de métricas.",
  objective: "Projetar uma interface analítica que transforma dados brutos em decisões estratégicas para empreendedores.",
  technologies: ["React", "Tailwind CSS", "Recharts/Chart.js", "Lucide Icons"],
  features: [
    "Gráficos interativos de receitas vs despesas",
    "Monitoramento de fluxo de caixa em tempo real",
    "Gestão de categorias financeiras e extratos detalhados",
    "Interface otimizada para leitura rápida de indicadores (KPIs)"
  ],
  github: "https://github.com/jardelmessias39/Dashboard-Financeiro-PME",
  demo: "https://github.com/jardelMessias39/Dashboard-Financeiro-PME" 
},


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
  greeting: "Olá! Sou o assistente virtual do Jardel Messias. Estou aqui para te guiar pelos projetos e conquistas dele como Desenvolvedor Full Stack. O que você gostaria de explorar hoje?",
  
  experience: "O Jardel iniciou sua jornada prática na programação em junho de 2025, integrando a comunidade DevClub. Ele possui uma base sólida acadêmica, sendo formado em Licenciatura em Informática pela UNIT desde 2019. Atualmente, domina tecnologias como HTML5, CSS3, JavaScript e React, com foco em arquiteturas modernas.",
  
  projects: "O portfólio atual conta com 7 projetos estratégicos: \n1. Jogo Embaralhado (Lógica e UX)\n2. Chuva de Palavras (Game Loop)\n3. Acarajé do Diego (E-commerce Full Stack)\n4. Dashboard Financeiro PME (Análise de Dados)\n5. DevBurger (Sistema de Delivery)\n6. App do Tempo (Integração de APIs)\n7. Comidas Típicas Brasileiras (Site de Receitas)\nQual deles você gostaria de detalhar?",
  
  motivation: "O que move o Jardel é a capacidade de transformar linhas de código em soluções visuais e funcionais que resolvem problemas reais. Ele acredita que a tecnologia é a ferramenta mais poderosa para gerar impacto positivo e produtividade na vida das pessoas.",
  
  goals: "O objetivo principal é consolidar-se como um desenvolvedor Full Stack de alta performance, integrando equipes inovadoras que buscam excelência técnica e impacto social através de software escalável.",
  
  skills: "Atualmente, o stack principal inclui JavaScript (ES6+), React.js e Tailwind CSS para o Frontend, além de Node.js e Python para o Backend. Ele também possui experiência com integração de APIs de Inteligência Artificial e bancos de dados como MongoDB.",
  
  default: "Interessante! Não tenho uma resposta específica para isso ainda, mas posso te falar sobre a formação do Jardel, os 7 projetos ativos, suas motivações ou suas habilidades técnicas. O que prefere?"
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