import React from "react";
import { SectionLabel } from "./SectionLabel";

export interface PageHeroProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
  variant?: "subpage" | "page";
  className?: string;
}

export function PageHero({
  label,
  icon,
  title,
  subtitle,
  children,
  variant = "subpage",
  className = "",
}: PageHeroProps) {
  if (variant === "page") {
    return (
      <section className={`page-hero ${className}`.trim()}>
        <div className="container">
          <SectionLabel icon={icon}>{label}</SectionLabel>
          <h1 className="page-hero-title mt-2">{title}</h1>
          <p className="page-hero-desc">{subtitle}</p>
          {children}
        </div>
      </section>
    );
  }

  return (
    <section className={`subpage-hero ${className}`.trim()}>
      <div className="max-w-4xl mx-auto text-center px-4">
        <SectionLabel icon={icon}>{label}</SectionLabel>
        <h1 className="subpage-title mt-2">{title}</h1>
        <p className="subpage-subtitle">{subtitle}</p>
        {children}
      </div>
    </section>
  );
}
