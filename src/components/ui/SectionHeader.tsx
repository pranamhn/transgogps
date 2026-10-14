import React from "react";
import { SectionLabel } from "./SectionLabel";

export interface SectionHeaderProps {
  label?: React.ReactNode;
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  rightAction?: React.ReactNode;
  className?: string;
}

const titleClass = "text-3xl sm:text-4xl font-bold tracking-tight leading-tight text-slate-900 text-balance";
const subtitleClass = "mt-3 text-base text-slate-600 leading-relaxed text-pretty";

export function SectionHeader({
  label,
  icon,
  title,
  subtitle,
  align = "center",
  rightAction,
  className = "",
}: SectionHeaderProps) {
  if (rightAction) {
    return (
      <div
        className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 ${className}`.trim()}
      >
        <div>
          {label && <SectionLabel icon={icon}>{label}</SectionLabel>}
          <h2 className={`mt-2 ${titleClass}`}>{title}</h2>
          {subtitle && <p className={`${subtitleClass} max-w-xl`}>{subtitle}</p>}
        </div>
        <div className="self-start sm:self-auto shrink-0">{rightAction}</div>
      </div>
    );
  }

  const isLeft = align === "left";

  return (
    <div
      className={`${
        isLeft ? "text-left max-w-3xl" : "text-center max-w-4xl mx-auto"
      } mb-12 ${className}`.trim()}
    >
      {label && <SectionLabel icon={icon}>{label}</SectionLabel>}
      <h2 className={`mt-2 ${titleClass}`}>{title}</h2>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
}
