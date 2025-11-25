import React from "react";
import Avatar from "../../../../../public/assets/avatar-Swtn9pPV.jpg";
import { Box, Container, Grid, Typography, styled, Button } from "@mui/material";
import Typewriter from "../../../../components/Typewriter/Typewriter";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";
import { useTranslation } from "react-i18next";

const HeroSection: React.FC = () => {
    const { t, i18n } = useTranslation();

    // --- ESTILOS MODERNOS ---

    // 1. Wrapper Principal (Fundo Preto)
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: "black",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
        overflow: "hidden", // Garante que nada vaze
        [theme.breakpoints.up('xs')]: {
            display: "block",
            paddingTop: "120px", // Mais espaço no mobile
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "0",
        },
    }));

    // 2. Avatar com Brilho Neon
    const StyledImg = styled("img")(() => ({
        width: "75%", // Um pouco menor para ficar elegante
        borderRadius: "50%",
        border: "2px solid #22D4FD", // Borda Neon
        boxShadow: "0 0 15px rgba(34, 212, 253, 0.3)", // Brilho suave inicial
        transition: "all 0.4s ease-in-out",
        cursor: "pointer",
        "&:hover": {
            boxShadow: "0 0 30px rgba(34, 212, 253, 0.8)", // Brilho forte no hover
            transform: "scale(1.02)",
        }
    }));

    // 3. Botões Estilizados (Ghost Buttons)
    const HeroButton = styled(Button)(() => ({
        border: "1px solid #22D4FD",
        color: "#22D4FD", // Texto Neon
        backgroundColor: "transparent",
        borderRadius: "8px",
        padding: "10px 24px",
        fontSize: "1rem",
        textTransform: "none", // Remove caixa alta forçada
        width: "100%",
        display: "flex",
        gap: "10px",
        transition: "all 0.3s ease",
        "&:hover": {
            backgroundColor: "#22D4FD", // Fundo fica Neon
            color: "#000",              // Texto fica Preto (Alto contraste)
            boxShadow: "0 0 20px rgba(34, 212, 253, 0.4)",
        }
    }));

    // --- FUNÇÕES ---

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${import.meta.env.BASE_URL}meu-curriculo.pdf`;
        link.download = 'ViniciusLedro_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleEmail = () => {
        const emailAddress = 'ledro.ledro16@gmail.com';
        const subject = t('hero.emailSubject'); 
        const body = t('hero.emailBody');
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink);
    };

    return (
        <StyledHero id="home">
            <AnimatedBackground />
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={4} alignItems="center">
                    
                    {/* LADO ESQUERDO: FOTO */}
                    <Grid item xs={12} md={5}>
                        <Box textAlign="center">
                            <StyledImg src={Avatar} alt="Vinícius Lêdro" />
                        </Box>
                    </Grid>

                    {/* LADO DIREITO: TEXTO E BOTÕES */}
                    <Grid item xs={12} md={7}>
                        <Box textAlign={{ xs: "center", md: "left" }}>
                            
                            {/* Nome com destaque Branco */}
                            <Typography 
                                variant="h2" 
                                fontWeight={700} 
                                sx={{ color: "#fff", letterSpacing: "-1px", mb: 1 }}
                            >
                                Vinícius Lêdro
                            </Typography>
                            
                            {/* Typewriter Neon */}
                            <Box sx={{ minHeight: "60px", mb: 4 }}>
                                <Typewriter 
                                    key={i18n.language} // IMPORTANTE: Reinicia animação ao mudar idioma
                                    text={t('hero.subtitle')} 
                                    delay={100} 
                                    variant="h4" 
                                    color="#22D4FD" // Cor Neon direta
                                />
                            </Box>
                            
                            {/* Botões */}
                            <Grid container spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
                                <Grid item xs={12} sm={5}>
                                    <HeroButton onClick={handleDownload}>
                                        <DownloadIcon />
                                        {t('hero.download')}
                                    </HeroButton>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <HeroButton onClick={handleEmail}>
                                        <EmailIcon />
                                        {t('hero.contact')}
                                    </HeroButton>
                                </Grid>
                            </Grid>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
}

export default HeroSection;