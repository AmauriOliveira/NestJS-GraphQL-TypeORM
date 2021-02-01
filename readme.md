<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Nest APi TypeOrm GraphQL Demo

> Um Api feita para aprender e praticar diversos conceitos

**https://www.youtube.com/playlist?list=PLDqnSpzNKDvlmRnr_K9PoQBqUSkVU42J1**

![GitHub last commit](https://img.shields.io/github/last-commit/AmauriOliveira/NestJS-GraphQL-TypeORM)
![license](https://img.shields.io/github/license/AmauriOliveira/NestJS-GraphQL-TypeORM)
![GitHub repo size](https://img.shields.io/github/repo-size/AmauriOliveira/NestJS-GraphQL-TypeORM)

## :telescope: Visão geral

[🏠 Homepage](https://github.com/AmauriOliveira/NestJS-GraphQL-TypeORM)
bla bla bla lonmg

## :computer: Tecnologias

[![NodejsBadge](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white)](#)
[![NestJS Badge](https://img.shields.io/badge/-NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)](#)
[![TypeScript Badge](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](#)
[![Docker Badge](https://img.shields.io/badge/-Docker-2496ED?style=flat-square&logo=docker&logoColor=white)](#)
[![Git Badge](https://img.shields.io/badge/-Git-black?style=flat-square&logo=git)](#)
[![GitHub Badge](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](#)
[![VSCode Badge](https://img.shields.io/badge/-VSCode-007ACC?style=flat-square&logo=visual-studio-code&logoColor=white)](#)
[![Jest Badge](https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white)](#)
[![PostgreSQL Badge](https://img.shields.io/badge/-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)](#)

## Docker composer

```bash
# copile and up
$ docker-compose up --build
# up
$ docker-compose up
#down
$ docker-compose down
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## GraphQl

### Query

```bash
# body
query{
  users{
    id
    name
    email
  }
}

#body
query{
  userByEmail(email:"jose@bol.com"){
    id
    name
    email
  }
}

#header
{"Authorization":"Bearer ...." }
#body
query {
  user(id: "1") {
    name
    email
  }
}
```

### Mutation

```bash
# body
mutation {
  createUser(
    data: { name: "jose", email: "jose@bol.com", password: "123456" }
  ) {
    id
    name
    email
  }
}

# body
mutation {
  login(data: { email: "jose@bol.com", password: "123456" }){
    user{
      id
      name
      email
    }
    token
  }
}
# body
mutation{
  updateUser(id:"1", data:{ name: "José Oliveira", email:"jose_O@gmail.com"}){
    id
    name
    email
  }
}
# body
mutation{
  deleteUser(id:"2")
}
```

## :star2: Contributing

Contributions, issues and feature requests are welcome!

- ⭐️ Star the project
- 🐛 Find and report issues
- 📥 Submit PRs to help solve issues or add features

Feel free to check [issues page](https://github.com/AmauriOliveira/NestJS-GraphQL-TypeORM/issues). You can also take a look at the contributing guide.

## :bow: Author

**Amauri Oliveira**

- Email: amauriibate32@hotmail.com
- GitHub: [@AmauriOliveira](https://github.com/AmauriOliveira)
- LinkedIn: [@amauri-oliveira-058066192](https://linkedin.com/in/amauri-oliveira-058066192)

## :books: License

Copyright © 2020 Amauri Oliveira
This project is [MIT](license) licensed.

```

```
