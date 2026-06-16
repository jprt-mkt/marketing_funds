# 🏗️ Arquitetura do Sistema

## Visão Geral

Aplicação SPA (Single Page Application) construída em React seguindo arquitetura em camadas, com separação clara entre apresentação, lógica de negócio e dados.

## 📐 Camadas da Aplicação

\`\`\`
┌─────────────────────────────────────────┐
│         Camada de Apresentação          │
│  (Pages, Components, UI Shadcn)         │
├─────────────────────────────────────────┤
│         Camada de Estado                │
│  (React Query, Hooks customizados)      │
├─────────────────────────────────────────┤
│         Camada de Serviços              │
│  (API Services, Models)                 │
├─────────────────────────────────────────┤
│         Camada de Dados                 │
│  (SharePoint Lists / API Backend)       │
└─────────────────────────────────────────┘
\`\`\`

## 🗄️ Modelo de Dados Sugerido

### Entidades Principais

**Fundos (Funds)**
- ID, Nome, Descrição, Valor Total, Saldo Disponível, Status, Data Criação

**Campanhas (Campaigns)**
- ID, Nome, FundoID (FK), Orçamento, Gasto, Status, Data Início, Data Fim, Responsável

**Despesas (Expenses)**
- ID, CampanhaID (FK), Descrição, Valor, Categoria, Data, Comprovante, Status Aprovação

**Aprovações (Approvals)**
- ID, DespesaID (FK), Aprovador, Status, Comentário, Data

**Usuários (Users)**
- ID, Nome, Email, Papel (Admin/Aprovador/Solicitante), Departamento

## 🔄 Fluxos Principais

### Fluxo de Solicitação de Despesa
1. Usuário cria nova despesa vinculada a uma campanha
2. Sistema valida saldo do fundo
3. Despesa entra em status "Pendente"
4. Aprovador recebe notificação
5. Aprovação/Rejeição atualiza saldo do fundo
6. Solicitante recebe feedback

### Fluxo de Criação de Campanha
1. Admin seleciona fundo de origem
2. Define orçamento e período
3. Atribui responsável
4. Campanha fica ativa para receber despesas

## 🔐 Segurança

- Autenticação via Azure AD (quando integrado ao M365)
- Controle de acesso baseado em papéis (RBAC)
- Auditoria de todas as transações financeiras
- Validação de saldo antes de aprovações

## 🌐 Integrações Sugeridas

- **SharePoint Lists** — armazenamento de dados
- **Power Automate** — automação de aprovações e notificações
- **Outlook** — notificações por e-mail
- **Teams** — notificações de aprovação
- **Power BI** — dashboards analíticos
