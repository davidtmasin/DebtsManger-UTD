# **Debts Manager**

### Projeto Final do curso de Desenvolvimento de Interfaces Gráficas com Javascript da UTD

Neste projeto, construímos separadamente o **Backend** e o **Frontend** da nossa aplicação. Neste primeiro, foi utilizado o **Node.JS** para implementar toda a regra de negócio que está por traz da nossa aplicação final e tivemos o apoio do banco de dado **MySQL**, para armazenar as informações que forem sendo geradas a partir da interação do usuário. Já em nosso frontend, utilizamos o **React.JS** para projetar todo o visual, o roteamento entre as páginas, Snackbars, etc.

A título de informação, na parte do **Backend**, foram utilizadas as seguintes dependências (destacarei apenas aquelas que foram necessárias ao projeto):

```
  "dependencies": {
      "cors": "^2.8.5",
      "express": "^4.17.2",
      "mysql2": "^2.3.3",
      "sequelize": "^6.16.1"
  }
```

Utilize um dos comandos a seguir para poder instalar as dependências que foram utilizadas para montar nosso Backend:

```
  yarn add express sequelize mysql2 cors
```

ou

```
  npm install express sequelize mysql2 cors
```

Para executar o seu projeto criado em Node.JS, utilize:

```
  node <nome_do_arquivo>.js
```

Já no **Frontend**, utilizamos as seguintes depedências (destacarei apenas aquelas que foram necessárias ao projeto):

```
   "dependencies": {
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "@material-ui/lab": "^4.0.0-alpha.60",
    "@mui/material": "^5.4.3",
    "axios": "^0.26.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-icons": "^4.3.1",
    "react-router-dom": "5",
    "react-scripts": "^5.0.0",
    "styled-components": "^5.3.3"
  }
```

Para criar um projeto React utilize um dos seguintes comandos:

```
  yarn add create-react-app <nome_do_projeto>
```

ou

```
  npx create-react-app <nome_do_projeto>
```

Após a criação do seu projeto React com o **yarn** ou **npx**, vamos executá-lo mediante um dos comandos a seguir (lembre-se de estar na pasta do projeto que foi gerado anteriormente):

```
  yarn start
```

ou

```
  npm start
```
