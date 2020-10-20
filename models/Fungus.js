const mongoose = require('mongoose')

const FungusSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  subName: {
    type: String,
  },

  family: {
    type: String,
  },
  location: {
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

module.exports = mongoose.model('Fungus', FungusSchema)
