const path = require('path')
const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const Fungus = require('../models/Fungus.js')
var nodemailer = require('nodemailer')
const creds = require('../config/config')

// @desc        Get all fungi
// @route       GET /api/v1/fungus
// @access      Public
exports.getFungi = asyncHandler(async (req, res, next) => {
  let query

  // Copy req.query
  const reqQuery = { ...req.query }

  // Fields to exclude
  const removeFields = ['select', 'sort', 'page', 'limit']

  // Loop over removeFields and delete them from reqQuery
  removeFields.forEach((param) => delete reqQuery[param])

  // Create query string
  let queryStr = JSON.stringify(reqQuery)

  // Create operators ($gt, $gte, etc)
  queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`)

  // Finding resource
  query = Fungus.find(JSON.parse(queryStr))

  // Select fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ')
    query = query.select(fields)
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ')
    query = query.sort(sortBy)
  } else {
    query = query.sort('-creadtedAt')
  }

  // Pagination
  const pagination = req.query.pagination ? parseInt(req.query.pagination) : 100
  const page = parseInt(req.query.page, 10) || 1
  const limit = parseInt(req.query.limit, 10 || 25)
  const skip = (page - 1) * pagination

  query = query.skip(skip).limit(pagination)

  // Executing query
  const fungi = await query

  res
    .status(200)
    .json({ success: true, count: fungi.length, pagination, data: fungi })
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
// @route       GET /api/v1/fungus/random
// @access      Public
exports.getRandom = asyncHandler(async (req, res, next) => {
  const fungi = await Fungus.aggregate([{ $sample: { size: 1 } }])

  res.status(200).json({
    success: true,
    count: fungi.length,
    data: fungi,
  })
})

// @desc        Search for fungi
// @route       GET /api/v1/fungus/search
// @access      Public
exports.searchFungi = asyncHandler(async (req, res, next) => {
  const fungi = await Fungus.find({ $text: { $search: req.query.q } })
  console.log(req.query.q)
  res.status(200).json({
    success: true,
    count: fungi.length,
    data: fungi,
  })
})

// @desc        Create new fungus
// @route       POST /api/v1/fungus/mail
// @access      Private
var transport = {
  host: 'smtp.gmail.com', // Don’t forget to replace with the SMTP host of your provider
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

exports.sendMail = asyncHandler(async (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: 'samklepdev@gmail.com', // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail',
      })
    } else {
      res.json({
        status: 'success',
      })
    }
  })
})
