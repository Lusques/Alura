src/
├── app/
│   ├── core/              # Serviços globais, guardas, interceptadores, layouts principais
│   │   ├── guards/
│   │   ├── interceptors/
│   │   ├── services/
│   │   ├── models/        # Interfaces e tipos globais
│   │   ├── constants/
│   │   └── core.module.ts # Módulo singleton
│
│   ├── shared/            # Componentes, pipes e directives reutilizáveis
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   ├── shared.module.ts
│   │   └── utils/
│
│   ├── features/          # Módulos por funcionalidade
│   │   ├── dashboard/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── dashboard.module.ts
│   │   ├── user/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── user.module.ts
│   │   └── ...
│
│   ├── app-routing.module.ts
│   └── app.module.ts
│
├── assets/                # Imagens, fontes e arquivos estáticos
│
├── environments/          # environment.ts e environment.prod.ts
│
├── styles/                # SCSS/CSS globais
│
└── main.ts
