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

{
  id: 8,
  title: "AgendaLivre Aí",
  category: "Web Development",
  image: "/AgendaLivreAí-preview.png",
  description: "Plataforma completa de agendamento conectada ao WhatsApp, permitindo que clientes marquem horários diretamente pelo app com confirmação automática e pagamento integrado.",
  objective: "Criar uma solução ponta a ponta que une agendamento online, comunicação via WhatsApp e pagamentos para pequenos negócios e profissionais autônomos.",
  technologies: ["React", "Node.js", "Neon (PostgreSQL)", "Evolution API", "Mercado Pago", "Tailwind CSS"],
  features: [
    "Agendamento integrado ao WhatsApp via Evolution API com confirmação automática",
    "Banco de dados Neon (PostgreSQL) para armazenamento escalável na nuvem",
    "Pagamento online integrado com Mercado Pago"
  ],
  github: "https://github.com/jardelMessias39/AgendaLivreAi",
  demo: "https://github.com/jardelMessias39/AgendaLivreAi",
  private: true
},

{
  id: 9,
  title: "Secretária.Ai",
  category: "IA / Automação",
  image: "/secretária.Ai-preview.png",
  description: "Assistente virtual com IA que automatiza o atendimento via WhatsApp, agenda compromissos de forma autônoma e processa pagamentos — com backend escalável na Railway.",
  objective: "Desenvolver uma secretária digital inteligente capaz de atender clientes 24/7, integrando WhatsApp, pagamentos e banco de dados em uma arquitetura moderna com Next.js.",
  technologies: ["Next.js", "Neon (PostgreSQL)", "Evolution API", "Stripe", "Railway", "OpenAI API"],
  features: [
    "Atendimento autônomo via WhatsApp com Evolution API e linguagem natural (OpenAI)",
    "Backend hospedado na Railway com banco de dados Neon (PostgreSQL)",
    "Cobrança e pagamentos integrados com Stripe"
  ],
  github: "https://github.com/jardelMessias39/Secretaria.Ai",
  demo: "https://github.com/jardelMessias39/Secretaria.Ai",
  private: true
},

{
  id: 10,
  title: "EloPro",
  category: "Mobile Development",
  image: "/geoElopro-preview.jpeg",
  description: "App mobile de geolocalização que conecta clientes a profissionais qualificados na região, com infraestrutura robusta em Supabase, Firebase e Google Cloud.",
  objective: "Criar um marketplace de serviços local com mapa interativo em tempo real, autenticação segura e pagamentos integrados, desenvolvido em Flutter para iOS e Android.",
  technologies: ["Flutter", "Supabase", "Firebase", "Google Cloud", "Mercado Pago"],
  features: [
    "Mapa em tempo real com geolocalização de profissionais próximos",
    "Infraestrutura em Supabase + Firebase + Google Cloud para alta disponibilidade",
    "Pagamento integrado com Mercado Pago diretamente no app"
  ],
  github: "https://github.com/jardelMessias39/EloPro",
  demo: "https://github.com/jardelMessias39/EloPro",
  private: true
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
  greeting: "Olá! Sou o Antônio, assistente virtual do Jardel Messias. Estou aqui para te apresentar os projetos e conquistas dele como Desenvolvedor Full Stack. O que você gostaria de explorar hoje?",
  
  experience: "O Jardel iniciou sua jornada prática na programação em junho de 2025, integrando a comunidade DevClub. Possui formação acadêmica em Licenciatura em Informática pela UNIT (2019). Domina React, Next.js, Node.js, Python/FastAPI e Flutter, com experiência em integrações como Evolution API (WhatsApp), OpenAI, Mercado Pago e Stripe.",
  
  projects: "O portfólio conta com 10 projetos, sendo 3 privados:\n\n PROJETOS PÚBLICOS:\n1. Jogo Embaralhado (JavaScript + Web Audio API)\n2. Chuva de Palavras (JS + LocalStorage)\n3. Chefes do Brasil (React)\n4. DevBurger (Delivery via WhatsApp)\n5. App do Tempo (OpenWeather API)\n6. Acarajé do Diego (Full-Commerce)\n7. Dashboard Financeiro PME (Recharts + KPIs)\n\n PROJETOS PRIVADOS:\n8. AgendaLivre Aí — Agendamento + WhatsApp + Mercado Pago + Neon\n9. Secretária.Ai — IA 24/7 + WhatsApp + Stripe + Railway + Next.js\n10. EloPro — App Flutter + Geolocação + Supabase + Firebase + Google Cloud\n\nQual deles você gostaria de detalhar?",
  
  motivation: "O que move o Jardel é a capacidade de transformar linhas de código em soluções visuais e funcionais que resolvem problemas reais. Ele acredita que a tecnologia é a ferramenta mais poderosa para gerar impacto positivo e produtividade na vida das pessoas.",
  
  goals: "O objetivo principal é consolidar-se como um desenvolvedor Full Stack de alta performance, integrando equipes inovadoras que buscam excelência técnica e impacto social através de software escalável.",
  
  skills: "Stack atual: React, Next.js e Tailwind CSS no Frontend. Node.js, Python e FastAPI no Backend. Flutter para mobile. Bancos de dados: MongoDB Atlas, Neon (PostgreSQL), Supabase e Firebase. Integrações avançadas: Evolution API (WhatsApp), OpenAI API, ElevenLabs, Mercado Pago e Stripe. Hospedagem: Vercel, Render, Railway e Google Cloud.",
  
  default: "Interessante! Não tenho uma resposta específica para isso ainda, mas posso te falar sobre os 10 projetos do Jardel (incluindo 3 sistemas privados com WhatsApp, IA e pagamentos), suas habilidades técnicas ou sua trajetória. O que prefere?"
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