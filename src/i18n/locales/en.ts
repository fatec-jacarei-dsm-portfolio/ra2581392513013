import type { Messages } from "./pt";

// Tipado a partir do português: se faltar uma chave aqui, o build falha.
const en: Messages = {
  nav: {
    home: "Home",
    about: "About Me",
    projects: "Projects",
    others: "Others",
    label: "Main navigation",
    menu: "Open navigation menu",
    language: "Language",
    skip: "Skip to content",
  },
  hero: {
    subtitle: "I'm a Software Developer",
    download: "Download CV",
    contact: "Contact Me",
    emailSubject: "Portfolio Contact",
    emailBody: "Hello Vinícius! I saw your portfolio...",
    photoAlt: "Photo of Vinícius Lêdro",
  },
  about: {
    title: "About Me",
    p1: "Early-career professional with a solid academic background, currently studying Multiplatform Software Development at FATEC and recently graduated as an IT Technician.",
    p2: "Currently participating in the Oracle Next Education program. My background includes experience as a Business Analyst Apprentice at Embraer, collaborating on requirements gathering and project structuring using agile methodologies and JIRA.",
    p3: "In practical projects, I led the development of “Fatrek”, an academic management system, as a Product Owner, handling prototyping, requirements validation, and SCRUM ceremonies. I am ready to add value to a development team.",
  },
  projects: {
    title: "Projects",
    count_one: "{{count}} project",
    count_other: "{{count}} projects",
    categories: {
      academic: "Academic Projects",
      personal: "Personal Projects",
      professional: "Professional Projects",
    },
    roleLabel: "My role",
    stackLabel: "Technologies",
    live: "View project",
    code: "View code",
    newTab: "opens in a new tab",
    screenshotOf: "Screenshot of {{title}}",
    items: {
      fatrek: {
        title: "Fatrek",
        summary: "Web application to help FATEC Jacareí faculty manage schedules and classrooms. Used by students for location and schedule checking.",
        role: "Acted as Product Owner, leading requirements gathering, backlog prioritization, and delivery validation with the client.",
      },
      inpe: {
        title: "Portal de Dados Limnológicos",
        summary: "Web application for visualizing limnological and meteorological data from Furnas reservoirs (SIMA). Organizes data into a clean interface with filters and custom queries.",
        role: "As Product Owner, I was responsible for scope definition, product backlog management, and alignment between the technical team and focal point.",
      },
      valle: {
        title: "1000 Valle Multimarcas",
        summary: "Web system developed for 1000 Valle Multimarcas, focused on lead management, sales tracking, and performance monitoring through analytical dashboards.",
        role: "Acted as Product Owner, contributing to requirements gathering and definition, backlog organization and prioritization, delivery tracking, and alignment between business needs and the development team.",
      },
      megasena: {
        title: "Megasena",
        summary: "Full-stack application to check Mega-Sena lottery results. Consumes a custom Node.js/Express API with PostgreSQL database.",
      },
      sorteioMegasena: {
        title: "Sorteio Megasena",
        summary: "Application developed in React and TypeScript to generate Mega-Sena betting suggestions. Features bet history managed via Context API, React Router navigation, and dynamic styling via CSS-in-JS.",
      },
      secretNumber: {
        title: "Secret Number Game",
        summary: "Guessing game developed during the Oracle Next Education program. Logic validation and feedback implemented in pure JavaScript.",
      },
      secretFriend: {
        title: "Secret Santa Challenge",
        summary: "System to organize Secret Santa draws. Focused on DOM manipulation and random selection logic using pure JS.",
      },
    },
  },
  others: {
    title: "Experience & Education",
    experience: {
      title: "Experience",
      years: "+2 years",
      field: "Software Engineering",
    },
    education: {
      title: "Education",
      desc: "Studying Multiplatform Software Development - FATEC Jacareí",
    },
  },
  skills: {
    title: "Skills",
  },
  footer: {
    rights: "All rights reserved",
    email: "Send an e-mail",
  },
  date: {
    months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  },
};

export default en;
