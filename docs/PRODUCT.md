# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: professors and the evaluation panel of the Desenvolvimento de Software Multiplataforma (DSM) course at Fatec Jacareí. They review this site as the student's semester portfolio deliverable (turma 4º semestre de 2025). Their job is to see, in a few minutes, who the student is, which projects he built each semester, when, with what stack, what *his* role was, and to open the live demo or the code.

Recruiters are a secondary audience (the résumé targets a full-stack software development internship), but decisions favor the Fatec evaluator when the two conflict.

## Product Purpose

Personal portfolio of Vinícius de Oliveira Lêdro. It presents his profile, his academic (ABP) and personal projects, experience, education and skills, and lets the visitor download his CV or contact him by e-mail.

Success: an evaluator can identify every project, its period, stack and the student's contribution, and reach working demo/code links without guessing.

## Positioning

Headline stays "Sou Desenvolvedor de Software" / "I'm a Software Developer" (confirmed 2026-09-18). His Product Owner role on the academic projects (Fatrek, Portal de Dados Limnológicos, 1000 Valle Multimarcas) is shown inside each project's details, not in the headline.

## Operating Context

- Published at https://fatec-jacarei-dsm-portfolio.github.io/ra2581392513013/ through GitHub Pages, in the `fatec-jacarei-dsm-portfolio` organization. The root README links the site and the pitch video (https://youtu.be/KuZrb6jbie4).
- Bilingual: Portuguese (default/fallback) and English, auto-detected and switchable from the navbar.
- Evaluators mostly read on desktop; the site must also work on phones.

## Capabilities and Constraints

- Single page: Hero (name, headline, CV download, e-mail contact), About, Projects, Experience & Education, Skills, Footer (GitHub, LinkedIn).
- Project categories: Academic, Personal, Professional. **Professional stays empty** by the owner's decision (2026-09-18); do not add entries. Empty categories are hidden.
- Stack: React 18, TypeScript, Vite, MUI, i18next.
- Served under the base path `/ra2581392513013/`; GitHub Pages publishes the built site from the `docs/` folder, so the build output is committed there.
- CV: `public/meu-curriculo.pdf`, downloaded as `ViniciusLedro_CV.pdf`.
- Contact: ledro.ledro16@gmail.com · GitHub `ViniciusLedro` · LinkedIn `vinicius-ledro`.

## Brand Commitments

- Name shown as "Vinícius Lêdro".
- New or reworked sections must match the site's existing visual identity (owner's request, 2026-09-18: "deixe ornando com o projeto todo").

## Evidence on Hand

- Avatar photo and one screenshot per project (`src/assets/`).
- Résumé PDF (Embraer, Jovem Aprendiz de Analista de Negócios, 2023–2025; Técnico em TI, SENAC, 2025; DSM at Fatec Jacareí, in progress; Oracle Next Education).
- Projects, periods and links as listed in `src/data/projects.ts`.
- Known gaps, not to be papered over with invented content:
  - No live demo for 1000 Valle Multimarcas or the Portal de Dados Limnológicos (the old INPE demo button pointed at the Fatrek site; removed).
  - "Sorteio Megasena" has no published site (its old demo button opened the Megasena results app; removed).
  - The "Jogo do Número Secreto" code link used to point to a third-party repository; corrected to `ViniciusLedro/projectSecretNumberGame` (the repo whose homepage is the live demo).
  - No testimonials, metrics or professional projects exist.

## Product Principles

1. Answer the evaluator's question first: what was built, when, with which stack, and what the student personally did.
2. Every button leads somewhere real. Show only the links that exist; never a dead or misleading one.
3. Bilingual parity: every visible string exists in both Portuguese and English.
4. Honest scope: no invented projects, numbers or claims.
