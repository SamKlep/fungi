const path = require('path')

const Fungus = require('../models/Fungus.js')

// @desc        Get all fungi
// @route       GET /api/v1/fungus
// @access      Public
exports.getFungi = async (req, res, next) => {
  try {
    const fungi = await Fungus.find()

    res.status(200).json({
      success: true,
      data: fungi,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
    })
  }
}

// @desc        Get single fungus
// @route       GET /api/v1/fungus/:id
// @access      Public
exports.getFungus = async (req, res, next) => {
  try {
    const fungus = await Fungus.findById(req.params.id)

    if (!fungus) {
      return res.status(400).json({
        success: false,
      })
    }

    res.status(200).json({
      success: true,
      data: fungus,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
    })
  }
}

// @desc        Create new fungus
// @route       POST /api/v1/fungus
// @access      Private
exports.createFungus = async (req, res, next) => {
  try {
    const fungus = await Fungus.create(req.body)

    res.status(200).json({ success: true, data: fungus })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc        Update fungus
// @route       PUT /api/v1/fungus/:id
// @access      Private
exports.updateFungus = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update fungus ${req.params.id}` })
}

// @desc        Delete fungus
// @route       DELETE /api/v1/fungus/:id
// @access      Private
exports.deleteFungus = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete fungus ${req.params.id}` })
}
