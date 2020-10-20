const path = require('path')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Fungus = require('../models/Fungus.js')

// @desc        Get all fungi
// @route       GET /api/v1/fungus
// @access      Public
exports.getFungi = asyncHandler(async (req, res, next) => {
  const fungi = await Fungus.find()

  res.status(200).json({
    success: true,
    count: fungi.length,
    data: fungi,
  })
})

// @desc        Get single fungus
// @route       GET /api/v1/fungus/:id
// @access      Public
exports.getFungus = asyncHandler(async (req, res, next) => {
  const fungus = await Fungus.findById(req.params.id)

  if (!fungus) {
    return next(
      new ErrorResponse(`Fungus not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({
    success: true,
    data: fungus,
  })
})

// @desc        Create new fungus
// @route       POST /api/v1/fungus
// @access      Private
exports.createFungus = asyncHandler(async (req, res, next) => {
  const fungus = await Fungus.create(req.body)

  res.status(200).json({ success: true, data: fungus })
})

// @desc        Update fungus
// @route       PUT /api/v1/fungus/:id
// @access      Private
exports.updateFungus = asyncHandler(async (req, res, next) => {
  const fungus = await Fungus.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  if (!fungus) {
    return next(
      new ErrorResponse(`Fungus not found with id of ${req.params.id}`, 404)
    )
  }
})

// @desc        Delete fungus
// @route       DELETE /api/v1/fungus/:id
// @access      Private
exports.deleteFungus = asyncHandler(async (req, res, next) => {
  const fungus = await Fungus.findByIdAndDelete(req.params.id)

  if (!fungus) {
    return next(
      new ErrorResponse(`Fungus not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({ success: true, data: {} })
})
