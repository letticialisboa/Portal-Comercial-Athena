import { alertas } from "@/lib/mock-data";
import type { Contrato } from "@/lib/mock-data";
import { Card, PageHeader } from "@/components/ui";

function Bloco({
  titulo,
  cor,
  itens,
  delay,
}: {
  titulo: string;
  cor: string;
  itens: Contrato[];
  delay: number;
}) {
  return (
    <Card className="animate-fade-in-up overflow-hidden" style={{ animationDelay: `${delay}ms` }}>
      <div className={`flex items-center justify-between px-5 py-3.5 ${cor}`}>
        <h2 className="text-sm font-semibold text-white">{titulo}</h2>
        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold text-white">
          {itens.length}
        </span>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="text-xs uppercase tracking-wide text-zinc-500">
          <tr>
            <th className="px-5 py-2.5 font-semibold">Cliente</th>
            <th className="px-5 py-2.5 font-semibold">Produto</th>
            <th className="px-5 py-2.5 font-semibold">Vencimento</th>
            <th className="px-5 py-2.5 font-semibold">Responsável</th>
          </tr>
        </thead>
        <tbody>
          {itens.length === 0 && (
            <tr>
              <td colSpan={4} className="px-5 py-6 text-center text-xs text-zinc-400">
                Nenhum contrato nesta faixa.
              </td>
            </tr>
          )}
          {itens.map((c) => (
            <tr key={c.id} className="border-t border-zinc-100 transition-colors duration-150 hover:bg-[var(--color-athena-50)]/60">
              <td className="px-5 py-2.5 font-medium text-zinc-800">{c.cliente}</td>
              <td className="px-5 py-2.5 text-zinc-700">{c.produto}</td>
              <td className="px-5 py-2.5 text-zinc-700">{new Date(c.dataTermino).toLocaleDateString("pt-BR")}</td>
              <td className="px-5 py-2.5 text-zinc-700">{c.responsavel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default function AlertasPage() {
  return (
    <div>
      <PageHeader title="Alertas de vencimento" description="Contratos organizados por proximidade do vencimento." />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Bloco titulo="Vencendo em 90 dias" cor="bg-amber-500" itens={alertas.d90} delay={0} />
        <Bloco titulo="Vencendo em 30 dias" cor="bg-[var(--color-athena)]" itens={alertas.d30} delay={80} />
        <Bloco titulo="Vencendo em 7 dias" cor="bg-red-500" itens={alertas.d7} delay={160} />
      </div>
    </div>
  );
}
