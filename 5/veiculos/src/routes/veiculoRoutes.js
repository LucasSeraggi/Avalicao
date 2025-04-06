const express = require('express')
const router = express.Router()
const veiculosController = require('../controllers/veiculosController')

router.get('/', veiculosController.getAll)
router.get('/:id', veiculosController.getById)
router.get('/params', veiculosController.getByParams)

router.post('/', veiculosController.create)

router.put('/:id', veiculosController.updateAll)

router.patch('/:id', veiculosController.updateParams)

router.delete('/:id', veiculosController.delete)

module.exports = router
