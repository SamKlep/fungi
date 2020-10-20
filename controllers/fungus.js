const path = require('path')

const Fungus = require('../models/Fungus.js')

// @desc        Get all fungi
// @route       GET /api/v1/fungus
// @access      Public
exports.getFungi = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all fungi' })
}

// @desc        Get single fungus
// @route       GET /api/v1/fungus/:id
// @access      Public
exports.getFungus = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Show fungus ${req.params.id}` })
}

// @desc        Create new fungus
// @route       POST /api/v1/fungus
// @access      Private
exports.createFungus = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new fungus' })
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
