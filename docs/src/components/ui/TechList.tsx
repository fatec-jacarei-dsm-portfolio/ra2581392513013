import { Box, type SxProps, type Theme } from "@mui/material";
import { tokens } from "../../theme/tokens";

interface TechListProps {
  items: readonly string[];
  label: string;
  size?: "sm" | "md";
  sx?: SxProps<Theme>;
}

export function TechList({ items, label, size = "sm", sx }: TechListProps) {
  const md = size === "md";

  return (
    <Box
      component="ul"
      aria-label={label}
      sx={[
        { display: "flex", flexWrap: "wrap", gap: md ? 1.25 : 1, p: 0, m: 0, listStyle: "none" },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {items.map((item) => (
        <Box
          component="li"
          key={item}
          sx={{
            px: md ? 2 : 1.25,
            py: md ? 1 : 0.5,
            border: `1px solid ${tokens.color.line}`,
            borderRadius: md ? "8px" : "6px",
            bgcolor: md ? "background.paper" : "transparent",
            color: md ? "text.primary" : "text.secondary",
            fontSize: md ? "0.9375rem" : "0.8125rem",
            fontWeight: md ? 500 : 450,
            lineHeight: 1.5,
          }}
        >
          {item}
        </Box>
      ))}
    </Box>
  );
}
