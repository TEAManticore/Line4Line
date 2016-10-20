const express          = require('express')
const bodyParser       = require('body-parser')
const app              = express()
const passport         = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const session          = require('express-session')
const path             = require('path')
const morgan           = require('morgan')
const router           = require('./routes/routes')
const User             = require('./models/user')

const port             = process.env.PORT || 8081

passport.serializeUser(function (user, done) {
  console.log(user)
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null,obj)
})

passport.use(new FacebookStrategy({
    clientID          : process.env.CLIENTID,
    clientSecret      : process.env.CLIENTSECRET,
    callbackURL       : "http://localhost:8081/auth/facebook/return",
    passReqToCallback : true
  },
  function(req, token, refreshToken, profile, done) {  
    console.log('refreshToken:',refreshToken)
    let query = {
      'facebookId': profile.id
    };

  User.findOne(query).then(user => {
    if (user) {
      console.log('User found')
      done(null, user)

    } else {
      console.log('User not found - adding to DB')
      let newUser = {}
      newUser.facebookId = profile.id
      newUser.name = profile.displayName
      newUser.profilePic = `http://graph.facebook.com/${profile.id}/picture?width=400&height=400`
      newUser.token = token
      new User(newUser).save((err,user) => {
        if(err){
          console.log(err)
        }
        done(null, user)
      })
    }
  }).catch(err => {
    throw err
  }) 
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(session({ 
  secret: process.env.SECRET, 
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'))
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  //res.setHeader('Content-Type', 'application/JSON')
  res.header('Access-Control-Allow-Credentials', true)
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use('/', router)
console.log(`Server is running on port: ${port}`)
app.listen(port)

