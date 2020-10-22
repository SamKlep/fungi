const mongoose = require('mongoose')
const slugify = require('slugify')

const FungusSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subName: {
    type: String,
  },
  slug: String,
  family: {
    type: String,
  },
  location: {
    type: String,
  },
  imgUrl: {
    type: String,
  },

  dimensions: {
    type: String,
  },
  edibility: {
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

// Create fungus slug from name
FungusSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next()
})

module.exports = mongoose.model('Fungus', FungusSchema)
