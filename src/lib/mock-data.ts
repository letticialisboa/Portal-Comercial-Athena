// Dados mockados — substituir pela integração real com RD Station CRM / Power BI (Fabric).

export type Cliente = {
  id: string;
  nome: string;
  segmento: string;
  potencial: "Baixo Potencial" | "Médio Potencial" | "Alto Potencial" | "Conta Estratégica";
  estruturaTI: string;
  desafiosNegocio: string;
  projetosFuturos: string;
  concorrencia: string;
  accountPlanningConcluido: boolean;
};

export const clientes: Cliente[] = [
  {
    id: "c1",
    nome: "Grupo Vetor Indústria",
    segmento: "Industrial / Enterprise",
    potencial: "Conta Estratégica",
    estruturaTI: "Core + SaaS",
    desafiosNegocio: "Transformação digital, conformidade LGPD",
    projetosFuturos: "Expansão de SOC, revisão de firewall",
    concorrencia: "Fornecedor incumbente em renovação",
    accountPlanningConcluido: true,
  },
  {
    id: "c2",
    nome: "Boreal Saúde",
    segmento: "Saúde / Governo",
    potencial: "Alto Potencial",
    estruturaTI: "Serviços + Licenças",
    desafiosNegocio: "Backup e continuidade de negócio",
    projetosFuturos: "Avaliação de backup, projeto de eficiência",
    concorrencia: "Sem concorrência ativa identificada",
    accountPlanningConcluido: true,
  },
  {
    id: "c3",
    nome: "Cedro Logística",
    segmento: "Logística / PME",
    potencial: "Médio Potencial",
    estruturaTI: "Core",
    desafiosNegocio: "Custos operacionais, talento",
    projetosFuturos: "Em avaliação",
    concorrencia: "Concorrente local em prospecção",
    accountPlanningConcluido: false,
  },
  {
    id: "c4",
    nome: "Marfim Capital",
    segmento: "Financeiro / Capital Aberto",
    potencial: "Conta Estratégica",
    estruturaTI: "Core + Digital + Serviços",
    desafiosNegocio: "Conformidade setorial, fiscal",
    projetosFuturos: "Reunião executiva agendada",
    concorrencia: "Disputa direta com 2 concorrentes",
    accountPlanningConcluido: false,
  },
];

export type Contrato = {
  id: string;
  cliente: string;
  produto: string;
  dataInicio: string;
  dataTermino: string;
  responsavel: string;
  valor: number;
};

export const contratos: Contrato[] = [
  { id: "ct1", cliente: "Grupo Vetor Indústria", produto: "SOC Gerenciado", dataInicio: "2024-08-01", dataTermino: "2026-07-15", responsavel: "Letícia", valor: 184000 },
  { id: "ct2", cliente: "Boreal Saúde", produto: "Backup as a Service", dataInicio: "2025-01-10", dataTermino: "2026-07-01", responsavel: "Kleber", valor: 96000 },
  { id: "ct3", cliente: "Cedro Logística", produto: "Firewall Gerenciado", dataInicio: "2025-06-19", dataTermino: "2026-06-26", responsavel: "Letícia", valor: 42000 },
  { id: "ct4", cliente: "Marfim Capital", produto: "Licenciamento Core", dataInicio: "2023-09-01", dataTermino: "2026-09-12", responsavel: "Kleber", valor: 310000 },
];

function diasParaVencer(dataTermino: string) {
  const hoje = new Date("2026-06-19");
  const termino = new Date(dataTermino);
  return Math.ceil((termino.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
}

export const alertas = {
  d90: contratos.filter((c) => diasParaVencer(c.dataTermino) <= 90 && diasParaVencer(c.dataTermino) > 30),
  d30: contratos.filter((c) => diasParaVencer(c.dataTermino) <= 30 && diasParaVencer(c.dataTermino) > 7),
  d7: contratos.filter((c) => diasParaVencer(c.dataTermino) <= 7),
};

export type Confirmacao = {
  id: string;
  cliente: string;
  contrato: string;
  emailEnviado: string;
  status: "Pendente" | "Confirmado";
};

export const confirmacoes: Confirmacao[] = [
  { id: "cf1", cliente: "Cedro Logística", contrato: "Firewall Gerenciado", emailEnviado: "2026-06-12", status: "Pendente" },
  { id: "cf2", cliente: "Grupo Vetor Indústria", contrato: "SOC Gerenciado", emailEnviado: "2026-06-01", status: "Confirmado" },
];

export type PerguntaCategoria = {
  categoria: string;
  perguntas: { id: string; texto: string; tipo: "single" | "multi" | "texto"; opcoes?: string[] }[];
};

export const perguntasAccountPlanning: PerguntaCategoria[] = [
  {
    categoria: "Visão Estratégica da Empresa",
    perguntas: [
      { id: "p1", texto: "Como a empresa avalia seu momento atual?", tipo: "single", opcoes: ["Crescimento", "Consolidação", "Transformação"] },
      { id: "p2", texto: "Existem planos de expansão, aquisições ou novos mercados?", tipo: "single", opcoes: ["Sim", "Não", "Parcialmente"] },
    ],
  },
  {
    categoria: "Estrutura de TI",
    perguntas: [
      { id: "p3", texto: "Qual a composição da estrutura de TI?", tipo: "single", opcoes: ["Core", "SaaS", "Serviços"] },
    ],
  },
];

export const usuarios = [
  { id: "u1", nome: "Letícia Brito", email: "lbrito@athenasecurity.com.br", perfil: "Administrador" },
  { id: "u2", nome: "Kleber", email: "kleber@athenasecurity.com.br", perfil: "Usuário" },
  { id: "u3", nome: "Tiago Vieira", email: "tvieira@athenasecurity.com.br", perfil: "Administrador" },
  { id: "u4", nome: "Convidado BI", email: "convidado@athenasecurity.com.br", perfil: "Visualizador" },
];
