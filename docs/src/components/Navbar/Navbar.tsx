import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

// --- ESTILOS MODERNOS (GLASSMORPHISM & NEON) ---

export const StyledNavLink = styled("a")(() => ({
  color: "#fff",
  fontFamily: "Helvetica Neue",
  fontSize: "20px",
  fontWeight: 500,
  cursor: "pointer",
  textDecoration: "none",
  position: "relative",
  transition: "all 0.3s ease",
  "&:hover": {
    color: "#22D4FD", // Azul Neon
    textShadow: "0 0 10px rgba(34, 212, 253, 0.6)",
    transform: "scale(1.05)",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: "-5px",
    left: "0",
    backgroundColor: "#22D4FD",
    transition: "width 0.3s ease",
    boxShadow: "0 0 10px rgba(34, 212, 253, 0.8)",
  },
  "&:hover::after": {
    width: "100%",
  }
}));

const GlassAppBar = styled(AppBar)(() => ({
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  backdropFilter: "blur(12px)",
  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "none",
}));

const menuStyles = {
  "& .MuiPaper-root": {
    backgroundColor: "rgba(10, 10, 10, 0.95)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(34, 212, 253, 0.3)",
    borderRadius: "12px",
    color: "white",
    marginTop: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)",
  },
  "& .MuiMenuItem-root": {
    transition: "all 0.2s",
    "&:hover": {
      backgroundColor: "rgba(34, 212, 253, 0.1)",
      color: "#22D4FD",
    }
  }
};

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: "flex",
    justifyContent: "end"
  },
  [theme.breakpoints.up('md')]: {
    display: "none",
  },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
  padding: "15px 20px",
  [theme.breakpoints.up('xs')]: {
    display: "none",
  },
  [theme.breakpoints.up('md')]: {
    display: "flex",
    alignItems: "center"
  },
}));

// --- COMPONENTE ---

export default function Navbar() {
  const [mobileAnchorEl, setMobileAnchorEl] = React.useState<null | HTMLElement>(null);
  const [langAnchorEl, setLangAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t, i18n } = useTranslation();

  const handleOpenMobileMenu = (event: React.MouseEvent<HTMLElement>) => setMobileAnchorEl(event.currentTarget);
  const handleCloseMobileMenu = () => setMobileAnchorEl(null);
  const handleOpenLangMenu = (event: React.MouseEvent<HTMLElement>) => setLangAnchorEl(event.currentTarget);
  const handleCloseLangMenu = () => setLangAnchorEl(null);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      handleCloseMobileMenu();
    }
  };

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    handleCloseLangMenu();
    handleCloseMobileMenu();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <GlassAppBar position="fixed">
        
        {/* --- MOBILE --- */}
        <StyledMobileToolbar>
          <IconButton
            size="large"
            onClick={handleOpenMobileMenu}
            sx={{ color: "#22D4FD" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            open={Boolean(mobileAnchorEl)}
            onClose={handleCloseMobileMenu}
            sx={menuStyles}
          >
            {/* LINK HOME MOBILE */}
            <MenuItem onClick={() => handleSmoothScroll("home")}>
              <Typography>{t('navbar.home')}</Typography>
            </MenuItem>

            <MenuItem onClick={() => handleSmoothScroll("about")}>
              <Typography>{t('navbar.about')}</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("projects")}>
              <Typography>{t('navbar.projects')}</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleSmoothScroll("others")}>
              <Typography>{t('navbar.others')}</Typography>
            </MenuItem>
            
            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.1)", my: 1 }} />
            
            <MenuItem onClick={() => handleChangeLanguage('pt')}>
              <Typography sx={{ mr: 2 }}>🇧🇷</Typography> Português
            </MenuItem>
            <MenuItem onClick={() => handleChangeLanguage('en')}>
              <Typography sx={{ mr: 2 }}>🇺🇸</Typography> English
            </MenuItem>
          </Menu>
        </StyledMobileToolbar>

        {/* --- DESKTOP --- */}
        <StyledDesktopToolbar variant="regular">
            <Box sx={{ display: 'flex', gap: '40px' }}>
                {/* LINK HOME DESKTOP */}
                <MenuItem onClick={() => handleSmoothScroll("home")} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <StyledNavLink>{t('navbar.home')}</StyledNavLink>
                </MenuItem>

                <MenuItem onClick={() => handleSmoothScroll("about")} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <StyledNavLink>{t('navbar.about')}</StyledNavLink>
                </MenuItem>
                <MenuItem onClick={() => handleSmoothScroll("projects")} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <StyledNavLink>{t('navbar.projects')}</StyledNavLink>
                </MenuItem>
                <MenuItem onClick={() => handleSmoothScroll("others")} sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
                    <StyledNavLink>{t('navbar.others')}</StyledNavLink>
                </MenuItem>
            </Box>

            <Box sx={{ position: 'absolute', right: 40, display: 'flex', alignItems: 'center' }}>
                <IconButton 
                    onClick={handleOpenLangMenu} 
                    sx={{ 
                        color: 'white',
                        transition: "all 0.3s",
                        "&:hover": { color: "#22D4FD", transform: "rotate(15deg)" }
                    }} 
                    size="large"
                >
                    <LanguageIcon fontSize="inherit" />
                </IconButton>

                <Menu
                    anchorEl={langAnchorEl}
                    open={Boolean(langAnchorEl)}
                    onClose={handleCloseLangMenu}
                    sx={menuStyles}
                >
                    <MenuItem onClick={() => handleChangeLanguage('pt')}>
                        <Typography sx={{ mr: 1 }}>🇧🇷</Typography> Português
                    </MenuItem>
                    <MenuItem onClick={() => handleChangeLanguage('en')}>
                        <Typography sx={{ mr: 1 }}>🇺🇸</Typography> English
                    </MenuItem>
                </Menu>
            </Box>

        </StyledDesktopToolbar>
      </GlassAppBar>
    </Box >
  );
}