# 📂 Estrutura do Projeto

\`\`\`
marketing-fund-app/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Pipeline de build e lint
│       └── codeql.yml                # Scan de segurança
│
├── docs/
│   ├── ARCHITECTURE.md               # Arquitetura técnica
│   ├── COMPONENTS.md                 # Inventário de componentes
│   ├── PROJECT_STRUCTURE.md          # Este arquivo
│   └── CONTRIBUTING.md               # Guia de contribuição
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── api/
│   │   ├── models/                   # Tipos TypeScript das entidades
│   │   │   ├── Fund.ts
│   │   │   ├── Campaign.ts
│   │   │   ├── Expense.ts
│   │   │   └── User.ts
│   │   └── services/                 # Camada de acesso a dados
│   │       ├── fundService.ts
│   │       ├── campaignService.ts
│   │       ├── expenseService.ts
│   │       └── userService.ts
│   │
│   ├── components/
│   │   ├── ui/                       # Componentes Shadcn base
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/                   # Layout components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── PageContainer.tsx
│   │   └── custom/                   # Componentes específicos do domínio
│   │       ├── FundCard.tsx
│   │       ├── ExpenseForm.tsx
│   │       └── ApprovalQueue.tsx
│   │
│   ├── hooks/                        # Hooks customizados
│   │   ├── useFunds.ts
│   │   ├── useCampaigns.ts
│   │   └── useExpenses.ts
│   │
│   ├── lib/                          # Utilitários
│   │   ├── utils.ts
│   │   ├── formatters.ts             # Formatação moeda, data, etc
│   │   └── validators.ts
│   │
│   ├── pages/                        # Páginas/rotas
│   │   ├── index.tsx                 # Dashboard
│   │   ├── funds.tsx
│   │   ├── campaigns.tsx
│   │   ├── expenses.tsx
│   │   ├── approvals.tsx
│   │   ├── reports.tsx
│   │   └── settings.tsx
│   │
│   ├── App.tsx                       # Configuração de rotas
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Estilos globais e tema
│
├── .gitignore
├── index.html
├── LICENSE
├── package.json
├── README.md
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
\`\`\`

## 📁 Convenções de Nomenclatura

- **Componentes:** PascalCase (`FundCard.tsx`)
- **Hooks:** camelCase com prefixo `use` (`useFunds.ts`)
- **Utilitários:** camelCase (`formatters.ts`)
- **Páginas:** lowercase (`funds.tsx`)
- **Tipos/Interfaces:** PascalCase (`Fund.ts`)

## 🎯 Princípios de Organização

1. **Separação por responsabilidade** — UI, lógica, dados em camadas distintas
2. **Co-localização** — componentes pequenos próximos de onde são usados
3. **Imports absolutos** — usar `@/` em vez de paths relativos longos
4. **Um componente por arquivo** — exceto pequenos auxiliares
