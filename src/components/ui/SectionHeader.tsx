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
          <h2 className="section-title mt-2">{title}</h2>
          {subtitle && <p className="section-subtitle max-w-xl">{subtitle}</p>}
        </div>
        <div className="self-start sm:self-auto shrink-0">{rightAction}</div>
      </div>
    );
  }

  const isLeft = align === "left";

  return (
    <div
      className={`${
        isLeft ? "text-left max-w-3xl" : "text-center max-w-2xl mx-auto"
      } mb-14 ${className}`.trim()}
    >
      {label && <SectionLabel icon={icon}>{label}</SectionLabel>}
      <h2 className="section-title mt-2">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
