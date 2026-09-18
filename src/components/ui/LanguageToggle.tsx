import { Box, ButtonBase } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languages } from "../../i18n";
import { tokens } from "../../theme/tokens";

const { color, ease } = tokens;

export function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <Box
      role="group"
      aria-label={t("nav.language")}
      sx={{ display: "inline-flex", p: "4px", gap: "2px", border: `1px solid ${color.line}`, borderRadius: 999 }}
    >
      {languages.map((lang) => {
        const active = current === lang.code;
        return (
          <ButtonBase
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            aria-pressed={active}
            title={lang.name}
            disableRipple
            sx={{
              minWidth: 44,
              height: 34,
              px: 1.25,
              borderRadius: 999,
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: active ? color.accentInk : color.textMuted,
              bgcolor: active ? color.accent : "transparent",
              transition: `background-color 200ms ${ease.out}, color 200ms ${ease.out}`,
              "&:hover": { color: active ? color.accentInk : color.text },
              "&.Mui-focusVisible": { outline: `2px solid ${color.accent}`, outlineOffset: 2 },
            }}
          >
            {lang.label}
          </ButtonBase>
        );
      })}
    </Box>
  );
}
