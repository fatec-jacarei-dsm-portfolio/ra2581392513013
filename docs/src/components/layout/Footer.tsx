import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useTranslation } from "react-i18next";
import { profile } from "../../data/profile";
import { tokens } from "../../theme/tokens";

export default function Footer() {
  const { t } = useTranslation();

  const links = [
    { href: profile.github, label: "GitHub", icon: <GitHubIcon />, external: true },
    { href: profile.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true },
    { href: `mailto:${profile.email}`, label: t("footer.email"), icon: <MailOutlineIcon />, external: false },
  ];

  return (
    <Box component="footer" sx={{ mt: tokens.sectionSpacing, borderTop: 1, borderColor: "divider" }}>
      <Container
        maxWidth="lg"
        sx={{
          py: 3,
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Typography variant="caption" color="text.secondary" textAlign={{ xs: "center", sm: "left" }}>
          © {new Date().getFullYear()} {profile.name} · {t("footer.rights")}
        </Typography>
        <Stack direction="row" spacing={0.5}>
          {links.map((link) => (
            <IconButton
              key={link.href}
              component="a"
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
              sx={{ width: 44, height: 44 }}
            >
              {link.icon}
            </IconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
