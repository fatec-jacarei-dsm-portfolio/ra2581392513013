export const profile = {
  name: "Vinícius Lêdro",
  email: "ledro.ledro16@gmail.com",
  github: "https://github.com/ViniciusLedro",
  linkedin: "https://www.linkedin.com/in/vinicius-ledro",
  cv: {
    href: `${import.meta.env.BASE_URL}meu-curriculo.pdf`,
    fileName: "ViniciusLedro_CV.pdf",
  },
} as const;

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "SQL",
  "PostgreSQL",
  "Material UI",
  "Bootstrap",
  "Git",
  "Figma",
] as const;

export const sections = ["home", "about", "projects", "others"] as const;
export type SectionId = (typeof sections)[number];
