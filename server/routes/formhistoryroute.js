const router = require('express').Router()
const formHistoryController = require('../controllers/formHistoryController')

router.get('/:email', formHistoryController.findOne)
router.post('/', formHistoryController.create)
router.delete('/:email', formHistoryController.delete)
router.patch('/:email', formHistoryController.update)

module.exports = router 