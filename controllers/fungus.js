const path = require('path')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Fungus = require('../models/Fungus.js')

// @desc        Get all fungi
// @route       GET /api/v1/fungus
// @access      Public
exports.getFungi = asyncHandler(async (req, res, next) => {
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 24

  const page = req.query.page ? parseInt(req.query.page) : 1

  const fungi = await Fungus.find()
    .skip((page - 1) * pagination)
    .limit(pagination)

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

  res.status(201).json({ success: true, data: fungus })
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

  fungus.remove()

  res.status(200).json({ success: true, data: {} })
})

// @desc        Upload photo for fungus
// @route       PUT /api/v1/fungus/:id/photo
// @access      Private
exports.fungusPhotoUpload = asyncHandler(async (req, res, next) => {
  const fungus = await Fungus.findById(req.params.id)

  if (!fungus) {
    return next(
      new ErrorResponse(`Fungus not found with id of ${req.params.id}`, 404)
    )
  }

  if (!req.files) {
    return next(new ErrorResponse(`Please upload a file`, 400))
  }

  const file = req.files.File

  // Make sure the image is a photo
  if (!file.mimetype.startsWith('image')) {
    return next(new ErrorResponse(`Please upload an image file`, 400))
  }

  // Check filesize
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return next(
      new ErrorResponse(
        `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
        400
      )
    )
  }

  // Create custom filename
  file.name = `photo_${fungus._id}${path.parse(file.name).ext}`

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async (err) => {
    if (err) {
      console.log(err)
      return next(new ErrorResponse(`Problem with file upload`, 500))
    }

    await Fungus.findByIdAndUpdate(req.params.id, { photo: file.name })

    res.status(200).json({
      success: true,
      data: file.name,
    })
  })
})

// @desc        Get random entry
// @route       GET /api/v1/random
// @access      Public
exports.getRandom = asyncHandler(async (req, res, next) => {
  const fungi = await Fungus.aggregate([{ $sample: { size: 1 } }])

  res.status(200).json({
    success: true,
    count: fungi.length,
    data: fungi,
  })
})
