import React from 'react';
import { Box, Container, Typography, styled, Card } from "@mui/material";
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();

  // --- ESTILOS (Mesma identidade do OthersSection) ---

  // 1. Wrapper Fundo Preto
  const SectionWrapper = styled(Box)(() => ({
    backgroundColor: "#000",
    color: "#fff",
    paddingTop: "80px", // Um pouco mais de espaço no topo
    paddingBottom: "80px",
  }));

  // 2. Card com Efeito de Vidro (Glassmorphism)
  const AboutCard = styled(Card)(() => ({
    backgroundColor: "rgba(255, 255, 255, 0.05)", // Fundo translúcido escuro
    border: "1px solid rgba(255, 255, 255, 0.1)", // Borda bem fina
    borderRadius: "16px",
    padding: "40px", // Espaçamento interno generoso
    color: "#e0e0e0", // Branco suave para leitura (não cansa a vista)
    transition: "all 0.3s ease-in-out",
    // Efeito Hover igual ao do Others
    "&:hover": {
      borderColor: "#22D4FD", // Borda Azul Neon
      boxShadow: "0 0 20px rgba(34, 212, 253, 0.1)", // Brilho suave atrás
    },
  }));

  // 3. Estilo para destacar palavras chaves se precisar (Opcional)
  const Highlight = styled("span")({
    color: "#22D4FD",
    fontWeight: "bold"
  });

  return (
    <SectionWrapper id="about">
      <Container maxWidth="lg">
        
        {/* Título com destaque */}
        <Typography 
            variant="h3" 
            textAlign="center" 
            fontWeight={700} 
            mb={6} 
            sx={{ color: "#fff" }}
        >
          {t('about.title')}
        </Typography>

        {/* O Texto agora fica dentro desse Card estiloso */}
        <AboutCard variant="outlined">
          <Typography 
            paragraph 
            sx={{ 
                textIndent: '2rem', 
                textAlign: 'justify', 
                fontSize: '1.1rem', // Fonte um pouco maior para leitura
                lineHeight: 1.8     // Espaçamento entre linhas confortável
            }}
          >
            {t('about.p1')}
          </Typography>
          
          <Typography 
            paragraph 
            sx={{ 
                textIndent: '2rem', 
                textAlign: 'justify', 
                fontSize: '1.1rem',
                lineHeight: 1.8
            }}
          >
            {t('about.p2')}
          </Typography>
          
          <Typography 
            paragraph 
            sx={{ 
                textIndent: '2rem', 
                textAlign: 'justify', 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                marginBottom: 0 // Remove margem do último parágrafo
            }}
          >
            {t('about.p3')}
          </Typography>
        </AboutCard>

      </Container>
    </SectionWrapper>
  );
};

export default AboutSection;