import { clientes } from "@/lib/mock-data";
import { Card, Badge, Button, PageHeader } from "@/components/ui";

const colunas: { chave: keyof typeof clientes[number]; label: string }[] = [
  { chave: "nome", label: "Informações da empresa" },
  { chave: "estruturaTI", label: "Estrutura de TI" },
  { chave: "desafiosNegocio", label: "Desafios do negócio" },
  { chave: "projetosFuturos", label: "Projetos futuros" },
  { chave: "concorrencia", label: "Concorrência" },
  { chave: "potencial", label: "Potencial da conta" },
];

const tomPotencial: Record<string, "neutral" | "amber" | "orange"> = {
  "Baixo Potencial": "neutral",
  "Médio Potencial": "amber",
  "Alto Potencial": "orange",
  "Conta Estratégica": "orange",
};

export default function AccountPlanningPage() {
  return (
    <div>
      <PageHeader
        title="Account Planning"
        description="Visão consolidada por conta, pronta para análise no Power BI."
        action={<Button>+ Novo Account Planning</Button>}
      />

      <Card className="animate-fade-in-up overflow-x-auto [animation-delay:80ms]">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              {colunas.map((c) => (
                <th key={c.label} className="whitespace-nowrap px-5 py-3.5 font-semibold">
                  {c.label}
                </th>
              ))}
              <th className="whitespace-nowrap px-5 py-3.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id} className="border-t border-zinc-100 transition-colors duration-150 hover:bg-[var(--color-athena-50)]/60">
                {colunas.map((col) =>
                  col.chave === "potencial" ? (
                    <td key={col.chave} className="px-5 py-3.5">
                      <Badge tone={tomPotencial[c.potencial]}>{c.potencial}</Badge>
                    </td>
                  ) : (
                    <td key={col.chave} className="px-5 py-3.5 text-zinc-700">
                      {c[col.chave] as string}
                    </td>
                  )
                )}
                <td className="px-5 py-3.5">
                  {c.accountPlanningConcluido ? (
                    <Badge tone="green">Concluído</Badge>
                  ) : (
                    <Badge tone="amber">Pendente</Badge>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
