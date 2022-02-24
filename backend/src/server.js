const express = require('express')
const server = express()

global.__basedir = __dirname

const db = require('./config/db.config.js')
const Debt = db.Debt

let router = require('./routes/router.js')

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
server.use(cors(corsOptions))

server.use(express.json())
server.use(express.static('resources'))
server.use('/', router)

const srv = server.listen(8888, function () {
  let host = srv.address().address
  let port = srv.address().port

  console.log('O App está executando em http://%s:%s', host, port)
})

db.sequelize.sync({ force: true }).then(() => {
  console.log('Reescreve e popula a tabela com { force: true }')
  Debt.sync().then(() => {
    const debts = [
      { description: 'Cartão de crédito', value: 155.85, payday: '2022-03-08' },
      { description: 'Aluguel', value: 520.0, payday: '2022-03-10' },
      { description: 'Energia', value: 232.74, payday: '2022-03-16' },
      { description: 'Internet', value: 74.0, payday: '2022-03-10' }
    ]

    for (let debt of debts) {
      Debt.create(debt)
    }
  })
})
