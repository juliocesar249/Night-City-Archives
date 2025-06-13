
# Arquivos de Night City (Night City Archives)

Bem-vindo(a) aos Arquivos de Night City! Esta é uma aplicação web interativa construída para explorar a rica e complexa lore do universo Cyberpunk, com foco especial na icônica Night City. Mergulhe nos detalhes da história da cidade, seus perigosos distritos, as infames gangues que os controlam, as onipotentes megacorporações que ditam as regras e as figuras notáveis que moldaram seu destino.

## Sobre o Projeto

Este projeto serve como um compêndio digital, oferecendo:

*   **História Detalhada:** Uma cronologia dos eventos que formaram Night City.
*   **Exploração de Distritos:** Informações sobre cada distrito, suas características, subdistritos, facções dominantes e corporações presentes, complementadas por um **mapa SVG interativo**.
*   **Dossiês de Gangues:** Perfis das principais gangues, suas ideologias, territórios e práticas.
*   **Perfis Corporativos:** Análises das megacorporações que exercem poder sobre a cidade, incluindo um ticker de notícias corporativas simulado.
*   **Figuras Notáveis:** Biografias das personalidades mais influentes de Night City.
*   **Terminal de Inteligência:** Uma seção dinâmica que utiliza IA (via Genkit) para gerar:
    *   Fragmentos de lore ("Data Shards").
    *   Quizzes sobre o universo de Night City.
    *   Notícias fictícias da "N54 News Flash".
    *   Boatos e sussurros das ruas.

## Tecnologias Utilizadas

*   **Framework:** Next.js (com App Router)
*   **Linguagem:** TypeScript
*   **Estilização:** Tailwind CSS
*   **Componentes UI:** ShadCN UI
*   **Funcionalidades de IA:** Genkit (com Google AI - Gemini)
*   **Conteúdo Principal da Lore:** Markdown (`night-city.md`)

## Pré-requisitos

Para executar este projeto localmente, você precisará ter instalado:

*   [Node.js](https://nodejs.org/) (versão LTS recomendada, ex: 18.x, 20.x)
*   [npm](https://www.npmjs.com/) (geralmente vem com o Node.js) ou [yarn](https://yarnpkg.com/)

## Configuração do Ambiente

1.  **Clone o repositório (se aplicável):**
    Se você obteve o código como um arquivo ZIP, extraia-o. Se for um repositório git:
    ```bash
    git clone <url-do-repositorio>
    cd <pasta-do-projeto>
    ```

2.  **Instale as dependências:**
    Abra um terminal na pasta raiz do projeto e execute:
    ```bash
    npm install
    ```
    ou, se você usa yarn:
    ```bash
    yarn install
    ```

3.  **Configure as Variáveis de Ambiente (Chave de API do Google AI):**
    As funcionalidades de Inteligência Artificial (Genkit) requerem uma chave de API do Google AI (para o modelo Gemini).

    *   Crie um arquivo chamado `.env.local` na raiz do seu projeto.
    *   Adicione a seguinte linha ao arquivo `.env.local`, substituindo `SUA_CHAVE_API_AQUI` pela sua chave de API real:
        ```
        GOOGLE_API_KEY=SUA_CHAVE_API_AQUI
        ```
    *   **Importante:** Certifique-se de que o modelo `gemini-2.0-flash` (ou o modelo especificado em `src/ai/genkit.ts`) esteja habilitado para a sua chave de API no Google AI Studio.

## Como Executar o Projeto

Para que todas as funcionalidades da aplicação funcionem corretamente, você precisará executar dois processos simultaneamente em terminais separados: o servidor de desenvolvimento Next.js e o servidor de desenvolvimento Genkit.

1.  **Execute a Aplicação Next.js (Frontend):**
    Em um terminal, na raiz do projeto, rode:
    ```bash
    npm run dev
    ```
    ou
    ```bash
    yarn dev
    ```
    A aplicação estará disponível em [http://localhost:9002](http://localhost:9002) (conforme configurado em `package.json`).

2.  **Execute o Servidor Genkit (Backend de IA):**
    Em **outro** terminal, também na raiz do projeto, rode:
    ```bash
    npm run genkit:dev
    ```
    ou, para que o Genkit recarregue automaticamente ao modificar os flows:
    ```bash
    npm run genkit:watch
    ```
    Este comando iniciará os serviços do Genkit. A aplicação Next.js se comunicará com esses serviços para as funcionalidades de IA. O Genkit também pode expor uma UI de inspeção (geralmente em `http://localhost:4000`), útil para desenvolvimento e depuração dos flows.

Com ambos os servidores rodando, você poderá acessar todas as seções e funcionalidades dos Arquivos de Night City.

## Estrutura do Projeto (Visão Geral)

*   `src/app/`: Contém as páginas da aplicação (rotas do Next.js App Router).
*   `src/components/`: Componentes React reutilizáveis (incluindo UI da ShadCN).
    *   `src/components/map/`: Componentes específicos do mapa interativo.
*   `src/lib/content/`: Arquivos TypeScript que estruturam e fornecem o conteúdo textual sobre distritos, gangues, corporações e figuras.
*   `src/ai/`: Configuração e flows do Genkit.
    *   `src/ai/flows/`: Implementações dos flows de IA (lore, quiz, notícias, boatos).
*   `night-city.md`: O arquivo Markdown principal contendo a maior parte da lore bruta utilizada pelos flows de IA.
*   `public/`: Arquivos estáticos (embora o mapa SVG agora esteja como componente React).

---

Mergulhe nos Arquivos de Night City e lembre-se, choomba: a informação é poder!
