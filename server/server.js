const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cookieSesh = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: "http://localhost:8081/auth/facebook/callback",
    profileFields: ['id', 'emails', 'name', 'photos', 'hometown', 'profileUrl'],
  },
  function(accessToken, refreshToken, profile, done) {    
    console.log(profile)
    const user = {id:profile.id, name: profile.givenName + profile.familyName, profilePic: profile.photos[0].value}
    done(null, user)
  }
))

passport.serializeUser(function (user, done) {
  done(null, user.id)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

const router = require('./routes/routes')
const app = express()
const port = process.env.PORT || 8081
// app level middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  //res.setHeader('Content-Type', 'application/JSON')
  // res.header('Access-Control-Allow-Credentials', true)
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded( { extended: false } ))
app.use(bodyParser.json())
app.use(cookieSesh({secret: process.env.SECRET}))

app.use(passport.initialize())
app.use(passport.session())
app.use('/', router)

const server = app.listen(port)
console.log(`Server is running on port: ${port}`)

// export server for testing
module.exports = {
  server,
  app
}
