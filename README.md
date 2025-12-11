Finance Dashboard – Modern Web App
Um dashboard financeiro moderno e interativo, inspirado na experiência visual de fintechs como Nubank e Revolut. Construído com React + Vite, estilizado com TailwindCSS + shadcn/ui, e projetado com foco em visual dark premium, animações suaves e gráficos dinâmicos.

✨ Visão Geral
Este projeto entrega um painel financeiro completo com:
Card de saldo com animação
Gráficos interativos de receitas e despesas
Lista de transações recentes
Quick Actions intuitivas
Páginas dedicadas a Cartões, Análise, Alertas e Perfil
Navegação simples e fluida
UI moderna, responsiva e minimalista

🎨 Design & UI

Tema: Dark elegante
Estética:
Glassmorphism em cards
Gradientes neon (verde positivo / coral despesas)
Ícones minimalistas
Feedback visual rápido
Animações microinterativas
Design inspirado em padrões de UX de fintechs globais

🖼️ Páginas
Dashboard

Saldo animado
Gráfico dinâmico de fluxo financeiro
Transações recentes
Ações rápidas

Cartões
Cartões do usuário com limite utilizado
Swipe moderno entre cartões
Indicadores de status

Análise
Gráfico de pizza por categorias
Gráfico de barras mensal
Insights com highlights automáticos

Alertas
Notificações de segurança e eventos financeiros
Filtros inteligentes
Status de leitura

Perfil
Configurações da conta
Preferências, temas e privacidade
Suporte

🧱 Stack Técnica

React 18 + Vite
TypeScript
TailwindCSS
shadcn/ui
Radix UI
Recharts / Victory / Chart.js (dependendo da configuração escolhida)
Lucide Icons

ESLint + Prettier configurados

📁 Estrutura Base do Projeto
/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── lib/
│   ├── context/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json

Adaptada conforme seu repositório: Vite + shadcn + Tailwind + TS.

🚀 Como Rodar
1. Instale as dependências
npm install

ou

bun install

2. Execute o servidor de desenvolvimento
npm run dev

3. Acesse no navegador
http://localhost:5173
