const express = require('express')

const {
  getFungi,
  getFungus,
  createFungus,
  updateFungus,
  deleteFungus,
} = require('../controllers/fungus')

const router = express.Router()

router.route('/').get(getFungi).post(createFungus)

router.route('/:id').get(getFungus).put(updateFungus).delete(deleteFungus)

module.exports = router
