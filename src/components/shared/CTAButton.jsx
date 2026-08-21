import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function CTAButton({ to, children, variant = "default", className = "" }) {
  const base = "inline-flex items-center gap-3 text-sm font-medium tracking-wider transition-all duration-300 group";
  const variantStyles = variant === "outline"
    ? `${base} text-foreground border-2 border-foreground px-6 py-3 rounded-full hover:bg-foreground hover:text-background`
    : `${base} text-white bg-primary px-6 py-3 rounded-full hover:bg-primary/90`;
  const styles = `${variantStyles} ${className}`.trim();

  const isExternal = to?.startsWith("tel:") || to?.startsWith("mailto:") || to?.startsWith("http");

  if (isExternal) {
    return (
      <a href={to} className={styles}>
        {children}
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }

  return (
    <Link to={to} className={styles}>
      {children}
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
