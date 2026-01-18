# mycash+ — Documentação do Projeto

## 📋 Visão Geral
Sistema de dashboard financeiro pessoal focado em mobile-first, estética premium e gerenciamento de estado em memória (sessão).

## ⚠️ Regras Críticas
1. **Armazenamento**: PROIBIDO uso de localStorage/sessionStorage. Estado apenas em memória (React Context).
2. **Responsividade**: Mobile-First. Breakpoints apenas expandem o layout.
   - Mobile: <1024px (Header Mobile + Drawer)
   - Desktop: ≥1024px (Sidebar Lateral)
3. **Estilo**: TailwindCSS + Variáveis do Figma. Sem estilos ad-hoc.
4. **Navegação**: Single Page Application (SPA) sem reload.

## 🗺️ Roadmap de Implementação

### Fase 1: Fundação 🏗️
- [x] **PROMPT 1: Estrutura Base e Configuração**
  - [x] Arquitetura de pastas (domain-driven: components, contexts, hooks, types, utils)
  - [x] Configuração Tailwind com tokens Figma (cores, fontes, espaçamentos)
  - [x] Definição de Tipos TypeScript (Transaction, Goal, CreditCard, BankAccount, FamilyMember)
  - [x] Configuração de Rotas (React Router)

### Fase 2: Layout e Navegação 🧭
- [ ] **PROMPT 2: Layout Desktop (Sidebar)**
  - Sidebar expansível/colapsável, Tooltips, interação suave.
- [ ] **PROMPT 3: Layout Mobile (Header)**
  - Header fixo, Avatar trigger, Menu Dropdown animado.

### Fase 3: Core Logic 🧠
- [ ] **PROMPT 4: Context Global (State)**
  - `FinanceProvider`: CRUDs em memória.
  - Filtros Globais: `member`, `dateRange`, `type`, `search`.
  - Hooks derivados: `calculateTotalBalance`, `getFilteredTransactions`, etc.

### Fase 4: Dashboard Widgets 📊
- [ ] **PROMPT 5: Cards de Resumo** (Saldo Total com destaque, Receitas, Despesas)
- [ ] **PROMPT 6: Header com Controles** (Busca real-time, Filtro Popover, DatePicker, Seletor Membros)
- [ ] **PROMPT 7: Carrossel de Categorias** (Donut Charts scrolláveis)
- [ ] **PROMPT 8: Gráfico de Fluxo** (Area Chart: Receitas vs Despesas)
- [ ] **PROMPT 9: Widget Cartões** (Visualização de limite e fatura)
- [ ] **PROMPT 10: Widget Próximas Despesas** (Contas a pagar cronológicas)
- [ ] **PROMPT 11: Tabela de Transações Dashboard** (Extrato resumido, paginação, filtros locais)

### Fase 5: Modais e Formulários 📝
- [ ] **PROMPT 12: Modal Nova Transação** (Receita/Despesa, Validações, Parcelamento)
- [ ] **PROMPT 13: Modal Adicionar Membro** (Avatar, Função, Renda)
- [ ] **PROMPT 14: Modal Conta/Cartão** (Cadastro de bancos e cartões)
- [ ] **PROMPT 15: Modal Detalhes do Cartão** (Fatura detalhada e despesas vinculadas)
- [ ] **PROMPT 16: Modal Filtros Mobile** (UX otimizada para touch)

### Fase 6: Views Detalhadas 📱
- [ ] **PROMPT 17: View Cartões Completa** (Grid responsivo, detalhes avançados)
- [ ] **PROMPT 18: View Transações Completa** (Busca avançada, Exportação, Ordenação)
- [ ] **PROMPT 19: View Perfil (Informações)** (Gestão de membros e dados pessoais)
- [ ] **PROMPT 20: View Perfil (Configurações)** (Preferências, Categorias, Notificações)

### Fase 7: Polimento e Qualidade ✨
- [ ] **PROMPT 21: Animações Globais** (Micro-interações, Framer Motion/CSS Transitions)
- [ ] **PROMPT 22: Utilitários e Formatadores** (Moeda BRL, Datas, Validadores)
- [ ] **PROMPT 23: Revisão de Responsividade** (Ajuste fino de breakpoints 375px -> 1920px)
- [ ] **PROMPT 24: Testes e QA Final** (Validação de fluxos, Edge cases, Acessibilidade)

---
## ℹ️ Status do Projeto
- **Análise Inicial**: ✅ Concluída
- **Implementação**: ⏳ Aguardando início da Fase 1
