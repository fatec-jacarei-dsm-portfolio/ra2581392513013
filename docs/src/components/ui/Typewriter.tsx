import { Box, Typography, keyframes } from "@mui/material";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { visuallyHidden } from "../../utils/visuallyHidden";

const blink = keyframes`
  0%, 55% { opacity: 1; }
  56%, 100% { opacity: 0; }
`;

interface TypewriterProps {
  text: string;
  /** Intervalo entre letras, em ms */
  delay?: number;
}

export function Typewriter({ text, delay = 70 }: TypewriterProps) {
  const reduced = usePrefersReducedMotion();
  const [count, setCount] = useState(reduced ? text.length : 0);

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const timer = window.setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          window.clearInterval(timer);
          return c;
        }
        return c + 1;
      });
    }, delay);
    return () => window.clearInterval(timer);
  }, [text, delay, reduced]);

  return (
    <Typography variant="subtitle1" component="p" color="primary" sx={{ minHeight: "1.35em" }}>
      <Box component="span" sx={visuallyHidden}>
        {text}
      </Box>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <Box
          component="span"
          sx={{
            display: "inline-block",
            width: "2px",
            height: "1.05em",
            ml: "3px",
            verticalAlign: "-0.14em",
            bgcolor: "primary.main",
            animation: reduced ? "none" : `${blink} 1.1s linear infinite`,
          }}
        />
      </span>
    </Typography>
  );
}
