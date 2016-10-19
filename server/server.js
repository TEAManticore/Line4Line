const express          = require('express')
const bodyParser       = require('body-parser')
const passport         = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const session          = require('express-session')
const cookieParser     = require('cookie-parser')
const path             = require('path')
const morgan           = require('morgan')
const app              = express()
const router           = require('./routes/routes')
const User             = require('./models/user')

const port             = process.env.PORT || 8081

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (id, done) {
  done(null, user)
})

passport.use(new FacebookStrategy({
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: "http://localhost:8081/auth/facebook/return",
    passReqToCallback: true,
    profileFields: ['id', 'displayName', 'hometown', 'profileUrl'],
  },
  function(req, accessToken, refreshToken, profile, done) {  
    console.log('refreshToken:',refreshToken)
    let query = {
      'id': profile.id
    };

  User.findOne(query).then(user => {
    if (user) {
      console.log('User found');
      done(null, user);

    } else {
      console.log('User not found - adding to DB');
      let newUser = {};
      newUser.facebookId = profile.id;
      newUser.name = profile.displayName;
      newUser.proilePic = `http://graph.facebook.com/${profile.id}/picture?width=400&height=400`;
      newUser.token = token;
      new User(newUser).save();
      done(null, user);
    }
  }).catch(err => {
    throw err;
  }) 
}))

// app level middleware
app.use(morgan('dev'))
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  //res.setHeader('Content-Type', 'application/JSON')
  // res.header('Access-Control-Allow-Credentials', true)
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(cookieParser(process.env.SECRET));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ 
  secret: process.env.SECRET, 
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.resolve(__dirname, '../dist')))

app.use('/', router)

const server = app.listen(port)
console.log(`Server is running on port: ${port}`)

// export server for testing
module.exports = {
  server,
  app
}
