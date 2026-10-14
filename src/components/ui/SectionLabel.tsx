import React from "react";

export interface SectionLabelProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, icon, className = "" }: SectionLabelProps) {
  return (
    <div className={`section-label-chip ${className}`.trim()}>
      {icon && <span className="section-label-icon">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}
