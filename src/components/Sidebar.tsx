"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const itens = [
  { href: "/dashboard", label: "Dashboard", icon: "▣" },
  { href: "/account-planning", label: "Account Planning", icon: "◆" },
  { href: "/contratos", label: "Contratos", icon: "▤" },
  { href: "/alertas", label: "Alertas", icon: "▲" },
  { href: "/confirmacao", label: "Confirmação", icon: "✓" },
  { href: "/org-chart", label: "Org. Chart", icon: "◎" },
  { href: "/desenvolvedor", label: "Desenvolvedor", icon: "⚙" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [expandido, setExpandido] = useState(false);

  return (
    <aside
      onMouseEnter={() => setExpandido(true)}
      onMouseLeave={() => setExpandido(false)}
      className={`fixed left-0 top-0 z-40 flex h-screen flex-col bg-[var(--color-ink)] text-white transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        expandido ? "w-64" : "w-[68px]"
      }`}
    >
      <div className="flex h-16 items-center gap-3 px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-athena-light)] to-[var(--color-athena)] font-bold shadow-md shadow-[var(--color-athena)]/30 transition-transform duration-300 hover:scale-105">
          A
        </div>
        <span
          className={`whitespace-nowrap text-[15px] font-semibold tracking-tight transition-opacity duration-200 ${
            expandido ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          Portal Comercial
        </span>
      </div>

      <nav className="mt-3 flex flex-1 flex-col gap-1 overflow-y-auto px-2.5">
        {itens.map((item) => {
          const ativo = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                ativo
                  ? "bg-[var(--color-athena)] text-white shadow-sm shadow-[var(--color-athena)]/30"
                  : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              <span className="w-5 shrink-0 text-center text-base transition-transform duration-200 group-hover:scale-110">
                {item.icon}
              </span>
              <span
                className={`whitespace-nowrap font-medium transition-opacity duration-200 ${
                  expandido ? "opacity-100 delay-75" : "opacity-0"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 px-4 py-4 text-xs text-zinc-500">
        <span
          className={`whitespace-nowrap transition-opacity duration-200 ${
            expandido ? "opacity-100 delay-100" : "opacity-0"
          }`}
        >
          Athena Security © 2026
        </span>
      </div>
    </aside>
  );
}
