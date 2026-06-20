import { contratos } from "@/lib/mock-data";
import { Card, PageHeader } from "@/components/ui";

const formatador = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const dataFormatador = (d: string) => new Date(d).toLocaleDateString("pt-BR");

export default function ContratosPage() {
  return (
    <div>
      <PageHeader title="Contratos" description="Todos os contratos ativos cadastrados no portal." />

      <Card className="animate-fade-in-up overflow-x-auto [animation-delay:80ms]">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Cliente</th>
              <th className="px-5 py-3.5 font-semibold">Produto</th>
              <th className="px-5 py-3.5 font-semibold">Data de início</th>
              <th className="px-5 py-3.5 font-semibold">Data de término</th>
              <th className="px-5 py-3.5 font-semibold">Responsável</th>
              <th className="px-5 py-3.5 font-semibold">Valor</th>
            </tr>
          </thead>
          <tbody>
            {contratos.map((c) => (
              <tr key={c.id} className="border-t border-zinc-100 transition-colors duration-150 hover:bg-[var(--color-athena-50)]/60">
                <td className="px-5 py-3.5 font-medium text-zinc-800">{c.cliente}</td>
                <td className="px-5 py-3.5 text-zinc-700">{c.produto}</td>
                <td className="px-5 py-3.5 text-zinc-700">{dataFormatador(c.dataInicio)}</td>
                <td className="px-5 py-3.5 text-zinc-700">{dataFormatador(c.dataTermino)}</td>
                <td className="px-5 py-3.5 text-zinc-700">{c.responsavel}</td>
                <td className="px-5 py-3.5 font-medium text-zinc-800">{formatador.format(c.valor)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
