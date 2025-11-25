import React from 'react';
import { Box, Card, Container, Grid, Typography, styled } from "@mui/material";
import { useTranslation } from 'react-i18next';
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../components/AnimationComponent/AnimationComponent"; 

const OthersSection: React.FC = () => {
  const { t } = useTranslation();

  // --- ESTILOS MODERNOS ---

  // 1. Wrapper da Seção inteira (Fundo Preto para combinar com a Hero)
  const SectionWrapper = styled(Box)(() => ({
    backgroundColor: "#000", // Fundo preto
    color: "#fff",           // Texto branco
    paddingTop: "60px",
    paddingBottom: "60px",
    minHeight: "80vh",       // Garante que ocupe um bom espaço
  }));

  // 2. Card Grande (Experiência/Formação)
  const InfoCard = styled(Card)(() => ({
    backgroundColor: "rgba(255, 255, 255, 0.05)", // Efeito de vidro escuro
    border: "1px solid rgba(255, 255, 255, 0.1)", // Borda sutil
    borderRadius: "16px",
    color: "white",
    padding: "30px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-5px)",          // Sobe um pouco
      borderColor: "#22D4FD",                 // Borda fica Azul Neon
      boxShadow: "0 0 15px rgba(34, 212, 253, 0.3)", // Brilho atrás
    },
  }));

  // 3. Card Pequeno (Skills)
  const SkillCard = styled(Card)(() => ({
    backgroundColor: "transparent",
    border: "1px solid #333",
    borderRadius: "8px",
    color: "#ccc",
    padding: "12px",
    textAlign: "center",
    transition: "all 0.2s ease",
    cursor: "default",
    "&:hover": {
      backgroundColor: "#22D4FD", // Fundo Azul Neon
      color: "#000",              // Texto Preto
      fontWeight: "bold",
      borderColor: "#22D4FD",
      transform: "scale(1.05)",   // Aumenta um pouco
    },
  }));

  const skillsSet = [
    "Javascript", "Typescript", "React", "Bootstrap",
    "Node.js", "Git", "HTML", "CSS",
    "SQL", "PostgreSQL", "Material UI", "Figma",
  ];

  return (
    <SectionWrapper id="others">
      <Container maxWidth="lg">
        
        {/* Linha separadora estilizada */}
        <Box sx={{ width: "100%", height: "1px", backgroundColor: "#333", mb: 8 }} />

        {/* --- BLOCO EXPERIÊNCIA & FORMAÇÃO --- */}
        <Grid container spacing={4} justifyContent="center" mb={10}>
            
            {/* Card Experiência */}
            <Grid item xs={12} md={5}>
                <AnimationComponent moveDirection="right">
                    <InfoCard variant="outlined">
                        {/* Ícone com a cor Neon */}
                        <WorkspacePremiumIcon sx={{ fontSize: 50, color: "#22D4FD", mb: 2 }} />
                        
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {t('others.experience.title')}
                        </Typography>
                        
                        <Typography variant="h6" sx={{ color: "#22D4FD", mb: 1 }}>
                            {t('others.experience.years')}
                        </Typography>
                        
                        <Typography variant="body1" sx={{ color: "#aaa" }}>
                            {t('others.experience.field')}
                        </Typography>
                    </InfoCard>
                </AnimationComponent>
            </Grid>

            {/* Card Formação */}
            <Grid item xs={12} md={5}>
                <AnimationComponent moveDirection="left">
                    <InfoCard variant="outlined">
                        <SchoolIcon sx={{ fontSize: 50, color: "#22D4FD", mb: 2 }} />
                        
                        <Typography variant="h5" fontWeight="bold" gutterBottom>
                            {t('others.education.title')}
                        </Typography>
                        
                        <Typography variant="body1" sx={{ color: "#aaa", textAlign: 'center' }}>
                            {t('others.education.desc')}
                        </Typography>
                    </InfoCard>
                </AnimationComponent>
            </Grid>
        
        </Grid>
        
        {/* --- BLOCO HABILIDADES --- */}
        <Box mb={5}>
            <Typography variant="h3" textAlign="center" fontWeight={700} mb={6} sx={{ color: "#fff" }}>
            {t('skills.title')}
            </Typography>

            <Grid container spacing={2} justifyContent="center">
                {skillsSet.map((skill, index) => (
                <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
                    <SkillCard variant="outlined">
                        <Typography variant="body1">
                            {skill}
                        </Typography>
                    </SkillCard>
                </Grid>
                ))}
            </Grid>
        </Box>
      </Container>
    </SectionWrapper>
  );
};

export default OthersSection;