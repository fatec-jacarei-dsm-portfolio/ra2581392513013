import { useTranslation } from "react-i18next";
import type { Project } from "../../data/projects";
import { formatPeriod } from "../../utils/formatPeriod";

/** Textos traduzidos de um projeto (título, resumo, contribuição e período). */
export function useProjectText(project: Project) {
  const { t, i18n } = useTranslation();
  const base = `projects.items.${project.id}`;
  const months = t("date.months", { returnObjects: true }) as string[];

  return {
    title: t(`${base}.title`),
    summary: t(`${base}.summary`),
    role: i18n.exists(`${base}.role`) ? t(`${base}.role`) : undefined,
    period: formatPeriod(project.period, months),
  };
}
