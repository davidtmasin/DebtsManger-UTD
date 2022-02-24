const db = require('../config/db.config.js')
const Debt = db.Debt

exports.createDebt = (req, res) => {
  let debt = {}
  try {
    debt.description = req.body.description
    debt.value = req.body.value
    debt.payday = req.body.payday

    Debt.create(debt, {
      attributes: ['id', 'description', 'value', 'payday']
    }).then(result => {
      res.status(200).json(result)
    })
  } catch (error) {
    res.status(500).json({
      message: 'Fail',
      error: error.message
    })
  }
}

exports.getDebt = async (req, res) => {
  try {
    let debtId = req.params.id
    let debt = await Debt.findByPk(debtId)

    if (!debt) {
      res.status(404).json({
        message: 'Não existe débito com ID: ' + debtId,
        error: '404'
      })
    } else {
      await Debt.findByPk(req.params.id, {
        attributes: ['id', 'description', 'value', 'payday']
      })
        .then(debt => {
          res.status(200).json(debt)
        })
        .catch(error => {
          console.log(error)
          res.status(500).json({
            message: 'Error!',
            error: error
          })
        })
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error -> Não foi possível localizar o débito com ID: ' + debtId,
      error: error.message
    })
  }
}

exports.allDebts = (req, res) => {
  try {
    Debt.findAll({
      attributes: ['id', 'description', 'value', 'payday']
    }).then(debts => {
      res.status(200).json(debts)
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Error!',
      error: error
    })
  }
}

exports.deleteDebt = async (req, res) => {
  try {
    let debtId = req.params.id
    let debt = await Debt.findByPk(debtId)

    if (!debt) {
      res.status(404).json({
        message: 'Não existe débito com ID: ' + debtId,
        error: '404'
      })
    } else {
      await debt.destroy()
      res.status(200).json('Débito deletado com sucesso!')
    }
  } catch (error) {
    res.status(500).json({
      message:
        'Error -> Não foi possível deletar o débito com o Id: ' + req.params.id,
      error: error.message
    })
  }
}

exports.updateDebt = async (req, res) => {
  try {
    let debtId = req.body.id
    let debt = await Debt.findByPk(debtId)

    if (!debt) {
      res.status(404).json({
        message: 'Não foi possível localizar o débito com Id: ' + debtId,
        error: '404'
      })
    } else {
      let updateObject = {
        description: req.body.description,
        value: req.body.value,
        payday: req.body.payday
      }

      let result = await Debt.update(updateObject, {
        returning: true,
        where: { id: req.body.id },
        attributes: ['id', 'description', 'value', 'payday']
      })
      //Return the response to client
      if (!result) {
        res.status(500).json({
          message:
            'Error -> Não houve alteração no débito com Id: ' + req.params.id,
          error: 'Não pode ser alterado'
        })
      }

      res.status(200).json('Débito alterado com sucesso!')
    }
  } catch (error) {
    res.status(500).json({
      message:
        'Error -> Não pode ser alterado o débito com o Id: ' + req.params.id,
      error: error.message
    })
  }
}
