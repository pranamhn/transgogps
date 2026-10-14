import React from "react";
import { useFadeIn } from "../hooks";

export function SectionLabel({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <div className="section-label-chip">
      {icon && <span className="section-label-icon">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

export function FadeSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
}
