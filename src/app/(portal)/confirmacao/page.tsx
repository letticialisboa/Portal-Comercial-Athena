import { confirmacoes } from "@/lib/mock-data";
import { Card, Badge, PageHeader } from "@/components/ui";

export default function ConfirmacaoPage() {
  return (
    <div>
      <PageHeader
        title="Confirmação de renovação"
        description="E-mails de confirmação enviados e clientes pendentes de resposta."
      />

      <Card className="animate-fade-in-up overflow-x-auto [animation-delay:80ms]">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-5 py-3.5 font-semibold">Cliente</th>
              <th className="px-5 py-3.5 font-semibold">Contrato</th>
              <th className="px-5 py-3.5 font-semibold">E-mail enviado em</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {confirmacoes.map((c) => (
              <tr key={c.id} className="border-t border-zinc-100 transition-colors duration-150 hover:bg-[var(--color-athena-50)]/60">
                <td className="px-5 py-3.5 font-medium text-zinc-800">{c.cliente}</td>
                <td className="px-5 py-3.5 text-zinc-700">{c.contrato}</td>
                <td className="px-5 py-3.5 text-zinc-700">{new Date(c.emailEnviado).toLocaleDateString("pt-BR")}</td>
                <td className="px-5 py-3.5">
                  <Badge tone={c.status === "Confirmado" ? "green" : "amber"}>{c.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
