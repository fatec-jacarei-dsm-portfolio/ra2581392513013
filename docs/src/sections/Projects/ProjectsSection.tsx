import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Section, SectionTitle } from "../../components/ui/Section";
import { categories, projects } from "../../data/projects";
import { byNewest } from "../../utils/formatPeriod";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectTile } from "./ProjectTile";

const Count = ({ children }: { children: string }) => (
  <Typography variant="caption" sx={{ color: "text.disabled", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>
    {children}
  </Typography>
);

export default function ProjectsSection() {
  const { t } = useTranslation();

  const groups = categories
    .map((category) => ({
      ...category,
      items: projects.filter((p) => p.category === category.id).sort(byNewest),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Section id="projects">
      <Box sx={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 2 }}>
        <SectionTitle id="projects">{t("projects.title")}</SectionTitle>
        <Count>{t("projects.count", { count: projects.length })}</Count>
      </Box>

      <Stack spacing={{ xs: 12, md: 18 }} sx={{ mt: { xs: 7, md: 10 } }}>
        {groups.map((group) => (
          <Box component="section" key={group.id} aria-labelledby={`category-${group.id}`}>
            <Box
              sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 2,
                mb: { xs: 5, md: 7 },
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                id={`category-${group.id}`}
                sx={{ fontSize: { md: "1.5rem" } }}
              >
                {t(`projects.categories.${group.id}`)}
              </Typography>
              <Count>{t("projects.count", { count: group.items.length })}</Count>
            </Box>

            {group.layout === "feature" ? (
              <Stack spacing={{ xs: 10, md: 14 }}>
                {group.items.map((project, i) => (
                  <FeaturedProject key={project.id} project={project} reverse={i % 2 === 1} />
                ))}
              </Stack>
            ) : (
              <Grid container columnSpacing={5} rowSpacing={{ xs: 8, md: 10 }}>
                {group.items.map((project, i) => (
                  <Grid item xs={12} sm={6} key={project.id}>
                    <ProjectTile project={project} delay={(i % 2) * 90} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Box>
        ))}
      </Stack>
    </Section>
  );
}
