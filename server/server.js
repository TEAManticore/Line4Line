const express = require('express')
const path = require('path')
const morgan = require('morgan')
const session = require('express-session')
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
    return done(null, profile)
  }
))

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (user, done) {
  console.log(user)
  done(null, user)
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
app.use(session({secret: process.env.SECRET,  
  saveUninitialized: false,
  resave: false,
}))

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
