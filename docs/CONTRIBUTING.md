# 🤝 Guia de Contribuição

## 📋 Padrões de Código

### TypeScript
- Use tipos explícitos sempre que possível
- Evite `any` — use `unknown` quando necessário
- Prefira `interface` para objetos, `type` para unions/intersections

### React
- Componentes funcionais com hooks
- Props tipadas com interface
- Evite re-renders desnecessários (use `memo`, `useMemo`, `useCallback` com critério)

### Estilo
- Tailwind CSS para estilização
- Use variáveis CSS do tema (não hardcode cores)
- Componentes Shadcn como base — customize via props

## 🌿 Fluxo de Branches

\`\`\`
main          ← produção
  └─ develop  ← integração
       ├─ feature/nome-da-feature
       ├─ fix/descricao-do-bug
       └─ docs/atualizacao-doc
\`\`\`

## 📝 Conventional Commits

Use o padrão:

\`\`\`
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
\`\`\`

### Tipos aceitos:
- `feat` — nova funcionalidade
- `fix` — correção de bug
- `docs` — apenas documentação
- `style` — formatação, sem mudança de código
- `refactor` — refatoração sem mudança de comportamento
- `test` — adição/correção de testes
- `chore` — tarefas de manutenção

### Exemplos:
\`\`\`
feat(expenses): adiciona upload de comprovante
fix(approvals): corrige cálculo de saldo após rejeição
docs(readme): atualiza instruções de instalação
\`\`\`

## 🔀 Fluxo de Pull Request

1. **Crie branch** a partir de `develop`
2. **Desenvolva** sua feature/fix
3. **Commit** seguindo Conventional Commits
4. **Push** para o remoto
5. **Abra PR** para `develop`
6. **Descrição do PR** deve conter:
   - O que mudou
   - Por que mudou
   - Como testar
   - Screenshots (se aplicável)
7. **Aguarde review** (mínimo 1 aprovação)
8. **Merge** após CI passar e aprovação

## ✅ Checklist antes do PR

- [ ] Código compila sem erros (`bun run build`)
- [ ] Linter passa (`bun run lint`)
- [ ] Funcionalidade testada manualmente
- [ ] Documentação atualizada (se aplicável)
- [ ] Sem `console.log` ou código comentado
- [ ] Imports organizados

## 🐛 Reportando Bugs

Abra uma **Issue** com:
- Descrição clara do problema
- Passos para reproduzir
- Comportamento esperado vs atual
- Screenshots/vídeos
- Ambiente (browser, OS)

## 💡 Sugerindo Features

Abra uma **Issue** com label `enhancement`:
- Problema que resolve
- Solução proposta
- Alternativas consideradas
- Mockups/exemplos (se houver)
