const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')

const router = require('./routes/routes')
const app = express()
const port = process.env.PORT || 8080
// app level middleware
app.use(express.static(path.resolve(__dirname, '../client/public')))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded( { extended: false } ))
app.use(bodyParser.json())
app.use(cookie())
app.use('/', router)

const server = app.listen(port)
console.log(`Server is running on port: ${port}`)

// export server for testing
module.exports = {
  server,
  app
}
