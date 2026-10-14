import React from "react";

export interface SectionLabelProps {
  children: React.ReactNode;
  /** Kept for API compatibility; labels are plain text without an icon. */
  icon?: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-wider text-blue-600 ${className}`.trim()}>
      {children}
    </p>
  );
}
