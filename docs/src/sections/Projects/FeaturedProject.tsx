import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { Reveal } from "../../components/ui/Reveal";
import { TechList } from "../../components/ui/TechList";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectLinks } from "./ProjectLinks";
import { useProjectText } from "./useProjectText";

interface FeaturedProjectProps {
  project: Project;
  /** Inverte o lado da imagem no desktop (alternância entre linhas) */
  reverse?: boolean;
}

/** Linha de destaque: screenshot grande de um lado, detalhes do outro. */
export function FeaturedProject({ project, reverse = false }: FeaturedProjectProps) {
  const { t } = useTranslation();
  const { title, summary, role, period } = useProjectText(project);
  const headingId = `project-${project.id}`;

  return (
    <Reveal>
      <Box
        component="article"
        aria-labelledby={headingId}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "repeat(12, minmax(0, 1fr))" },
          columnGap: { md: 6 },
          rowGap: 3.5,
          alignItems: "center",
        }}
      >
        <ProjectMedia
          project={project}
          title={title}
          sx={{ gridColumn: { md: reverse ? "6 / span 7" : "1 / span 7" }, gridRow: { md: 1 } }}
        />

        <Box sx={{ gridColumn: { md: reverse ? "1 / span 5" : "8 / span 5" }, gridRow: { md: 1 } }}>
          <Typography variant="h3" component="h4" id={headingId}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            component="p"
            sx={{ mt: 1, color: "text.disabled", fontVariantNumeric: "tabular-nums" }}
          >
            {period}
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 2.5 }}>
            {summary}
          </Typography>

          {role && (
            <Box sx={{ mt: 3, pt: 2.5, borderTop: 1, borderColor: "divider" }}>
              <Typography variant="caption" component="p" sx={{ color: "primary.main", fontWeight: 600, mb: 0.75 }}>
                {t("projects.roleLabel")}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {role}
              </Typography>
            </Box>
          )}

          <TechList items={project.stack} label={t("projects.stackLabel")} sx={{ mt: 3 }} />
          <ProjectLinks links={project.links} title={title} sx={{ mt: 3.5 }} />
        </Box>
      </Box>
    </Reveal>
  );
}
