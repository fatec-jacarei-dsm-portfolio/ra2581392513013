import { Box, Container, Grid, Typography, styled, Divider, useTheme } from "@mui/material";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { useTranslation } from "react-i18next";

// Imports das Imagens
import projectFatrekImg from '../../../../../public/assets/projectFatrek-DPhvMZu7.png';
import projectMegaImg from '../../../../../public/assets/projectMega-BFmgG__1.jpg';
import projectJogoNumerosImg from '../../../../../public/assets/projectJogoNumeros-B3mIIKnJ.png';
import projectChallengeAmigoSecretoImg from '../../../../../public/assets/projectChallengeAmigoSecreto-d-4EyuTO.png';
import projectMega2Img from '../../../../../public/assets/projectMegasena2.jpg'
import projectInpeImg from '../../../../../public/assets/projectInpe.png'

const ProjectsSection: React.FC = () => {
    const { t } = useTranslation();
    const theme = useTheme();

    // --- ESTILIZAÇÃO ---

    const StyledSection = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        paddingTop: "60px",
        paddingBottom: "60px",
        position: "relative",
        overflow: "hidden",
    }));

    // Título das Categorias (Acadêmico, Pessoal, etc.)
    const CategoryHeader = styled(Box)(() => ({
        marginBottom: "40px",
        // Removi o sublinhado colorido daqui também para ficar mais limpo
        borderLeft: `4px solid ${theme.palette.secondary.main}`, // Apenas um detalhe lateral sutil
        paddingLeft: "15px",
        display: "inline-block"
    }));

    // --- DADOS DOS PROJETOS ---

    const academicProjects = [
        {
            title: "Fatrek",
            subtitle: "Fev 2025 - Jul 2025",
            srcImg: projectFatrekImg,
            descriptionKey: "projects.fatrek.desc",
            roleKey: "projects.fatrek.role",
            technologiesKey: "projects.fatrek.tech",
            websiteURL: "https://fatreck.ct.ws",
            codeURL: "https://github.com/CRIMS0NC0DE/abp-2025-1",
        },
        {
            title: "Portal de Dados Limnológicos",
            subtitle: "Set 2025 - Nov 2025",
            srcImg: projectInpeImg,
            descriptionKey: "projects.inpe.desc",
            roleKey: "projects.inpe.role",
            technologiesKey: "projects.inpe.tech",
            websiteURL: "https://fatreck.ct.ws", 
            codeURL: "https://github.com/CRIMS0NC0DE/abp-2025-2",
        }
    ];

    const personalProjects = [
        {
            title: "Challenge Amigo Secreto",
            subtitle: "Aug 2025",
            srcImg: projectChallengeAmigoSecretoImg,
            descriptionKey: "projects.secretFriend.desc",
            technologiesKey: "projects.secretFriend.tech",
            websiteURL: "https://challenge-amigo-secreto-woad-xi.vercel.app/",
            codeURL: "https://github.com/ViniciusLedro/challengeAmigoSecreto",
        },
        {
            title: "Jogo do Número Secreto",
            subtitle: "Jun 2025",
            srcImg: projectJogoNumerosImg,
            descriptionKey: "projects.secretNumber.desc",
            technologiesKey: "projects.secretNumber.tech",
            websiteURL: "https://secret-number-game-iota-five.vercel.app/",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },
        {
            title: "Megasena",
            subtitle: "Jul 2025",
            srcImg: projectMegaImg,
            descriptionKey: "projects.megasena.desc",
            technologiesKey: "projects.megasena.tech",
            websiteURL: "https://project-megasena.vercel.app/",
            codeURL: "https://github.com/ViniciusLedro/projectMegasena",
        },
        {
            title: "Sorteio Megasena",
            subtitle: "Nov 2025",
            srcImg: projectMega2Img,
            descriptionKey: "projects.sorteioMegasena.desc",
            technologiesKey: "projects.sorteioMegasena.tech",
            websiteURL: "https://project-megasena.vercel.app/",
            codeURL: "https://github.com/ViniciusLedro/projectPalpitesMegasena2",
        },
    ];

    const professionalProjects: any[] = [];

    // --- FUNÇÃO DE RENDERIZAÇÃO ---
    const renderCategory = (title: string, list: any[]) => {
        if (list.length === 0) return null;

        return (
            <Box mb={8}>
                <CategoryHeader>
                    <Typography variant="h4" fontWeight={500} color="primary.contrastText">
                        {title}
                    </Typography>
                </CategoryHeader>
                
                <Grid container spacing={4} alignItems="stretch">
                    {list.map((project, index) => {
                        
                        // --- LÓGICA DE FORMATAÇÃO DO TEXTO ---
                        let descriptionContent: React.ReactNode;

                        if (project.roleKey) {
                            const roleFullText = t(project.roleKey);
                            const parts = roleFullText.split(':'); 
                            const label = parts[0]; 
                            const content = parts.slice(1).join(':'); 

                            descriptionContent = (
                                <span>
                                    {t(project.descriptionKey)}
                                    <br /><br />
                                    {/* CORRIGIDO: Removi a cor azul, deixei apenas negrito */}
                                    <strong>
                                        {label}:
                                    </strong>
                                    {content}
                                </span>
                            );
                        } else {
                            descriptionContent = t(project.descriptionKey);
                        }

                        return (
                            <Grid item md={6} xs={12} key={index} sx={{ display: "flex" }}>
                                <Box sx={{ width: "100%", display: "flex" }}>
                                    <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                        <Box sx={{ 
                                            height: "100%",
                                            "& .MuiCard-root": {
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between"
                                            }
                                        }}>
                                            <ProjectCard
                                                title={project.title}
                                                subtitle={project.subtitle}
                                                srcImg={project.srcImg}
                                                description={descriptionContent as any}
                                                technologies={t(project.technologiesKey)}
                                                websiteURL={project.websiteURL}
                                                codeURL={project.codeURL}
                                            />
                                        </Box>
                                    </AnimationComponent>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        );
    };

    return (
        <StyledSection id="projects">
            <Container maxWidth="lg">
                
                <Box pb={5} textAlign="center">
                    <Typography variant="h2" color="primary.contrastText">
                        {t('projects.title')}
                    </Typography>
                </Box>

                {renderCategory(t('projects.categories.academic'), academicProjects)}

                {academicProjects.length > 0 && personalProjects.length > 0 && (
                    <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", mb: 6 }} />
                )}

                {renderCategory(t('projects.categories.personal'), personalProjects)}

                {personalProjects.length > 0 && professionalProjects.length > 0 && (
                    <Divider sx={{ backgroundColor: "rgba(255,255,255,0.2)", mb: 6 }} />
                )}
                
                {renderCategory(t('projects.categories.professional'), professionalProjects)}

            </Container>
        </StyledSection>
    )
}

export default ProjectsSection;