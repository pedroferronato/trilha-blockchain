# NodeJS

Esta pasta é dedicada à prática das atividades e testes dos cursos:

- REST com NodeJS: API com Express e MySQL
- NodeJS: Streaming de dados e Repositório
- ORM com NodeJS: API com Sequelize e MySQL

## Executando os arquivos
---

Para execução dos arquivos é necessário instalar [Node.js](https://nodejs.org/pt-br/).

Instale as dependência do projeto com o comando:

```bash
npm install
```

Após a instalação, acesse a pasta do arquivo e execute:

```bash
npm start
```

## MySQL - Conexões
---
Os arquivos de configuração de conexão ao banco de dados são:

- .env - para o projeto __node-express__
- config/config.json - para o projeto __orm-sequelize__

É necessário criar estes arquisvos, existindo arquivos exemplo (.env.example e config-examples.json) para nortear o preenchimento dos arquivos em seu ambiente.

## ORM - Migrações
---

O projeto __orm_sequelize__ depende do processo de migração, para realiza-la execute os seguintes comandos na pasta do projeto:

```bash
npx sequelize-cli db:migrate
```

Em sequência execute o processo de seeding: 

```bash
npx sequelize-cli db:seed:all
```