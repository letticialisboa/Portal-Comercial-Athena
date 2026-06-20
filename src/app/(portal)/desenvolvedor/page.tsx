"use client";

import { useState } from "react";
import { usuarios, perguntasAccountPlanning } from "@/lib/mock-data";
import { Card, PageHeader, Button } from "@/components/ui";

export default function DesenvolvedorPage() {
  const [aba, setAba] = useState<"usuarios" | "perguntas">("usuarios");

  return (
    <div>
      <PageHeader title="Painel do Desenvolvedor" description="Visível apenas para administradores." />

      <div className="mb-6 flex animate-fade-in-up gap-1 rounded-xl border border-zinc-200 bg-white p-1 shadow-soft [animation-delay:60ms] w-fit">
        {[
          { id: "usuarios", label: "Usuários e Permissões" },
          { id: "perguntas", label: "Perguntas do Account Planning" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setAba(t.id as typeof aba)}
            className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
              aba === t.id
                ? "bg-[var(--color-athena)] text-white shadow-sm"
                : "text-zinc-500 hover:bg-[var(--color-athena-50)] hover:text-[var(--color-athena-dark)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {aba === "usuarios" && (
        <Card className="animate-fade-in-up overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-xs uppercase tracking-wide text-zinc-500">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Nome</th>
                <th className="px-5 py-3.5 font-semibold">E-mail</th>
                <th className="px-5 py-3.5 font-semibold">Perfil</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((u) => (
                <tr key={u.id} className="border-t border-zinc-100 transition-colors duration-150 hover:bg-[var(--color-athena-50)]/60">
                  <td className="px-5 py-3.5 font-medium text-zinc-800">{u.nome}</td>
                  <td className="px-5 py-3.5 text-zinc-600">{u.email}</td>
                  <td className="px-5 py-3.5">
                    <select
                      defaultValue={u.perfil}
                      className="rounded-lg border border-zinc-200 px-2.5 py-1.5 text-xs font-medium text-zinc-700 outline-none transition-colors duration-200 focus:border-[var(--color-athena)] focus:ring-2 focus:ring-[var(--color-athena)]/15"
                    >
                      <option>Administrador</option>
                      <option>Usuário</option>
                      <option>Visualizador</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      )}

      {aba === "perguntas" && (
        <div className="space-y-5">
          {perguntasAccountPlanning.map((cat, idx) => (
            <Card key={cat.categoria} className="animate-fade-in-up p-5" style={{ animationDelay: `${idx * 80}ms` }}>
              <h3 className="mb-3 text-sm font-semibold text-[var(--color-athena-dark)]">{cat.categoria}</h3>
              <ul className="space-y-2">
                {cat.perguntas.map((p) => (
                  <li
                    key={p.id}
                    className="flex items-center justify-between rounded-xl border border-zinc-100 px-4 py-2.5 text-sm transition-colors duration-150 hover:border-[var(--color-athena)]/30 hover:bg-[var(--color-athena-50)]/40"
                  >
                    <span className="text-zinc-700">{p.texto}</span>
                    <div className="flex gap-3 text-xs">
                      <button className="font-medium text-zinc-500 transition-colors hover:text-[var(--color-athena)]">Editar</button>
                      <button className="font-medium text-zinc-500 transition-colors hover:text-red-600">Excluir</button>
                    </div>
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className="mt-3 px-2 py-1.5 text-xs">
                + Adicionar pergunta
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
