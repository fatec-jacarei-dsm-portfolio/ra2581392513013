// Identidade visual do portfólio: céu noturno (preto + campo de estrelas)
// com o ciano como única cor de sinal. Todo componente lê daqui.
export const tokens = {
  color: {
    bg: "#000000",
    surface: "#0A0E12",
    surfaceRaised: "#11181E",
    line: "rgba(190, 228, 242, 0.12)",
    lineStrong: "rgba(190, 228, 242, 0.24)",
    text: "#F2F6F8",
    textMuted: "#A3B1BC",
    textSubtle: "#7C8A95",
    accent: "#22D4FD",
    accentHover: "#6BE3FF",
    accentInk: "#00161C",
    accentWash: "rgba(34, 212, 253, 0.08)",
  },
  font: {
    sans: '"Geist Variable", "Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  ease: {
    out: "cubic-bezier(0.16, 1, 0.3, 1)",
  },
  navHeight: 72,
  /** Espaço vertical entre seções (unidades do tema MUI: 8px) */
  sectionSpacing: { xs: 11, md: 17 },
} as const;
