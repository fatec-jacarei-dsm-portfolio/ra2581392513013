import { Box, Container, IconButton, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from "react-i18next"; // <--- 1. Importar

const Footer: React.FC = () => {
    const { t } = useTranslation(); // <--- 2. Inicializar hook

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/ViniciusLedro")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/vinicius-ledro")}>
                            <LinkedInIcon />
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © {new Date().getFullYear()} Vinícius Lêdro - {t('footer.rights')}
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer