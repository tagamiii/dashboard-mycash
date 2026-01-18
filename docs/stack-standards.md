# Stack Standards & Referências

Este documento define os padrões de uso para as tecnologias principais do projeto.
Eu (Antigravity) já conheço a documentação oficial, mas seguirei **estas diretrizes específicas** para manter consistência.

## ⚛️ React + TypeScript
**Documentação:** [react.dev](https://react.dev)

### Padrões Obrigatórios
- **Functional Components:** Sempre use componentes funcionais.
- **Hooks:** Priorize hooks para lógica de estado e efeitos.
- **Tipagem:**
  - Sempre tipar `props` explicitamente.
  - Evite `any`. Use `unknown` se necessário uma tipagem genérica.
  - Use `React.ReactNode` para children.
- **Estrutura:**
  - Componentes burros (UI) vs Componentes inteligentes (Lógica/Data fetching).
  - Nomeclatura PascalCase para arquivos de componentes (`Button.tsx`).

## 🌬️ Tailwind CSS
**Documentação:** [tailwindcss.com](https://tailwindcss.com/docs)

### Padrões Obrigatórios
- **Utility-First:** Evite criar classes CSS customizadas (`.btn`). Use utilitários (`p-4`, `bg-blue-500`).
- **Semântica:** Use as variáveis do Design System (definidas em `PROJECT_RULES.md`) sempre que possível.
- **Ordenação:** Tente manter uma ordem lógica (Layout -> Box Model -> Typography -> Visual -> Misc) ou use o plugin prettier se configurado.
- **Condicionais:** Use bibliotecas como `clsx` ou `tailwind-merge` para classes dinâmicas. NUNCA faça concatenação de strings manual complexa.

## ⚡ Vite
**Documentação:** [vitejs.dev](https://vitejs.dev/guide/)

### Padrões Obrigatórios
- **Assets:** Imagens estáticas devem ficar em `public/` se referenciadas via string, ou importadas em `src/assets/` se processadas pelo bundler.
- **Env Vars:** Use `import.meta.env.VITE_...` para variáveis de ambiente.

## 🔥 Supabase
**Documentação:** [supabase.com/docs](https://supabase.com/docs)

### Padrões Obrigatórios
- **Client:** Use apenas UMA instância do `supabaseClient` (singleton) em toda a aplicação.
- **Tipagem:**
  - **CRÍTICO:** Nunca tipar retornos do Supabase manualmente.
  - Use os tipos gerados automaticamente pelo Supabase CLI (`Database` definitions).
- **Auth:** Use o hook `onAuthStateChange` para gerenciar sessões.
- **RLS:** Toda lógica de segurança deve residir no banco (Row Level Security), não no frontend.

## 📦 Gerenciamento de Estado
- **Server State:** React Query (TanStack Query) é preferível para dados vindos do backend (Supabase).
- **Client State:** Context API para estados globais simples (ex: Tema, Auth).
- **Zustand:** Se a complexidade aumentar, usar Zustand. Evitar Redux.
