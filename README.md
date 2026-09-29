# 🌿 ONG Mãos Solidárias — Plataforma Web Institucional (SPA)

> Aplicação web institucional no formato **Single Page Application (SPA)** desenvolvida para a organização sem fins lucrativos **ONG Mãos Solidárias**, promovendo divulgação de ações comunitárias, engajamento e captação de voluntários.

[![Release](https://img.shields.io/badge/release-v1.0.0-1b5e20.svg)](#controlo-de-versões-e-convenções-git)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 📌 Sobre o Projeto e Funcionalidades

A plataforma tem como objetivo oferecer uma presença digital profissional, acessível e dinâmica para a ONG, permitindo conectar a comunidade aos projetos assistenciais sem a necessidade de recargas de página na navegação.

### Principais Recursos
* **Arquitetura SPA com Roteamento Hash:** Navegação instantânea (`#/`, `#/projetos`, `#/cadastro`) gerenciada programaticamente no contêiner mestre (`#app`).
* **Design Responsivo e Design System:** Layout fluido estruturado em Grid de 12 colunas e Flexbox, integrado a variáveis CSS personalizadas (cores temáticas, espaçamentos e tipografia).
* **Renderização Declarativa de Templates:** Geração de cartões modulares e dinâmicos de projetos via Template Literals com métodos de iteração funcional (`.map()` e `.join('')`).
* **Event Delegation:** Escuta otimizada de eventos no DOM no contêiner ancestral estável para elementos gerados dinamicamente.
* **Validação Preventiva com RegEx:** Checagem sintática em tempo real (`input`/`blur`) e no ato de envio (`submit`) com feedback visual imediato de conformidade (`is-valid` / `is-invalid`).
* **Persistência Local (LocalStorage):** Gravação e recuperação de inscrições de voluntários usando `JSON.stringify()` e `JSON.parse()`.
* **Notificações Assíncronas Acessíveis:** Substituição de caixas de diálogo síncronas bloqueantes por modais estilizados via biblioteca externa SweetAlert2.

---

## 🛠️ Tecnologias e Dependências

A aplicação foi construída priorizando padrões web nativos e alto desempenho:

* **HTML5 Semântico:** Estruturação orientada a acessibilidade (WCAG 2.1), tags semânticas (`<header>`, `<main>`, `<nav>`, `<article>`, `<address>`) e formulários semânticos.
* **CSS3:** Folha de estilos centralizada com CSS Custom Properties, layout híbrido (Grid Layout de 12 colunas e Flexbox) e animações leves com aceleração gráfica.
* **Vanilla JavaScript (ES6+):** Código estruturado e modularizado com **ES6 Modules** (`import` / `export`), sem dependência de frameworks monolíticos.
* **Web Storage API:** Persistência em `localStorage` para base de dados local de cadastros e `sessionStorage` para preservação do fluxo entre telas.
* **SweetAlert2 (v11):** Biblioteca integrada via CDN para modais e alertas assíncronos não-bloqueantes.

---

## 📂 Estrutura de Arquivos

```text
├── index.html                  # Documento principal da SPA
├── cadastro.html               # Fallback semântico complementar
├── README.md                   # Documentação técnica do projeto
└── assets/
    ├── css/
    │   └── style.css           # Design System, Grid 12 colunas e estilos globais
    ├── imagens/                # Ativos visuais, ícones e logotipo institucional
    └── js/
        ├── main.js             # Orquestrador central e inicializador de eventos
        └── modules/
            ├── router.js       # Roteamento baseado em location.hash
            ├── storage.js      # Camada de manipulação do localStorage
            ├── templates.js    # Funções puras geradoras de templates HTML
            └── validation.js   # Regras com RegEx e manipulação visual de erros
🚀 Instalação, Execução Local e Deploy
Por utilizar ES6 Modules (type="module"), os arquivos JavaScript exigem execução sob o protocolo http:// ou https:// para evitar bloqueios de segurança por política de CORS causados pelo protocolo file:///.

Pré-requisitos
Git instalado na máquina.

Navegador moderno (Google Chrome, Firefox, Safari ou Edge).

Python 3 instalado OU editor VS Code com a extensão Live Server.

Passo a Passo
Clonar o repositório:

Bash
git clone [https://github.com/maurilei/Desenvolvimento_Front-End_Para_Web-Turma_001_NE.git](https://github.com/maurilei/Desenvolvimento_Front-End_Para_Web-Turma_001_NE.git)
Acessar a pasta do projeto:

Bash
cd Desenvolvimento_Front-End_Para_Web-Turma_001_NE
Iniciar um servidor HTTP local:

Opção A: Usando Python 3 (Terminal):

Bash
python3 -m http.server 8000
Acesse no navegador: http://localhost:8000

Opção B: Usando VS Code (Live Server):
Abra a pasta no VS Code, clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

🌿 Controlo de Versões e Convenções Git
O repositório adota um fluxo de trabalho estruturado com base no GitFlow e nas seguintes convenções:

Padrão de Branches:

main: Ramo estável com código homologado e testado para produção.

develop: Ramo contínuo de integração e desenvolvimento.

feature/*: Ramos dedicados ao desenvolvimento de funcionalidades pontuais antes da mesclagem via Pull Request.

Conventional Commits: Todas as alterações seguem padronização clara:

feat: Novas implementações de funcionalidades.

fix: Correções de bugs ou falhas de layout.

release: Consolidação de versões estáveis para homologação.

Versionamento Semântico (SemVer): A versão de entrega estável está fixada e identificada pela tag anotada:

Bash
git tag -a v1.0.0 -m "Release v1.0.0 - Versao inicial estavel da ONG Maos Solidarias"
📄 Licença
Este projeto é de caráter educacional e prático para fins de impacto social, licenciado sob a licença MIT.