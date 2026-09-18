import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";
import avatar from "../../assets/avatar.webp";
import { StarField } from "../../components/ui/StarField";
import { Typewriter } from "../../components/ui/Typewriter";
import { profile } from "../../data/profile";
import { tokens } from "../../theme/tokens";

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const mailto =
    `mailto:${profile.email}` +
    `?subject=${encodeURIComponent(t("hero.emailSubject"))}` +
    `&body=${encodeURIComponent(t("hero.emailBody"))}`;

  return (
    <Box
      component="section"
      id="home"
      aria-labelledby="home-title"
      sx={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        pt: `${tokens.navHeight + 32}px`,
        pb: 10,
      }}
    >
      <StarField />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                width: "clamp(208px, 30vw, 360px)",
                aspectRatio: "1",
                p: "10px",
                borderRadius: "50%",
                border: `1px solid ${tokens.color.lineStrong}`,
              }}
            >
              <Box
                component="img"
                src={avatar}
                alt={t("hero.photoAlt")}
                width={720}
                height={720}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50%",
                  border: 2,
                  borderColor: "primary.main",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={7} sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h1" id="home-title">
              {profile.name}
            </Typography>

            <Box sx={{ mt: { xs: 1.5, md: 2 } }}>
              <Typewriter key={i18n.resolvedLanguage} text={t("hero.subtitle")} />
            </Box>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              sx={{ mt: { xs: 4, md: 5 }, justifyContent: { xs: "center", md: "flex-start" } }}
            >
              <Button
                variant="contained"
                href={profile.cv.href}
                download={profile.cv.fileName}
                startIcon={<DownloadIcon />}
              >
                {t("hero.download")}
              </Button>
              <Button variant="outlined" href={mailto} startIcon={<MailOutlineIcon />}>
                {t("hero.contact")}
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
