<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Projeto MVC com Node.js e Express</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f9f9f9;
        }
        h1, h2, h3 {
            color: #333;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
            font-family: 'Courier New', Courier, monospace;
        }
        .code-block {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ddd;
        }
        ul {
            list-style-type: disc;
            margin: 0;
            padding: 0 0 0 20px;
        }
    </style>
</head>
<body>
    <h1>🛒 Projeto de Loja Virtual com Arquitetura MVC</h1>
    <p>Este projeto foi desenvolvido durante uma monitoria no curso <strong>Programadores do Amanhã</strong> para praticar a construção de uma aplicação utilizando a arquitetura MVC (Model-View-Controller) com Node.js e Express.</p>
    <h2>📋 Visão Geral</h2>
    <p>A aplicação simula uma loja virtual que oferece um conjunto de produtos. Utilizamos o padrão MVC para organizar a estrutura do projeto, permitindo uma clara separação de responsabilidades.</p>
    <h2>🚀 Funcionalidades</h2>
    <ul>
        <li>📄 <strong>Listar Produtos:</strong> Endpoint para listar todos os produtos disponíveis.</li>
        <li>🔍 <strong>Detalhar Produto:</strong> Endpoint para obter detalhes de um produto específico baseado em seu link.</li>
    </ul>
    <h2>🛠️ Tecnologias Utilizadas</h2>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a> - Ambiente de execução JavaScript no servidor.</li>
        <li><a href="https://expressjs.com/">Express.js</a> - Framework web para Node.js.</li>
        <li><a href="https://www.npmjs.com/package/uuid">UUID</a> - Biblioteca para geração de identificadores únicos.</li>
    </ul>
    <h2>📂 Estrutura do Projeto</h2>
    <pre>
        project-root/
        │
        ├── src/
        │   ├── controller/
        │   │   └── products.controller.js  # Lógica de negócios e manipulação dos produtos
        │   ├── model/
        │   │   └── product.model.js        # Modelo de dados do produto
        │   └── routes/
        │       └── products.routes.js      # Definição das rotas da APIseu-usuario
        │
        └── server.js                       # Configuração e inicialização do servidor
    </pre>
    <h2>🔧 Como Executar o Projeto</h2>
    <p>Siga os passos abaixo para clonar e executar o projeto em seu ambiente local:</p>
    <ol>
        <li>Clone o repositório:
            <pre><code>git clone https://github.com/JonasLProgramador/mvc-node-project.git</code></pre>
        </li>
        <li>Navegue até a pasta do projeto:
            <pre><code>cd mvc-node-project</code></pre>
        </li>
        <li>Instale as dependências:
            <pre><code>npm install</code></pre>
        </li>
        <li>Inicie o servidor:
            <pre><code>node server.js</code></pre>
        </li>
        <li>Acesse os endpoints para listar e detalhar produtos via navegador ou ferramentas como Postman:</li>
        <ul>
            <li><code>http://localhost:3040/allProducts</code> - Lista todos os produtos.</li>
            <li><code>http://localhost:3040/detailProduct/:Link</code> - Detalha um produto específico pelo seu link.</li>
        </ul>
    </ol>
    <h2>📝 Licença</h2>
    <p>Este projeto está licenciado sob a Licença MIT. Para mais detalhes, consulte o arquivo <code>LICENSE</code>.</p>

</body>
</html>
