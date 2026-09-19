import fatrek from "../assets/projects/fatrek.webp";
import portalLimnologico from "../assets/projects/portal-limnologico.webp";
import milValle from "../assets/projects/mil-valle.webp";
import amigoSecreto from "../assets/projects/amigo-secreto.webp";
import numeroSecreto from "../assets/projects/numero-secreto.webp";
import megasena from "../assets/projects/megasena.webp";
import sorteioMegasena from "../assets/projects/sorteio-megasena.webp";

export type ProjectCategory = "academic" | "personal" | "professional";

export interface Project {
  /** Chave dos textos em i18n: projects.items.<id> */
  id: string;
  category: ProjectCategory;
  /** position: ponto de ancoragem do recorte (object-position), padrão "top center" */
  image: { src: string; width: number; height: number; position?: string };
  /** Datas no formato AAAA-MM */
  period: { start: string; end?: string };
  stack: string[];
  links: { live?: string; code?: string };
}

/**
 * Ordem das categorias na página e o layout de cada uma.
 * Categorias sem projetos não aparecem.
 */
export const categories: { id: ProjectCategory; layout: "feature" | "grid" }[] = [
  { id: "academic", layout: "feature" },
  { id: "personal", layout: "grid" },
  { id: "professional", layout: "grid" },
];

export const projects: Project[] = [
  // --- Acadêmicos (ABP - Fatec Jacareí) ---
  {
    id: "fatrek",
    category: "academic",
    image: { src: fatrek, width: 1600, height: 799 },
    period: { start: "2025-02", end: "2025-07" },
    stack: ["JavaScript", "Node.js", "HTML", "CSS", "Figma"],
    links: {
      live: "https://fatreck.ct.ws",
      code: "https://github.com/CRIMS0NC0DE/abp-2025-1",
    },
  },
  {
    id: "inpe",
    category: "academic",
    image: { src: portalLimnologico, width: 1600, height: 796 },
    period: { start: "2025-09", end: "2025-11" },
    stack: ["React", "Node.js", "TypeScript", "Docker", "PostgreSQL"],
    links: {
      code: "https://github.com/CRIMS0NC0DE/abp-2025-2",
    },
  },
  {
    id: "valle",
    category: "academic",
    image: { src: milValle, width: 1600, height: 900 },
    period: { start: "2026-02", end: "2026-07" },
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Prisma", "JWT", "RBAC"],
    links: {
      code: "https://github.com/CRIMS0NC0DE/3DSM-ABP-2026-1",
    },
  },

  // --- Pessoais ---
  {
    id: "sorteioMegasena",
    category: "personal",
    image: { src: sorteioMegasena, width: 1600, height: 799 },
    period: { start: "2025-11" },
    stack: ["React", "TypeScript", "Styled Components", "Context API"],
    links: {
      code: "https://github.com/ViniciusLedro/projectPalpitesMegasena2",
    },
  },
  {
    id: "secretFriend",
    category: "personal",
    image: { src: amigoSecreto, width: 1600, height: 668 },
    period: { start: "2025-08" },
    stack: ["JavaScript", "HTML", "CSS"],
    links: {
      live: "https://challenge-amigo-secreto-woad-xi.vercel.app/",
      code: "https://github.com/ViniciusLedro/challengeAmigoSecreto",
    },
  },
  {
    id: "megasena",
    category: "personal",
    image: { src: megasena, width: 1600, height: 758, position: "top left" },
    period: { start: "2025-07" },
    stack: ["JavaScript", "Node.js", "HTML", "CSS"],
    links: {
      live: "https://project-megasena.vercel.app/",
      code: "https://github.com/ViniciusLedro/projectMegasena",
    },
  },
  {
    id: "secretNumber",
    category: "personal",
    image: { src: numeroSecreto, width: 1600, height: 785 },
    period: { start: "2025-06" },
    stack: ["JavaScript", "HTML", "CSS"],
    links: {
      live: "https://secret-number-game-iota-five.vercel.app/",
      code: "https://github.com/ViniciusLedro/projectSecretNumberGame",
    },
  },

  // --- Profissionais ---
  // Nenhum por enquanto. Ao adicionar um projeto com category: "professional",
  // a categoria aparece automaticamente na página.
];
