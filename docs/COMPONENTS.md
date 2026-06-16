# 🧩 Componentes e Telas

## 📱 Telas Sugeridas

### 1. Dashboard (Home)
**Rota:** `/`
**Propósito:** Visão geral do fundo de marketing
- Cards com KPIs (saldo total, gastos do mês, campanhas ativas)
- Gráfico de evolução de gastos
- Lista de despesas pendentes de aprovação
- Atalhos rápidos para principais ações

### 2. Fundos
**Rota:** `/funds`
**Propósito:** Gestão dos fundos disponíveis
- Lista de fundos com saldo
- Criar/editar fundo
- Histórico de movimentações

### 3. Campanhas
**Rota:** `/campaigns`
**Propósito:** Gestão de campanhas de marketing
- Lista filtrada por status
- Criar nova campanha
- Detalhes da campanha (orçamento vs realizado)
- Linha do tempo de despesas

### 4. Despesas
**Rota:** `/expenses`
**Propósito:** Solicitação e acompanhamento
- Formulário de nova despesa
- Lista pessoal de despesas
- Upload de comprovante
- Filtros por status/período

### 5. Aprovações
**Rota:** `/approvals`
**Propósito:** Fluxo de aprovação para gestores
- Fila de itens pendentes
- Detalhes da despesa com comprovante
- Botões de aprovar/rejeitar com comentário
- Histórico de aprovações

### 6. Relatórios
**Rota:** `/reports`
**Propósito:** Análises e exportações
- Gráficos por categoria, período, campanha
- Exportação para Excel/PDF
- Filtros avançados

### 7. Configurações
**Rota:** `/settings`
**Propósito:** Administração do sistema
- Gestão de usuários e papéis
- Categorias de despesa
- Regras de aprovação

## 🎨 Componentes UI Disponíveis (Shadcn)

### Layout & Navegação
- `Sidebar` — navegação lateral
- `Sheet` — painéis deslizantes
- `Tabs` — abas
- `Breadcrumb` — navegação hierárquica

### Formulários
- `Input`, `Textarea`, `Select`
- `Checkbox`, `Radio Group`, `Switch`
- `DatePicker`, `Calendar`
- `Form` (com validação)

### Feedback
- `Toast` — notificações
- `Alert`, `AlertDialog`
- `Progress`, `Skeleton` — loading states
- `Tooltip`, `HoverCard`

### Dados
- `Table` — listagens com sorting/filtering
- `Card` — agrupamento de informações
- `Badge` — indicadores de status
- `Avatar` — usuários

### Ações
- `Button` (variantes: default, secondary, destructive, ghost, outline)
- `DropdownMenu` — menus contextuais
- `Dialog` — modais
- `Popover` — popovers

## 📦 Componentes Customizados Sugeridos

- `<FundCard />` — card resumido de um fundo
- `<CampaignTimeline />` — linha do tempo de campanha
- `<ExpenseForm />` — formulário de despesa
- `<ApprovalQueue />` — fila de aprovações
- `<KPIWidget />` — widget de indicador
- `<ExpenseChart />` — gráfico D3 de despesas
