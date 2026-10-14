import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "feature" | "industry" | "step" | "clean";
  className?: string;
}

export function Card({
  children,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const variantMap: Record<string, string> = {
    default: "bg-white rounded-2xl border border-slate-200/80 p-6 shadow-2xs",
    feature: "feature-box-card",
    industry: "industry-card",
    step: "step-card",
    clean: "bg-white rounded-2xl border border-slate-100",
  };

  const baseClass = variantMap[variant] || variantMap.default;

  return (
    <div className={`${baseClass} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}
