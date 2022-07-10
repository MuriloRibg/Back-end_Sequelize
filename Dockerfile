#usando uma imagem base
FROM node:14

#criando a pasta raiz
WORKDIR /usr/app

COPY package*.json ./

#instalando as dependencias e rodando o projeto
RUN npm i

#copiando o conteúdo para a pasta local
COPY . .

EXPOSE 3000

CMD "npm start"