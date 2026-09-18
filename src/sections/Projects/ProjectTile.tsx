import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { Reveal } from "../../components/ui/Reveal";
import { TechList } from "../../components/ui/TechList";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectLinks } from "./ProjectLinks";
import { useProjectText } from "./useProjectText";

interface ProjectTileProps {
  project: Project;
  delay?: number;
}

/** Versão compacta, usada em grade (projetos pessoais e profissionais). */
export function ProjectTile({ project, delay = 0 }: ProjectTileProps) {
  const { t } = useTranslation();
  const { title, summary, period } = useProjectText(project);
  const headingId = `project-${project.id}`;

  return (
    <Reveal delay={delay}>
      <Box
        component="article"
        aria-labelledby={headingId}
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <ProjectMedia project={project} title={title} />

        <Box sx={{ mt: 3, display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="h4" component="h4" id={headingId}>
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.disabled", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}
          >
            {period}
          </Typography>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.25, maxWidth: "62ch" }}>
          {summary}
        </Typography>

        <TechList items={project.stack} label={t("projects.stackLabel")} sx={{ mt: 2.5 }} />
        <ProjectLinks links={project.links} title={title} size="small" sx={{ mt: "auto", pt: 3 }} />
      </Box>
    </Reveal>
  );
}
