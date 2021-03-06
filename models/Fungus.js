const mongoose = require('mongoose')

const FungusSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subname: {
    type: String,
  },

  family: {
    type: String,
  },
  location: {
    type: String,
  },
  imgUrl: {
    type: String,
  },

  similar: {
    type: String,
  },
  dimensions: {
    type: String,
  },
  edible: {
    type: Boolean,
    default: false,
  },
  medicinal: {
    type: Boolean,
    default: false,
  },
  description: {
    type: String,
  },
  folklore: {
    type: String,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

FungusSchema.index({ '$**': 'text' })

// Create fungus slug from name
// FungusSchema.pre('save', function (next) {
//   this.slug = slugify(this.name, { lower: true })
//   next()
// })

module.exports = mongoose.model('Fungus', FungusSchema)
