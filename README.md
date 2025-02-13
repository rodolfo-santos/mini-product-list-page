<img src="./docs/assets/banner.png" />

<br/>
<br/>

<p align="center">
  <a href="https://vuejs.org/">
    <img alt="Vue" src="https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vue.js&logoColor=4FC08D">
  </a>
  
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vite&color=646CFF&logo=Vite&logoColor=FFFFFF&label=">
  </a>
  
  <a href="https://pinia.vuejs.org/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Pinia&color=FFD450&logo=Pinia&logoColor=white&label=">
  </a>
  
  <a href="https://zilla.pages.dev/?path=/story/docs-getting-started-engineering-quick-start--page">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Zilla&color=3CBB60&logo=Zilla&logoColor=white&label=">
  </a>
  
  <a href="https://vitest.dev/">
  <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Vitest&color=6E9F18&logo=Vitest&logoColor=FFFFFF&label=">
  </a>
  
  <a href="https://www.typescriptlang.org/">
    <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  </a>
</p>

<p align="center">
  <a href="https://testing-library.com/">
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=TestingLibrary&color=EA3938&logo=TestingLibrary&logoColor=white&label=">
  </a>
  
  <a href="https://eslint.org/">
    <img alt="EsLint" src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
  </a>
  <a href="https://prettier.io/docs/en/options.html">
    <img alt="Prettier" src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
  </a>
</p>

<br/>
<br/>

# 🖥 CKT - Checkout Client

Como o próprio nome sugere, e a etapa final da jornada do usuário dentro do site, a etapa de pagamento.<br>
O Projeto desenvolvido é uma
ia do checkout acoplado no projeto **[k12-melhor-escola](https://github.com/quero-edu/k12-melhor-escola)**, onde este foi desenvolvido em [PHP](https://www.php.net/) com [Blade Templates](https://laravel.com/docs/8.x/blade).
O Objetivo do projeto é de desacoplar a aplicação para trazer mais escabilidade ao projeto e melhorar a conversão das vendas na etapa do checkout com um novo design.

<br/>

## 💡 Arquitetura do Projeto

<br/>

Projeto construído com [Vue 3](https://vuejs.org/), [Typescript](https://www.typescriptlang.org/) e [Vite](https://vitejs.dev/config/), usando [Composition API](https://vuejs.org/guide/extras/composition-api-faq.html) para componentes, [Pinia](https://pinia.vuejs.org/) para gerenciaomento de estado e MVVM como padrão de design.

<br/>

<div align="center">
  <img src="./docs/assets/project_structure.png" all="Estrutura do Projeto">
</div>

<br/>

A estrutura do projeto foi pensada para ser white-label e atender a múltiplas marcas. O diretório **core** inclui funcionalidades padrão para todas as marcas, enquanto **systems** inclui diferenças e especificidades de cada marca. Atualmente, há duas marcas: [Quero Bolsa](https://pagamento.querobolsa.com.br/766731/confirmacao-da-bolsa) e [Melhor Escola](https://pagamento.melhorescola.com.br/766731/confirmacao-da-bolsa). Novos componentes podem ser adicionados ao diretório **systems** da marca específica, enquanto novas features para todas as marcas serão adicionadas ao diretório **core**.
As pastas seguem padrões de uma aplicação VueJS:

- **assets**: Arquivos utilitários que sofrem constantes atualizações: `.css`, `.js`, `.ts`
- **components**: Componentes globais utilizados por todo o projeto que não se enquadram em nenhum system.
- **composables**: Grupo de funções e dados estáticos que são reutilizadas em todo o projeto.
- **layouts**: Organiza as estruturas que as páginas do sistema utilizam.
- **models**: Interfaces globais utilizadas por todo o projeto.
- **plugins**: Organiza arquivos scripts que devem ser executados antes da inicialização do projeto.
- **router**: Organiza as rotas da aplicação, recebendo também especificações de cada system.
- **services**: Organiza os serviços utilizados pela aplicação, conexão com backend, validações de terceiros.
- **store**: Organiza os Estados da aplicação.
- **tests**: Agrupamento dos testes da aplicação.
- **views**: Organiza as telas que o usuário final irá visualizar.
- **systems**: Organiza as marcas que terão seus temas e especificidades para a aplicação.
- **types**: Organiza as tipagens da aplicação.
  <br/>

<br/>

## 🏗️ Infraestrutura do Projeto

<br/>

A infraestrutura do projeto está no [infra-k12-checkout-client](https://github.com/quero-edu/infra-k12-checkout-client). A infra guia o build do projeto tanto em homolog quanto em produção. O deploy é feito através do [AWS Codebuild](https://aws.amazon.com/pt/codebuild/), disparado de maneira automática em cada mudança na branch main (para produção) e homolog (para testes e homologação).

<br/>

## 🌄 Ambientes

<br/>

O ambiente de produção, nos dos sistemas disponíveis, são:

- https://pagamento.melhorescola.com/:id-da-oferta
- https://pagamento.querobolsa.com/:id-da-oferta

A branch de produção é a [main](https://github.com/quero-edu/k12-checkout-client/tree/main).

<br/>

O ambiente de homologação:

- https://k12-checkout-client-homolog.quero.space/:id-da-oferta

A branch de homologação é a [homolog](https://github.com/quero-edu/k12-checkout-client/tree/homolog).

Para adicionar alterações em homolog, seguir o passo a passo:

Alterar sua branch para a de homolog:

```sh
git checkout homolog
```

Atualizar sua branch de homolog local com o repositório:

```sh
git pull
```

Incluir a branch com suas alterações na branch de homolog:

```sh
git reset --hard <branch_que_voce_quer_subir>
```

Enviar suas alterações para o repositório

```sh
git push --force
```

## 🚀 Como executar o projeto

### 🐳 Por Docker

Crie uma pasta K12 na sua máquina e clone os seguintes respositórios dentro dela:

- [k12-mars](https://github.com/quero-edu/k12-mars)
- [k12-melhor-escola](https://github.com/quero-edu/k12-melhor-escola)
- [k12-checkout-client](https://github.com/quero-edu/k12-checkout-client)

Acesse a pasta: k12-mars

```sh
cd k12-mars
```

Execute o comando:

```sh
docker-compose -f composes/checkout-client.yml up -d
```

<br/>

### ☕ Por Configuração

Instale o [NodeJS 16.17.0](https://nodejs.org/dist/v16.17.1/node-v16.17.1-linux-x64.tar.xz)

#### instale as dependências

```sh
npm install
```

#### Compilação e Hot Reload do projeto

```sh
npm run dev
```

#### Compilar e minificar arquivos para produção

```sh
npm run build
```

<br/>

## 🧪 Testes unitários com [Vitest](https://vitest.dev/)

### Execução

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

<br/>

## 💅 Lint com [ESLint](https://eslint.org/)

```sh
npm run lint
```

<br/>

## 💱 Fluxo de Trabalho

- [Code Review](./docs/01-code-review.md)
- [Git Flow](https://www.notion.so/quero/Padr-es-GitFlow-1bde09e7b0444ffb95f406858b4f4191)
- [Commit Guideline](https://www.notion.so/quero/Padr-es-GitFlow-1bde09e7b0444ffb95f406858b4f4191#a80e2f3041184e3e8b014e34347c8462)

<br/>

## 🔧 Extensões Recomendadas [VSCODE](https://code.visualstudio.com/)

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (e desabilite Vetur)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

<br/>

## 🔗 Links úteis

- [Issues no JIRA](https://quero.atlassian.net/issues/?jql=project%20%3D%20KTB%20AND%20component%20%3D%20CKT%20ORDER%20BY%20status%20ASC)
- [Design no Sketch](https://www.sketch.com/s/b51ddd66-af03-454a-b447-44b40f0d904b/a/VreRW2o)
- Documentação no Notion

<p align="center">
Feito com ❤️ por <a href="https://www.notion.so/quero/Squad-K12-91bcb24612494ceda9b3f3d274142851">Squad K12</a>
</p>
