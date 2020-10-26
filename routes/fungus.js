const express = require('express')

const {
  getFungi,
  getFungus,
  getRandom,
  createFungus,
  updateFungus,
  deleteFungus,
  fungusPhotoUpload,
  searchFungi,
} = require('../controllers/fungus')

const router = express.Router()

router.route('/').get(getFungi).post(createFungus)

router.route('/:id/photo').put(fungusPhotoUpload)

router.route('/random').get(getRandom)
router.route('/search').post(searchFungi)

router.route('/:id').get(getFungus).put(updateFungus).delete(deleteFungus)

module.exports = router
