import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

const { color, font, ease, navHeight } = tokens;

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: color.accent, light: color.accentHover, contrastText: color.accentInk },
    background: { default: color.bg, paper: color.surface },
    text: { primary: color.text, secondary: color.textMuted, disabled: color.textSubtle },
    divider: color.line,
  },
  shape: { borderRadius: 10 },
  typography: {
    fontFamily: font.sans,
    h1: { fontSize: "clamp(2.75rem, 6.2vw, 5rem)", fontWeight: 650, lineHeight: 1.02, letterSpacing: "-0.035em" },
    h2: { fontSize: "clamp(2.125rem, 4.4vw, 3.5rem)", fontWeight: 600, lineHeight: 1.05, letterSpacing: "-0.03em" },
    h3: { fontSize: "clamp(1.5rem, 2.4vw, 2rem)", fontWeight: 600, lineHeight: 1.15, letterSpacing: "-0.02em" },
    h4: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.25, letterSpacing: "-0.012em" },
    subtitle1: { fontSize: "clamp(1.25rem, 2.1vw, 1.625rem)", fontWeight: 450, lineHeight: 1.35, letterSpacing: "-0.01em" },
    body1: { fontSize: "1.0625rem", lineHeight: 1.7 },
    body2: { fontSize: "0.9375rem", lineHeight: 1.6 },
    caption: { fontSize: "0.875rem", lineHeight: 1.5, letterSpacing: 0 },
    button: { fontSize: "0.9375rem", fontWeight: 550, letterSpacing: 0, textTransform: "none" },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          colorScheme: "dark",
          scrollBehavior: "smooth",
          scrollPaddingTop: navHeight,
          "@media (prefers-reduced-motion: reduce)": { scrollBehavior: "auto" },
        },
        body: {
          backgroundColor: color.bg,
          textRendering: "optimizeLegibility",
          scrollbarColor: `${color.lineStrong} ${color.bg}`,
          caretColor: color.accent,
        },
        "::selection": { backgroundColor: color.accent, color: color.accentInk },
        ":focus-visible": { outline: `2px solid ${color.accent}`, outlineOffset: 3, borderRadius: 4 },
        a: { textUnderlineOffset: "0.2em", textDecorationThickness: "1px" },
        img: { display: "block", maxWidth: "100%" },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true, disableRipple: true },
      styleOverrides: {
        root: {
          minHeight: 48,
          paddingInline: 22,
          borderRadius: 8,
          gap: 4,
          transition: `background-color 200ms ${ease.out}, border-color 200ms ${ease.out}, color 200ms ${ease.out}`,
        },
        containedPrimary: {
          "&:hover": { backgroundColor: color.accentHover },
        },
        outlined: {
          borderColor: color.lineStrong,
          color: color.text,
          "&:hover": { borderColor: color.accent, color: color.accent, backgroundColor: color.accentWash },
        },
        text: {
          color: color.text,
          paddingInline: 12,
          "&:hover": { color: color.accent, backgroundColor: color.accentWash },
        },
        sizeSmall: { minHeight: 44, paddingInline: 16, fontSize: "0.875rem" },
      },
    },
    MuiIconButton: {
      defaultProps: { disableRipple: true },
      styleOverrides: {
        root: {
          color: color.textMuted,
          transition: `color 200ms ${ease.out}, background-color 200ms ${ease.out}`,
          "&:hover": { color: color.accent, backgroundColor: color.accentWash },
        },
      },
    },
  },
});

export default theme;
