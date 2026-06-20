import Link from "next/link";
import { clientes, contratos, alertas } from "@/lib/mock-data";
import { Card, PageHeader } from "@/components/ui";

function Cartao({
  titulo,
  valor,
  href,
  descricao,
  delay,
}: {
  titulo: string;
  valor: number;
  href: string;
  descricao: string;
  delay: number;
}) {
  return (
    <Card
      as={Link}
      href={href}
      hover
      className="group flex animate-fade-in-up flex-col justify-between p-6"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-zinc-500">{titulo}</p>
        <span className="rounded-full bg-[var(--color-athena-100)] px-2.5 py-1 text-xs font-semibold text-[var(--color-athena-dark)] transition-transform duration-200 group-hover:scale-105">
          ver mais
        </span>
      </div>
      <p className="mt-7 text-4xl font-bold tracking-tight text-[var(--color-ink)]">{valor}</p>
      <p className="mt-1.5 text-xs text-zinc-400">{descricao}</p>
    </Card>
  );
}

function AtalhoExterno({
  titulo,
  descricao,
  href,
  delay,
}: {
  titulo: string;
  descricao: string;
  href: string;
  delay: number;
}) {
  return (
    <Card
      as="a"
      href={href}
      target="_blank"
      rel="noreferrer"
      hover
      className="group flex animate-fade-in-up items-center justify-between p-5"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div>
        <p className="text-sm font-semibold text-[var(--color-ink)]">{titulo}</p>
        <p className="text-xs text-zinc-500">{descricao}</p>
      </div>
      <span className="text-[var(--color-athena)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        ↗
      </span>
    </Card>
  );
}

export default function DashboardPage() {
  const vencendoEm90 = alertas.d90.length + alertas.d30.length + alertas.d7.length;
  const concluidos = clientes.filter((c) => c.accountPlanningConcluido).length;

  return (
    <div>
      <PageHeader
        title="Portal Comercial"
        description="Acompanhe o status do seu Account Planning, seja avisado quando um contrato estiver perto de vencer e mais."
      />

      <section className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Cartao titulo="Clientes cadastrados" valor={clientes.length} href="/account-planning" descricao="Total de contas ativas" delay={0} />
        <Cartao titulo="Contratos próximos do vencimento" valor={vencendoEm90} href="/alertas" descricao="Próximos 90 dias" delay={80} />
        <Cartao titulo="Account Planning concluídos" valor={concluidos} href="/account-planning" descricao={`${clientes.length - concluidos} pendente(s)`} delay={160} />
      </section>

      <section className="mb-10">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Acesso aos Relatórios
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <AtalhoExterno titulo="BI Comercial" descricao="Microsoft Fabric · acesso restrito" href="#" delay={0} />
          <AtalhoExterno titulo="BI Administrativo" descricao="Microsoft Fabric · acesso restrito" href="#" delay={60} />
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-500">
          Atalhos
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <AtalhoExterno titulo="RD Station CRM" descricao="Abrir CRM em nova aba" href="#" delay={0} />
          <AtalhoExterno titulo="Sharepoint" descricao="Documentos da empresa" href="#" delay={60} />
          <AtalhoExterno titulo="Suporte" descricao="Enviar e-mail para o suporte" href="mailto:suporte@athenasecurity.com.br" delay={120} />
        </div>
      </section>
    </div>
  );
}
