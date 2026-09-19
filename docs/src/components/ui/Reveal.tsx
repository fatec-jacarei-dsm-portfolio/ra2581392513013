import { Box } from "@mui/material";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { tokens } from "../../theme/tokens";

interface RevealProps {
  children: ReactNode;
  delay?: number;
}

/**
 * Entrada suave ao rolar. O conteúdo começa visível: só é escondido
 * se estiver abaixo da dobra, e nunca com "prefers-reduced-motion".
 */
export function Reveal({ children, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        height: "100%",
        ...(state === "hidden" && { opacity: 0, transform: "translateY(28px)" }),
        ...(state === "shown" && {
          opacity: 1,
          transform: "none",
          transition: `opacity 700ms ${tokens.ease.out} ${delay}ms, transform 900ms ${tokens.ease.out} ${delay}ms`,
        }),
      }}
    >
      {children}
    </Box>
  );
}
