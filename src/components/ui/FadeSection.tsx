import React from "react";
import { useFadeIn } from "../../hooks";

export interface FadeSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function FadeSection({
  children,
  className = "",
  id,
}: FadeSectionProps) {
  const ref = useFadeIn<HTMLDivElement>();
  return (
    <section ref={ref} className={className} id={id}>
      {children}
    </section>
  );
}
