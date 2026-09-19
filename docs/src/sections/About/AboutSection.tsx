import { Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Section, SectionTitle } from "../../components/ui/Section";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <Section id="about">
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={4}>
          <SectionTitle id="about">{t("about.title")}</SectionTitle>
        </Grid>
        <Grid item xs={12} md={8}>
          <Stack spacing={3} sx={{ maxWidth: "66ch" }}>
            <Typography
              sx={{
                fontSize: "clamp(1.1875rem, 1.7vw, 1.4375rem)",
                lineHeight: 1.5,
                letterSpacing: "-0.012em",
                color: "text.primary",
              }}
            >
              {t("about.p1")}
            </Typography>
            <Typography color="text.secondary">{t("about.p2")}</Typography>
            <Typography color="text.secondary">{t("about.p3")}</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Section>
  );
}
