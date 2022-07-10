# Anotações

## Primeira parte 
    - [ ] npm init -y
    - [ ] npm install express --save
    - [ ] npm install body-parser --save //converter os dados para o tipo json
    - [ ] criar a pasta api 
    - [ ] configurar o index.js
    - [ ] npm install mysql2 sequelize sequelize-cli path --save
    - [ ] npx sequelize-cli init
    - [ ] config.json --> arq. q possui as variáveis de conexão com o Data Base

## Segunda parte
    - [ ] npx sequelize-cli model:create --name nomeDaTabela --attributes nomeDoAtributo:tipoDeDado -> Para criar tabelas
    - [ ] npx sequelize-cli db:migrate -> Conectar as criações no banco
    - npx sequelize-cli seed:generate –name demo-pessoa -> criar os seeds
    - npx sequelize-cli db:seed:all -> rodas os seeds

## Terceira parte
    - [ ] npm outdated = olhar a versão
    - [ ] npm update = atualizar

## Docker - 
    - A instrução ARG carrega variáveis apenas no momento de build da imagem, enquanto a instrução ENV carrega variáveis que serão utilizadas no container. 
    #Criando a variável de ambiente e setando ela
        ARG PORT_BUILD=3000
        ENV PORT=$PORT_BUILD
        EXPOSE $PORT_BUILD