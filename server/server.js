const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')

const router = require('./routes/routes')
const app = express()
const port = process.env.PORT || 8080
// app level middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8081')
  res.setHeader('Content-Type', 'application/JSON')
  // res.header('Access-Control-Allow-Credentials', true)
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(express.static(path.resolve(__dirname, '../dist')))
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
