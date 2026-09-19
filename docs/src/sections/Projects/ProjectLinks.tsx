import { Button, Stack, type SxProps, type Theme } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";

interface ProjectLinksProps {
  links: Project["links"];
  title: string;
  size?: "small" | "medium";
  sx?: SxProps<Theme>;
}

/** Só mostra os links que existem. O primeiro vira o botão com contorno. */
export function ProjectLinks({ links, title, size = "medium", sx }: ProjectLinksProps) {
  const { t } = useTranslation();
  const external = { target: "_blank", rel: "noopener noreferrer" };
  const describe = (action: string) => `${action}: ${title} (${t("projects.newTab")})`;

  if (!links.live && !links.code) return null;

  return (
    <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={sx}>
      {links.live && (
        <Button
          variant="outlined"
          size={size}
          href={links.live}
          {...external}
          endIcon={<ArrowOutwardIcon sx={{ fontSize: "1.1em !important" }} />}
          aria-label={describe(t("projects.live"))}
        >
          {t("projects.live")}
        </Button>
      )}
      {links.code && (
        <Button
          variant={links.live ? "text" : "outlined"}
          size={size}
          href={links.code}
          {...external}
          startIcon={<GitHubIcon sx={{ fontSize: "1.15em !important" }} />}
          aria-label={describe(t("projects.code"))}
        >
          {t("projects.code")}
        </Button>
      )}
    </Stack>
  );
}
