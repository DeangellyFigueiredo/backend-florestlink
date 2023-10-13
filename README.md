# 📡 Back-end FlorestLink

# 💻 Tecnologias

- Typescript
- NodeJs
- NestJs
- Prisma
- SocketIO

## ⚙ Configuração

Para conseguir rodar o Back-end, você precisa ter instalado o Nodejs e o YARN.
Após isso, clone o repositório e entre na pasta `./BACKEND-FLORESTLINK` e execute o seguinte comando para buildar a aplicação:

```bash
// Limpa o cache
$ yarn

```

Você também precisa rodas as migrações para o banco de dados, utilize o seguinte comando:

```bash
// Para gerar as migrations no banco de dados
$ npx prisma migrate dev

// Para gerar os objetos do esquema do DB para ajudar no desenvolvimento
$ npx prisma generate

```

## 🚀 Executando

Após a configurção, execute o seguinte comando:

```bash
$ yarn start:dev
```

## 🔀 Rotas

As rotas disponíveis aparecerão no bash.
