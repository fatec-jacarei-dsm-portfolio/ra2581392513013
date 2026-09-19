import { useEffect, useState, type MouseEvent } from "react";
import { AppBar, Box, Container, IconButton, Link, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "../ui/LanguageToggle";
import { useActiveSection } from "../../hooks/useActiveSection";
import { profile, sections } from "../../data/profile";
import { tokens } from "../../theme/tokens";

const { color, ease, navHeight } = tokens;

export default function Navbar() {
  const { t } = useTranslation();
  const active = useActiveSection(sections);
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (event: MouseEvent<HTMLElement>) => setMenuAnchor(event.currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(0, 0, 0, 0.72)" : "transparent",
        backgroundImage: "none",
        backdropFilter: scrolled ? "blur(14px) saturate(140%)" : "none",
        borderBottom: `1px solid ${scrolled ? color.line : "transparent"}`,
        transition: `background-color 300ms ${ease.out}, border-color 300ms ${ease.out}`,
      }}
    >
      <Container maxWidth="lg" sx={{ height: navHeight, display: "flex", alignItems: "center", gap: 2 }}>
        <Link
          href="#home"
          underline="none"
          sx={{ color: "text.primary", fontWeight: 600, fontSize: "1.0625rem", letterSpacing: "-0.01em", mr: "auto" }}
        >
          {profile.name}
        </Link>

        {/* Desktop */}
        <Box component="nav" aria-label={t("nav.label")} sx={{ display: { xs: "none", md: "block" } }}>
          <Box component="ul" sx={{ display: "flex", gap: 0.5, m: 0, p: 0, listStyle: "none" }}>
            {sections.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    underline="none"
                    aria-current={isActive ? "location" : undefined}
                    sx={{
                      position: "relative",
                      display: "block",
                      px: 1.5,
                      py: 1.25,
                      fontSize: "0.9375rem",
                      fontWeight: 500,
                      color: isActive ? "text.primary" : "text.secondary",
                      transition: `color 200ms ${ease.out}`,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 12,
                        right: 12,
                        bottom: 4,
                        height: "1px",
                        bgcolor: "primary.main",
                        transform: isActive ? "scaleX(1)" : "scaleX(0)",
                        transformOrigin: "left",
                        transition: `transform 350ms ${ease.out}`,
                      },
                      "&:hover": { color: "text.primary" },
                      "&:hover::after": { transform: "scaleX(1)" },
                    }}
                  >
                    {t(`nav.${id}`)}
                  </Link>
                </li>
              );
            })}
          </Box>
        </Box>

        <LanguageToggle />

        {/* Mobile */}
        <IconButton
          onClick={openMenu}
          aria-label={t("nav.menu")}
          aria-haspopup="true"
          aria-expanded={Boolean(menuAnchor)}
          sx={{ display: { md: "none" }, width: 44, height: 44, color: "text.primary" }}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={closeMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          slotProps={{
            paper: {
              sx: {
                mt: 1,
                minWidth: 200,
                bgcolor: color.surfaceRaised,
                backgroundImage: "none",
                border: `1px solid ${color.line}`,
                borderRadius: "12px",
                boxShadow: "0 18px 40px -12px rgba(0, 0, 0, 0.8)",
              },
            },
          }}
        >
          {sections.map((id) => (
            <MenuItem
              key={id}
              component="a"
              href={`#${id}`}
              onClick={closeMenu}
              selected={active === id}
              sx={{
                minHeight: 48,
                fontSize: "1rem",
                "&.Mui-selected": { color: "primary.main", bgcolor: color.accentWash },
              }}
            >
              {t(`nav.${id}`)}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </AppBar>
  );
}
