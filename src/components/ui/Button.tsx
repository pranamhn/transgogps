import React from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "hero-primary"
  | "hero-secondary"
  | "cta-white"
  | "cta-whatsapp"
  | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const variantClassMap: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  outline: "btn-outline",
  "hero-primary": "btn-hero-primary",
  "hero-secondary": "btn-hero-secondary",
  "cta-white": "btn-cta-white",
  "cta-whatsapp": "btn-cta-whatsapp",
  ghost: "text-slate-600 hover:text-slate-900 transition-colors",
};

export function Button({
  variant = "primary",
  size,
  iconLeft,
  iconRight,
  href,
  target,
  rel,
  children,
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const baseClass = variantClassMap[variant] || "btn-primary";
  const sizeClass =
    size === "sm"
      ? "text-xs py-1.5 px-3"
      : size === "lg"
      ? "text-base py-3 px-6"
      : "";

  const fullClassName = `${baseClass} ${sizeClass} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? rel || "noreferrer" : rel}
        className={fullClassName}
        onClick={props.onClick as any}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="shrink-0">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button type={type} className={fullClassName} {...props}>
      {iconLeft && <span className="shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
}
