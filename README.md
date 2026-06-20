# Portal Comercial — Athena Security

Scaffold em Next.js (App Router) + Tailwind CSS v4 com UI premium estilo SaaS
moderno: tipografia Inter, cantos arredondados, sombras suaves, micro-animações
e hover states em todo o portal. Funcionalidade e navegação preservadas do
briefing original: Login, Dashboard, Account Planning, Contratos, Alertas,
Confirmação, Org. Chart e Painel do Desenvolvedor.

## Rodar localmente
```bash
npm install
npm run dev
```
Acesse http://localhost:3000 — qualquer e-mail/senha entra (autenticação mock).

## Design system
- `src/app/globals.css` — tokens de cor, fonte (Inter, auto-hospedada via @fontsource), sombras e animações
- `src/components/ui.tsx` — Card, Badge, Button, PageHeader reutilizáveis
- `src/components/Sidebar.tsx`, `TypeEffect.tsx`
- Identidade laranja Athena Security preservada (#F08021), com variações de tom (`--color-athena-50/100/light/dark`)

## Estrutura
- `src/app/page.tsx` — tela de login (split laranja/branco, type effect, spinner de carregamento)
- `src/app/(portal)/` — telas internas com a sidebar expansível
- `src/lib/mock-data.ts` — clientes, contratos, alertas, perguntas, usuários

## Próximos passos (não implementados neste scaffold)
- Autenticação real (NextAuth/Azure AD) e controle de perfis (Admin/Usuário/Visualizador)
- Integração RD Station CRM e Power BI/Fabric com embed autenticado por usuário
- Motor de lógica condicional (branching) do questionário Account Planning
- Auto-save em banco de dados real + histórico/versionamento
- Cálculo de Score e ROI automáticos
