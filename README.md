# Plano8Semanas

Este projeto é um estudo de 8 semanas sobre as novas capacidades do Angular, com foco em Signals, arquitetura standalone, SSR e otimização de performance.

O objetivo é estudar 4 dias por semana e manter alguma atualização no projeto todos os dias. O repositório serve como um caderno de laboratório para registrar aprendizados e resultados práticos.

## Estrutura do plano

### Semana 1: A Revolução dos Signals (O Básico Avançado)

- Foco: Entender a mudança de paradigma do Change Detection reativo sem Zone.js.
- Sessão 1: Diferença conceitual entre Pull-based (RxJS) e Push-based (Signals). Leitura de WritableSignals, computed e effect. Entenda o Grafo de Dependências.
- Sessão 2: Criar um mini-dashboard onde o estado de múltiplos filtros interconectados é gerenciado exclusivamente por computed signals.
- Sessão 3: Analisar as regras dos effects: quando usar, quando não usar (evitar escrita de sinais dentro de effects) e como funciona o cleanup.
- Sessão 4: Escrever testes unitários para componentes baseados em Signals usando ComponentFixture.detectChanges() e testar os effects de forma isolada.

### Semana 2: Signals Avançado & Interoperabilidade com RxJS

- Foco: O mundo híbrido. Como fazer a ponte entre streams assíncronas e o estado síncrono dos Signals.
- Sessão 1: Estudo do pacote @angular/core/rxjs-interop. Deep dive em toSignal() (estratégias de requireSync e initialValue) e toObservable().
- Sessão 2: Criar um serviço de busca (Search-as-you-type) que usa RxJS para o debounce/switchMap da API, mas expõe o resultado final como um Signal para o template.
- Sessão 3: Refatorar os novos tipos de Inputs e Outputs: input(), input.required(), model() (two-way binding moderno) e viewChild() / contentChild().
- Sessão 4: Testar a integração RxJS + Signals. Como simular requisições HTTP assíncronas que alimentam Signals e garantir que o template atualize.

### Semana 3: Controle de Fluxo Moderno & Views Adiáveis (Deferrable Views)

- Foco: Adeus *ngIf e *ngFor. Olá performance nativa e Lazy Loading granular.
- Sessão 1: Estudo da nova sintaxe @if, @for (e a obrigatoriedade/performance do @track), @switch. Estudo detalhado dos gatilhos do @defer (on idle, on viewport, on hover, on timer).
- Sessão 2: Criar uma página longa (tipo feed de notícias) que utiliza @defer (on viewport) para carregar componentes pesados (ex: gráficos ou mapas) apenas quando o usuário rolar a tela até eles.
- Sessão 3: Investigar os blocos secundários do defer: @placeholder, @loading e @error. Como simular cenários de rede lenta para testar o esqueleto (skeleton screen) do app.
- Sessão 4: Validar a cobertura de testes. Como usar o deferBlock da API de testes do Angular (fixture.getDeferBlocks()) para forçar a renderização dos estados carregando/carregado no ambiente de testes.

### Semana 4: O Novo Motor de Injeção de Dependência (DI)

- Foco: Padrões de design avançados usando a função inject().
- Sessão 1: Entender a diferença entre a injeção via Construtor clássica e a função inject(). Estudo de contextos de injeção (InjectionContext) e escopos de Providers (EnvironmentProviders, root, platform).
- Sessão 2: Criar funções utilitárias reutilizáveis (Functional Composed Patterns). Exemplo: criar uma função useDestroy() ou useRouteParam() que encapsula lógica complexa sem precisar de herança de classes.
- Sessão 3: Estudo de patterns avançados: HttpInterceptor baseado em funções, Route Guards funcionais e o uso de InjectionToken para configurações dinâmicas de módulos reutilizáveis.
- Sessão 4: Como Mockar dependências injetadas via inject() nos testes unitários usando o TestBed.overrideProvider ou criando ambientes customizados com runInInjectionContext.

### Semana 5: SSR Renovado (Server-Side Rendering) & SSG

- Foco: Arquitetura para SEO, performance e Core Web Vitals.
- Sessão 1: O novo ecossistema do Angular SSR (antigo Universal integrado ao CLI). Entender o ciclo de vida da renderização no servidor. Configuração do server.ts e estratégias de rotas pré-renderizadas (SSG vs SSR).
- Sessão 2: Configurar um projeto do zero com SSR habilitado. Criar rotas dinâmicas que buscam dados de uma API externa no momento da renderização do servidor.
- Sessão 3: Identificar e resolver problemas comuns de SSR: uso indevido de objetos globais do browser (window, document, localStorage). Aprender a usar as funções utilitárias isPlatformBrowser e isPlatformServer.
- Sessão 4: Configurar testes para serviços que dependem da plataforma, garantindo que o comportamento seja seguro tanto no servidor quanto no cliente.

### Semana 6: Hydration Profunda e Otimização de Performance

- Foco: Evitar o efeito "pisca-pisca" (flickering) na inicialização do app.
- Sessão 1: Estudo do conceito de Client-Side Hydration (Non-destructive Hydration). Como o Angular reaproveita o DOM gerado pelo servidor em vez de destruí-lo e recriá-lo.
- Sessão 2: Analisar os erros mais comuns de Hydration (Mismatch Errors). Provocar um erro propositalmente alterando o DOM via JavaScript puro fora do Angular e entender como ler o console para corrigi-lo.
- Sessão 3: Implementar técnicas avançadas de otimização de imagem usando a diretiva NgOptimizedImage integrada com SSR para garantir notas altas no Lighthouse (LCP/CLS).
- Sessão 4: Medir a performance. Usar o Profile do Chrome DevTools para rastrear o tempo de boot e execução da hidratação do seu mini-app.

### Semana 7: Arquitetura Corporativa e Monorepos (Nx / Standalone)

- Foco: Escalar aplicações sem criar um "monstro de espaguete".
- Sessão 1: Padrões de arquitetura moderna: Aplicações 100% Standalone (sem NgModule). Padrão de design DDD (Domain-Driven Design) aplicado a diretórios do Angular.
- Sessão 2: Criar a estrutura conceitual de um monorepo (usando Nx ou os sub-projetos do próprio Angular CLI). Dividir o app em bibliotecas de escopo claras: feature, ui, data-access, e util.
- Sessão 3: Configurar rotas com Lazy Loading avançado usando loadComponent e loadChildren apontando para rotas standalone. Implementar estratégias de Preloading customizadas.
- Sessão 4: Escrever testes de integração arquitetural (se estiver usando Nx, explorar o eslint-plugin-nx para garantir que uma biblioteca de ui nunca importe diretamente uma de data-access).

### Semana 8: Gerenciamento de Estado Sênior & Revisão Final

- Foco: Decidir quando usar o quê e consolidação para certificações.
- Sessão 1: State Management na era moderna: Comparativo prático entre Signals nativos (para estado local/médio) vs NgRx SignalStore / Akita / NgXs (para estados globais complexos).
- Sessão 2: Implementar uma Store de estado global leve usando o novo @ngrx/signals (ComponentStore moderno baseado em Signals), criando um fluxo completo de CRUD.
- Sessão 3: Simular cenários reais de tomada de decisão arquitetural: desenhar em um quadro/ferramenta visual a arquitetura de um sistema fictício e defender as escolhas tecnológicas (Ex: "Aqui usamos SSR por causa de SEO, ali usamos Deferrable Views por conta do peso do bundle").
- Sessão 4: Simulado e Checklist Final. Revisar os tópicos das certificações (como a da Angular Architects ou Angular Training), garantir que seu repositório de laboratório no GitHub esteja limpo e documentado.

## Como usar este repositório

- Atualize o projeto diariamente com algo novo.
- Documente cada sessão no componente home, para manter um diário.
- Use a rotina de 4 dias por semana para manter consistência sem sobrecarregar.

## Comandos úteis

```bash
ng serve
```

```bash
ng test
```

```bash
ng build
```
