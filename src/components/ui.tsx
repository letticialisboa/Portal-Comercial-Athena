import { ReactNode } from "react";

export function Card({
  children,
  className = "",
  hover = false,
  as: As = "div",
  ...rest
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: any;
  [key: string]: any;
}) {
  return (
    <As
      className={`rounded-2xl border border-zinc-200/70 bg-white shadow-soft transition-all duration-300 ${
        hover ? "shadow-soft-hover hover:-translate-y-0.5 hover:border-[var(--color-athena)]/30" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </As>
  );
}

export function Badge({
  children,
  tone = "neutral",
  className = "",
}: {
  children: ReactNode;
  tone?: "neutral" | "orange" | "green" | "amber" | "red";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-zinc-100 text-zinc-600",
    orange: "bg-[var(--color-athena-100)] text-[var(--color-athena-dark)]",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-700",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold transition-colors duration-200 ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  [key: string]: any;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none";
  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-athena)] text-white shadow-sm hover:bg-[var(--color-athena-dark)] hover:shadow-md hover:shadow-[var(--color-athena)]/20",
    secondary:
      "bg-white text-zinc-700 border border-zinc-200 hover:border-[var(--color-athena)]/40 hover:text-[var(--color-athena-dark)] hover:bg-[var(--color-athena-50)]",
    ghost: "text-zinc-500 hover:text-[var(--color-athena-dark)] hover:bg-[var(--color-athena-50)]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between animate-fade-in-up">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-ink)] sm:text-[28px]">{title}</h1>
        {description && <p className="mt-1.5 text-sm text-zinc-500">{description}</p>}
      </div>
      {action}
    </header>
  );
}
