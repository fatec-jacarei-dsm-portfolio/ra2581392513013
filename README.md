# Portifólio de Projetos - Fatec Jacareí
### Aluno: Vinícius de Oliveira Lêdro  
### Curso: Desenvolvimento de Software Multiplataforma  
### Turma: 4º Semestre de 2025

---

### Portfólio Online  
[🔗 **Acesse o Portfólio**](https://fatec-jacarei-dsm-portfolio.github.io/ra2581392513013/)  
[🎤 **Pitch de Apresentação**](https://youtu.be/KuZrb6jbie4)

---

## Tecnologias

React 18 · TypeScript · Vite · Material UI · i18next (português e inglês)

## Estrutura

```
├── index.html              # HTML de entrada do Vite
├── public/                 # Arquivos copiados como estão (currículo, favicon)
├── src/
│   ├── main.tsx            # Tema, fonte e i18n
│   ├── App.tsx             # Ordem das seções
│   ├── assets/             # Foto e screenshots dos projetos (.webp)
│   ├── components/
│   │   ├── layout/         # Navbar e Footer
│   │   └── ui/             # Peças reutilizáveis (Section, TechList, Reveal...)
│   ├── sections/           # Hero, About, Projects, Others
│   ├── data/               # Conteúdo: perfil, habilidades e projetos
│   ├── i18n/locales/       # Textos em pt.ts e en.ts
│   ├── hooks/              # useActiveSection, usePrefersReducedMotion
│   ├── theme/              # Cores, fonte e tema do MUI
│   └── utils/
└── docs/                   # Build gerado (publicado pelo GitHub Pages)
```

## Como rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:5173/ra2581392513013/
npm run build     # gera o site em docs/
npm run preview   # testa o build localmente
```

## Como publicar

O GitHub Pages publica a pasta `docs/` da branch `main`. Depois de alterar algo, rode `npm run build` e faça commit da pasta `docs/` junto com o código.

## Como adicionar um projeto

1. Coloque o screenshot em `src/assets/projects/` (de preferência `.webp`, cerca de 1600px de largura).
2. Adicione o projeto em `src/data/projects.ts` (categoria, período, tecnologias e links).
3. Adicione título, resumo e, se houver, a contribuição em `projects.items` de `src/i18n/locales/pt.ts` e `en.ts`.

Projetos com `category: "professional"` fazem a categoria "Projetos Profissionais" aparecer automaticamente.
