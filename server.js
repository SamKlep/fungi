const path = require('path')
const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const cors = require('cors')
const slugify = require('slugify')
const connectDB = require('./config/db')

// Load env vars
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
const fungus = require('./routes/fungus')

const app = express()

// Body parser
app.use(express.json())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Enable CORS
app.use(cors())

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

// Mount routers
app.use('/api/v1/fungus', fungus)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
      .brightYellow.bold
  )
)