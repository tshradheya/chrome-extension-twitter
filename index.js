const express = require('express')
const app = express()

var passport = require('passport');
var Strategy = require('passport-twitter').Strategy;
var session = require('express-session');
var Twitter = require('twitter-node-client').Twitter;
var bodyParser = require('body-parser');



//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};


app.use(require('serve-static')(__dirname + '/../../public'));
app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

var consumer_key = 'QLEszaDfg09EY9MFGQ2fIh5Ft'
var consumer_secret = 'rfdpWGxa3X7f6fYstRqj1ZaxoO0h7ePZKFg2Gv1fxHKiiCnL07'
var token_global = ''
var token_secret_global = ''


var config = {
    "consumerKey": consumer_key,
    "consumerSecret": consumer_secret,
    "accessToken": token_global,
    "accessTokenSecret": token_secret_global,
    "callBackUrl": "https://radiant-meadow-89003.herokuapp.com/auth/twitter/callback"
}

passport.use(new Strategy({
    consumerKey: 'QLEszaDfg09EY9MFGQ2fIh5Ft',
    consumerSecret: 'rfdpWGxa3X7f6fYstRqj1ZaxoO0h7ePZKFg2Gv1fxHKiiCnL07',
    callbackURL: "https://radiant-meadow-89003.herokuapp.com/auth/twitter/callback"
},
function(token, tokenSecret, profile, cb) {
    console.log('token', token);
    token_global = token;
    token_secret_global = tokenSecret;

    return cb(null, profile);
}
));

app.get('/', (req, res) => {

    res.send("Login Successful. Please close this tab and continue browsing");

})

app.get('/login/twitter',
passport.authenticate('twitter'));


app.get('/auth/twitter/callback',
passport.authenticate('twitter', { successRedirect: '/',
failureRedirect: '/' }));




var twitter;

app.post('/postTweet', function(req, res) {

    config = {
        "consumerKey": consumer_key,
        "consumerSecret": consumer_secret,
        "accessToken": token_global,
        "accessTokenSecret": token_secret_global,
        "callBackUrl": "https://radiant-meadow-89003.herokuapp.com/auth/twitter/callback"
    }
    twitter = new Twitter(config);


    var sta = req.body.status;
    console.log(req.body)
    console.log(sta);
    twitter.postTweet({status: sta}, error, success);
    console.log("came here down");
    console.log(config);

    //res.send("ok");
})




app.listen(3000, () => console.log('Example app listening on port 3000!'))
