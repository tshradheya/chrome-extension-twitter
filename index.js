const express = require('express')
const app = express()

var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var session = require('express-session');
var Twitter = require('twitter-node-client').Twitter;


//Callback functions
	var error = function (err, response, body) {
    	console.log('ERROR [%s]', err);
	};
	var success = function (data) {
    	console.log('Data [%s]', data);
	};


app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(require('body-parser').json());
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var consumer_key = 'AOq8gE5npNv3ju1XODInMfwcv'
var consumer_secret = 'VG3TCQ5CoaO2CF6TwIOLLdKQeoxAiCQh4TaNWWmS2Op6w96N19'
var token_global = ''
var token_secret_global = ''

passport.use(new Strategy({
    consumerKey: 'AOq8gE5npNv3ju1XODInMfwcv',
    consumerSecret: 'VG3TCQ5CoaO2CF6TwIOLLdKQeoxAiCQh4TaNWWmS2Op6w96N19',
    callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
      token_global = token;
      token_secret_global = tokenSecret;

      return cb(null, profile);
  }
));

app.get('/', (req, res) => {

    res.send("Hello World");

})

app.get('/login/twitter',
  passport.authenticate('twitter'));


app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { successRedirect: '/',
        failureRedirect: '/' }));

        var config = {
                "consumerKey": consumer_key,
                "consumerSecret": consumer_secret,
                "accessToken": token_global,
                "accessTokenSecret": token_secret_global,
                "callBackUrl": "http://127.0.0.1:3000/auth/twitter/callback"
            }

            var twitter = new Twitter(config);


app.post('/postTweet:status', function(req, res) {
    console.log("came here")
    console.log(req.body);
    console.log(req.params.status);
    console.log()
    twitter.postTweet({status: req.body.status}, error, success);
    console.log("came here down ")

    //res.send("ok");
})




app.listen(3000, () => console.log('Example app listening on port 3000!'))
