import { Box, Grid, Typography } from "@mui/material";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { useTranslation } from "react-i18next";
import type { ReactNode } from "react";
import { Section, SectionTitle } from "../../components/ui/Section";
import { TechList } from "../../components/ui/TechList";
import { skills } from "../../data/profile";

interface FactRowProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}

function FactRow({ icon, label, children }: FactRowProps) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
        columnGap: 3,
        rowGap: 1,
        py: 3,
        borderBottom: 1,
        borderColor: "divider",
        "&:first-of-type": { pt: { xs: 0, md: 1.5 } },
      }}
    >
      <Box
        component="dt"
        sx={{ display: "flex", alignItems: "center", gap: 1.25, color: "text.secondary", fontSize: "0.9375rem" }}
      >
        <Box component="span" sx={{ display: "flex", color: "primary.main", "& svg": { fontSize: 20 } }}>
          {icon}
        </Box>
        {label}
      </Box>
      <Box component="dd" sx={{ m: 0 }}>
        {children}
      </Box>
    </Box>
  );
}

export default function OthersSection() {
  const { t } = useTranslation();

  return (
    <Section id="others">
      <Grid container spacing={{ xs: 4, md: 6 }}>
        <Grid item xs={12} md={4}>
          <SectionTitle id="others">{t("others.title")}</SectionTitle>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box component="dl" sx={{ m: 0 }}>
            <FactRow icon={<WorkOutlineIcon />} label={t("others.experience.title")}>
              <Typography sx={{ fontSize: "1.1875rem", lineHeight: 1.45 }}>
                <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                  {t("others.experience.years")}
                </Box>{" "}
                · {t("others.experience.field")}
              </Typography>
            </FactRow>
            <FactRow icon={<SchoolOutlinedIcon />} label={t("others.education.title")}>
              <Typography sx={{ fontSize: "1.1875rem", lineHeight: 1.45 }}>{t("others.education.desc")}</Typography>
            </FactRow>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} sx={{ mt: { xs: 4, md: 8 } }}>
          <Typography variant="h3" component="h3" id="skills-title">
            {t("skills.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} sx={{ mt: { xs: 0, md: 8 } }}>
          <TechList items={skills} label={t("skills.title")} size="md" sx={{ pt: { md: 0.75 } }} />
        </Grid>
      </Grid>
    </Section>
  );
}
