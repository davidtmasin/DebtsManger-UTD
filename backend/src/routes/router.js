let express = require('express')
let router = express.Router()

const debts = require('../controllers/controllerDebt.js')

router.post('/management/create-debt', debts.createDebt)
router.get('/management/get-debt/:id', debts.getDebt)
router.get('/management/all-debts', debts.allDebts)
router.put('/management/update-debt', debts.updateDebt)
router.delete('/management/delete-debt/:id', debts.deleteDebt)

module.exports = router
