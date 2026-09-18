import { Box, Container, Typography } from "@mui/material";
import type { ReactNode } from "react";
import type { SectionId } from "../../data/profile";
import { tokens } from "../../theme/tokens";

interface SectionProps {
  id: SectionId;
  children: ReactNode;
}

/** Bloco padrão das seções: fio no topo, título à esquerda, conteúdo depois. */
export function Section({ id, children }: SectionProps) {
  return (
    <Box component="section" id={id} aria-labelledby={`${id}-title`} sx={{ pt: tokens.sectionSpacing }}>
      <Container maxWidth="lg">
        <Box sx={{ borderTop: 1, borderColor: "divider", pt: { xs: 4, md: 5 } }}>{children}</Box>
      </Container>
    </Box>
  );
}

interface SectionTitleProps {
  id: SectionId;
  children: ReactNode;
}

export function SectionTitle({ id, children }: SectionTitleProps) {
  return (
    <Typography variant="h2" id={`${id}-title`} sx={{ textWrap: "balance" }}>
      {children}
    </Typography>
  );
}
