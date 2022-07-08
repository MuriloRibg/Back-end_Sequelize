
# API node.js - MVC - ORM sequelize

Essa API é para teste/estudos, foi feita com o sequelize-cli e express, com arquitetura MVC.


## Stack utilizada

**Back-end:** Node, Express, Sequelize-cli


## Autores

- [@MuriloRibg](https://github.com/MuriloRibg)
- [@MFMendes](https://github.com/MFMendes)

## Instalação

Criar a pasta config com o arguivo config.json

```bash
  {
    "development": {
      "username": "root",
      "password": "******",
      "database": "my-database",
      "host": "localhost",
      "dialect": "mysql",
      "timezone": "-03:00"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }
```

Instale back-end_sequelize com npm

```bash
  npm i
  npx npx sequelize-cli db:migrate -> para se criar as tabelas
  npx sequelize-cli db:seed:all -> rodas os seeds
  npm start
```