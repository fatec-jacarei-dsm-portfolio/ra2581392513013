import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import OthersSection from "./sections/Others/OthersSection";
import { tokens } from "./theme/tokens";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <Box
        component="a"
        href="#main"
        sx={{
          position: "fixed",
          top: 12,
          left: 12,
          zIndex: 2000,
          px: 2,
          py: 1.25,
          borderRadius: "8px",
          bgcolor: "primary.main",
          color: tokens.color.accentInk,
          fontWeight: 600,
          textDecoration: "none",
          transform: "translateY(-160%)",
          "&:focus-visible": { transform: "none" },
        }}
      >
        {t("nav.skip")}
      </Box>
      <Navbar />
      <Box component="main" id="main" tabIndex={-1} sx={{ outline: "none" }}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <OthersSection />
      </Box>
      <Footer />
    </>
  );
}
