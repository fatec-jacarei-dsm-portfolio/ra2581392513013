const parse = (value: string) => {
  const [year, month] = value.split("-").map(Number);
  return { year, month };
};

/**
 * "2025-02" → "Fev 2025"
 * "2025-02" a "2025-07" → "Fev – Jul 2025"
 * "2025-11" a "2026-02" → "Nov 2025 – Fev 2026"
 */
export function formatPeriod(period: { start: string; end?: string }, months: string[]) {
  const start = parse(period.start);
  const label = (d: { year: number; month: number }) => `${months[d.month - 1]} ${d.year}`;

  if (!period.end || period.end === period.start) return label(start);

  const end = parse(period.end);
  if (end.year === start.year) return `${months[start.month - 1]} – ${label(end)}`;
  return `${label(start)} – ${label(end)}`;
}

/** Para ordenar do mais recente para o mais antigo. */
export const byNewest = (a: { period: { start: string } }, b: { period: { start: string } }) =>
  b.period.start.localeCompare(a.period.start);
