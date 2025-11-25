import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- CONFIGURAÇÃO MANUAL COM TODOS OS TEXTOS ---
const resources = {
  pt: {
    translation: {
      navbar: {
        home: "Início",
        about: "Sobre Mim",
        projects: "Projetos",
        others: "Outros"
      },
      hero: {
        title: "Vinícius Lêdro",
        subtitle: "Sou Desenvolvedor de Software",
        download: "Baixar Currículo",
        contact: "Entrar em Contato",
        emailSubject: "Contato via Portfólio",
        emailBody: "Olá Vinícius! Vi seu portfólio e gostaria de conversar..."
      },
      about: {
        title: "Sobre Mim",
        p1: "Profissional em início de carreira com sólida formação acadêmica, cursando Desenvolvimento de Software Multiplataforma na FATEC e recém-graduado como Técnico em Tecnologia da Informação.",
        p2: "Atualmente, participo do programa Oracle Next Education para aprofundar meus conhecimentos. Minha trajetória inclui experiência como Jovem Aprendiz de Analista de Negócios na Embraer, colaborando no levantamento de requisitos e estruturação de projetos com metodologias ágeis e JIRA.",
        p3: "Em projetos práticos, liderei como Product Owner o desenvolvimento do 'Fatrek', um sistema de gestão acadêmica, atuando na prototipagem, validação de requisitos e cerimônias do SCRUM. Estou preparado para agregar valor a uma equipe de desenvolvimento."
      },
      others: {
        experience: {
          title: "Experiência",
          years: "+2 anos",
          field: "Engenharia de Software"
        },
        education: {
          title: "Formação",
          desc: "Cursando Desenvolvimento de Software Multiplataforma - FATEC Jacareí"
        }
      },
      skills: { 
        title: "Habilidades" 
      },
      // --- PROJETOS (PT) ---
      projects: {
        title: "Projetos",
        categories: {
          academic: " Projetos Acadêmicos",
          professional: "Projetos Profissionais",
          personal: "Projetos Pessoais"
        },
        fatrek: {
          desc: "Aplicação web para auxiliar o corpo docente da FATEC Jacareí a disponibilizar horários e salas. Alunos utilizam para localização e checagem de grade.",
          tech: "Tecnologias: JavaScript, Node.js, HTML, CSS, Figma",
          role: "Minha contribuição: Atuei como Product Owner, liderando o levantamento de requisitos, priorização do backlog e validação das entregas com o cliente."
        },
        inpe: {
          desc: "Aplicação Web para visualização de dados limnológicos e meteorológicos dos reservatórios de Furnas (SIMA). Organiza dados em uma interface limpa com filtros e consultas personalizadas.",
          tech: "Tecnologias: React, Node.js TypeScript, Docker, PortgreSQL",
          role: "Minha contribuição: Como Product Owner, fui responsável pela definição do escopo, gestão do backlog do produto e alinhamento entre a equipe técnica e o focal point."
        },
        megasena: {
          desc: "Aplicação full-stack para consulta de resultados da Mega-Sena. Consome API própria em Node.js/Express com banco PostgreSQL.",
          tech: "Tecnologias: JavaScript, Node.js, HTML, CSS"
        },
         sorteioMegasena: {
          desc: "Aplicação desenvolvida em React e TypeScript para gerar palpites da Mega-Sena. Possui histórico de apostas gerenciado via Context API, rotas com React Router e estilização dinâmica via CSS-in-JS.",
          tech: "Tecnologias: React, TypeScript, Styled Components, Context APIS"
        },
        secretNumber: {
          title: "Jogo do Número Secreto",
          desc: "Jogo de adivinhação desenvolvido durante a formação Oracle Next Education. Lógica de validação e feedback implementada em JavaScript puro.",
          tech: "Tecnologias: JavaScript, HTML, CSS"
        },
        secretFriend: {
          title: "Challenge Amigo Secreto",
          desc: "Sistema para organizar sorteios de Amigo Secreto. Focadp na manipulação do DOM e lógica de sorteio aleatório com JS puro.",
          tech: "Tecnologias: JavaScript, HTML, CSS"
        }
      },
      footer: {
        rights: "Todos os direitos reservados"
      }
    }
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        others: "Others"
      },
      hero: {
        title: "Vinícius Lêdro",
        subtitle: "I'm a Software Developer",
        download: "Download CV",
        contact: "Contact Me",
        emailSubject: "Portfolio Contact",
        emailBody: "Hello Vinícius! I saw your portfolio..."
      },
      about: {
        title: "About Me",
        p1: "Early-career professional with a solid academic background, currently studying Multiplatform Software Development at FATEC and recently graduated as an IT Technician.",
        p2: "Currently participating in the Oracle Next Education program. My background includes experience as a Business Analyst Apprentice at Embraer, collaborating on requirements gathering and project structuring using agile methodologies and JIRA.",
        p3: "In practical projects, I led the development of 'Fatrek', an academic management system, as a Product Owner, handling prototyping, requirements validation, and SCRUM ceremonies. I am ready to add value to a development team."
      },
      others: {
        experience: {
          title: "Experience",
          years: "+2 years",
          field: "Software Engineering"
        },
        education: {
          title: "Education",
          desc: "Studying Multiplatform Software Development - FATEC Jacareí"
        }
      },
      skills: { 
        title: "Skills" 
      },
      // --- PROJETOS (EN) ---
      projects: {
        title: "Projects",
        categories: {
          academic: "Academic Projects",
          professional: "Professional Projects",
          personal: "Personal Projects"
        },
        fatrek: {
          desc: "Web application to help FATEC Jacareí faculty manage schedules and classrooms. Used by students for location and schedule checking.",
          tech: "Technologies: JavaScript, Node.js, HTML, CSS, Figma",
          role: "My role: Acted as Product Owner, leading requirements gathering, backlog prioritization, and delivery validation with the client."
        },
        inpe: {
          desc: "Web application for visualizing limnological and meteorological data from Furnas reservoirs (SIMA). Organizes data into a clean interface with filters and custom queries.",
          tech: "Technologies: React, Node.js, TypeScript, Docker, PostgreSQL",
          role: "My role: As Product Owner, I was responsible for scope definition, product backlog management, and alignment between the technical team and focal point."
        },
        megasena: {
          desc: "Full-stack application to check Mega-Sena lottery results. Consumes a custom Node.js/Express API with PostgreSQL database.",
          tech: "Technologies: JavaScript, Node.js, HTML, CSS"
        },
        SorteioMegasena: {
          desc: "Application developed in React and TypeScript to generate Mega-Sena betting suggestions. Features bet history managed via Context API, React Router navigation, and dynamic styling via CSS-in-JS.",
          tech: "Technologies: React, TypeScript, Styled Components, Context API"
        },
        secretNumber: {
          title: "Secret Number Game",
          desc: "Guessing game developed during the Oracle Next Education program. Logic validation and feedback implemented in pure JavaScript.",
          tech: "Technologies: JavaScript, HTML, CSS"
        },
        secretFriend: {
          title: "Secret Santa Challenge",
          desc: "System to organize Secret Santa draws. Focused on DOM manipulation and random selection logic using pure JS.",
          tech: "Technologies: JavaScript, HTML, CSS"
        }
      },
      footer: {
        rights: "All rights reserved"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;