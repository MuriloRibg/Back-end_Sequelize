## Primeira parte 
    - [x] npm init -y
    - [x] npm install express --save
    - [x] npm install body-parser --save //converter os dados para o tipo json
    - [x] criar a pasta api 
    - [x] configurar o index.js
    - [x] npm install mysql2 sequelize sequelize-cli path --save
    - [x] npx sequelize-cli init
    - [x] config.json

## Segunda parte
    - [x] npx sequelize-cli model:create --name nomeDaTabela --attributes nomeDoAtributo:tipoDeDado -> Para criar tabelas
    - [x] npx sequelize-cli db:migrate -> Conectar as criações no banco
    - npx sequelize-cli seed:generate –name demo-pessoa -> criar os seeds
    - npx sequelize-cli db:seed:all -> rodas os seeds

## Terceira parte
    -[x] npm outdated = olhar a versão
    -[x] npm update = atualizar
    -[x] paranoid: true