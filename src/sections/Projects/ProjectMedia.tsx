import { Box, type SxProps, type Theme } from "@mui/material";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { tokens } from "../../theme/tokens";

interface ProjectMediaProps {
  project: Project;
  title: string;
  sx?: SxProps<Theme>;
}

/**
 * Screenshot do projeto. Quando existe link, a imagem também leva a ele
 * (fora da ordem de tabulação: os botões abaixo já cobrem o teclado).
 */
export function ProjectMedia({ project, title, sx }: ProjectMediaProps) {
  const { t } = useTranslation();
  const href = project.links.live ?? project.links.code;
  const linkProps = href
    ? { component: "a" as const, href, target: "_blank", rel: "noopener noreferrer", tabIndex: -1, "aria-hidden": true }
    : {};

  return (
    <Box
      {...linkProps}
      sx={[
        {
          display: "block",
          position: "relative",
          aspectRatio: "2 / 1",
          overflow: "hidden",
          borderRadius: "12px",
          border: `1px solid ${tokens.color.line}`,
          bgcolor: "background.paper",
          boxShadow: "0 24px 48px -24px rgba(0, 0, 0, 0.9)",
          transition: `border-color 300ms ${tokens.ease.out}`,
          "& img": { transition: `transform 800ms ${tokens.ease.out}` },
          ...(href && {
            "&:hover": { borderColor: tokens.color.lineStrong },
            "&:hover img": { transform: "scale(1.025)" },
          }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        component="img"
        src={project.image.src}
        width={project.image.width}
        height={project.image.height}
        alt={t("projects.screenshotOf", { title })}
        loading="lazy"
        decoding="async"
        sx={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: project.image.position ?? "top center" }}
      />
    </Box>
  );
}
