"use client";

import { useState } from "react";
import { Card, PageHeader } from "@/components/ui";

type No = { id: string; tipo: "colaborador" | "atividade"; label: string; x: number; y: number; conectaA?: string };

const nos: No[] = [
  { id: "leticia", tipo: "colaborador", label: "Letícia", x: 180, y: 220 },
  { id: "kleber", tipo: "colaborador", label: "Kleber", x: 560, y: 320 },
  { id: "a1", tipo: "atividade", label: "Planilha de Clientes", x: 70, y: 100, conectaA: "leticia" },
  { id: "a2", tipo: "atividade", label: "Configuração do CRM", x: 220, y: 80, conectaA: "leticia" },
  { id: "a3", tipo: "atividade", label: "Monitoramento do BI", x: 60, y: 320, conectaA: "leticia" },
  { id: "a4", tipo: "atividade", label: "Qualificação de Leads", x: 300, y: 330, conectaA: "leticia" },
  { id: "a5", tipo: "atividade", label: "Propostas", x: 480, y: 180, conectaA: "kleber" },
  { id: "a6", tipo: "atividade", label: "Pedidos", x: 660, y: 180, conectaA: "kleber" },
  { id: "a7", tipo: "atividade", label: "Contratos", x: 700, y: 360, conectaA: "kleber" },
  { id: "a8", tipo: "atividade", label: "Distribuição de Leads", x: 480, y: 420, conectaA: "kleber" },
];

export default function OrgChartPage() {
  const [ativo, setAtivo] = useState<string | null>(null);

  function relacionado(id: string) {
    if (!ativo) return true;
    if (id === ativo) return true;
    const no = nos.find((n) => n.id === id);
    return no?.conectaA === ativo;
  }

  return (
    <div>
      <PageHeader
        title="Org. Chart"
        description="Mapa organizacional interativo — passe o mouse sobre um colaborador para destacar suas conexões."
      />

      <Card className="animate-fade-in-up p-4 [animation-delay:80ms]">
        <svg viewBox="0 0 780 480" className="h-[480px] w-full">
          {nos
            .filter((n) => n.conectaA)
            .map((n) => {
              const origem = nos.find((o) => o.id === n.conectaA)!;
              const destacado = relacionado(n.id);
              return (
                <line
                  key={`linha-${n.id}`}
                  x1={origem.x}
                  y1={origem.y}
                  x2={n.x}
                  y2={n.y}
                  stroke={destacado ? "#F08021" : "#E4E4E7"}
                  strokeWidth={destacado ? 2.5 : 1}
                  className="transition-all duration-500 ease-out"
                />
              );
            })}

          {nos.map((n) => {
            const destacado = relacionado(n.id);
            const colaborador = n.tipo === "colaborador";
            return (
              <g
                key={n.id}
                onMouseEnter={() => colaborador && setAtivo(n.id)}
                onMouseLeave={() => colaborador && setAtivo(null)}
                className="cursor-pointer transition-opacity duration-500 ease-out"
                style={{ opacity: destacado ? 1 : 0.3 }}
              >
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={colaborador ? 30 : 18}
                  fill={colaborador ? "#18181B" : "#FFF6EE"}
                  stroke="#F08021"
                  strokeWidth={colaborador ? 3 : 1.5}
                  className="transition-all duration-300 ease-out"
                  style={{ transform: destacado && colaborador ? "scale(1.06)" : "scale(1)", transformOrigin: `${n.x}px ${n.y}px` }}
                />
                <text
                  x={n.x}
                  y={n.y + (colaborador ? 50 : 34)}
                  textAnchor="middle"
                  fontSize={colaborador ? 13 : 11}
                  fontWeight={colaborador ? 700 : 500}
                  fill="#18181B"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </Card>
    </div>
  );
}
