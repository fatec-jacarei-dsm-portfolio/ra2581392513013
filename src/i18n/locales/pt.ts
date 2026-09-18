const pt = {
  nav: {
    home: "Início",
    about: "Sobre Mim",
    projects: "Projetos",
    others: "Outros",
    label: "Navegação principal",
    menu: "Abrir menu de navegação",
    language: "Idioma",
    skip: "Pular para o conteúdo",
  },
  hero: {
    subtitle: "Sou Desenvolvedor de Software",
    download: "Baixar Currículo",
    contact: "Entrar em Contato",
    emailSubject: "Contato via Portfólio",
    emailBody: "Olá Vinícius! Vi seu portfólio e gostaria de conversar...",
    photoAlt: "Foto de Vinícius Lêdro",
  },
  about: {
    title: "Sobre Mim",
    p1: "Profissional em início de carreira com sólida formação acadêmica, cursando Desenvolvimento de Software Multiplataforma na FATEC e recém-graduado como Técnico em Tecnologia da Informação.",
    p2: "Atualmente, participo do programa Oracle Next Education para aprofundar meus conhecimentos. Minha trajetória inclui experiência como Jovem Aprendiz de Analista de Negócios na Embraer, colaborando no levantamento de requisitos e estruturação de projetos com metodologias ágeis e JIRA.",
    p3: "Em projetos práticos, liderei como Product Owner o desenvolvimento do “Fatrek”, um sistema de gestão acadêmica, atuando na prototipagem, validação de requisitos e cerimônias do SCRUM. Estou preparado para agregar valor a uma equipe de desenvolvimento.",
  },
  projects: {
    title: "Projetos",
    count_one: "{{count}} projeto",
    count_other: "{{count}} projetos",
    categories: {
      academic: "Projetos Acadêmicos",
      personal: "Projetos Pessoais",
      professional: "Projetos Profissionais",
    },
    roleLabel: "Minha contribuição",
    stackLabel: "Tecnologias",
    live: "Ver projeto",
    code: "Ver código",
    newTab: "abre em nova aba",
    screenshotOf: "Tela do projeto {{title}}",
    items: {
      fatrek: {
        title: "Fatrek",
        summary: "Aplicação web para auxiliar o corpo docente da FATEC Jacareí a disponibilizar horários e salas. Alunos utilizam para localização e checagem de grade.",
        role: "Atuei como Product Owner, liderando o levantamento de requisitos, priorização do backlog e validação das entregas com o cliente.",
      },
      inpe: {
        title: "Portal de Dados Limnológicos",
        summary: "Aplicação web para visualização de dados limnológicos e meteorológicos dos reservatórios de Furnas (SIMA). Organiza dados em uma interface limpa com filtros e consultas personalizadas.",
        role: "Como Product Owner, fui responsável pela definição do escopo, gestão do backlog do produto e alinhamento entre a equipe técnica e o focal point.",
      },
      valle: {
        title: "1000 Valle Multimarcas",
        summary: "Sistema web desenvolvido para a 1000 Valle Multimarcas com foco no gerenciamento de leads, acompanhamento de vendas e visualização de indicadores por meio de dashboards.",
        role: "Atuei como Product Owner, participando do levantamento e definição de requisitos, organização e priorização do backlog, acompanhamento das entregas e alinhamento entre as necessidades do negócio e a equipe de desenvolvimento.",
      },
      megasena: {
        title: "Megasena",
        summary: "Aplicação full-stack para consulta de resultados da Mega-Sena. Consome API própria em Node.js/Express com banco PostgreSQL.",
      },
      sorteioMegasena: {
        title: "Sorteio Megasena",
        summary: "Aplicação desenvolvida em React e TypeScript para gerar palpites da Mega-Sena. Possui histórico de apostas gerenciado via Context API, rotas com React Router e estilização dinâmica via CSS-in-JS.",
      },
      secretNumber: {
        title: "Jogo do Número Secreto",
        summary: "Jogo de adivinhação desenvolvido durante a formação Oracle Next Education. Lógica de validação e feedback implementada em JavaScript puro.",
      },
      secretFriend: {
        title: "Challenge Amigo Secreto",
        summary: "Sistema para organizar sorteios de Amigo Secreto. Focado na manipulação do DOM e lógica de sorteio aleatório com JS puro.",
      },
    },
  },
  others: {
    title: "Experiência e Formação",
    experience: {
      title: "Experiência",
      years: "+2 anos",
      field: "Engenharia de Software",
    },
    education: {
      title: "Formação",
      desc: "Cursando Desenvolvimento de Software Multiplataforma - FATEC Jacareí",
    },
  },
  skills: {
    title: "Habilidades",
  },
  footer: {
    rights: "Todos os direitos reservados",
    email: "Enviar e-mail",
  },
  date: {
    months: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  },
};

export default pt;
export type Messages = typeof pt;
