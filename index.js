
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const PORT = process.env.PORT || 3000
var app = express();
//var URI = require('./uri.js');
// var popup = require('popups');
alert = require('alert-node');




app.set('view engine', 'hbs');

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


// mongoose.connect('mongodb://localhost/impulse');

mongoose.connect('mongodb://impulse:impulse2019@ds221095.mlab.com:21095/impulse');
var db = mongoose.connection;

// //handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db
    })
  }));

  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/assets')));
// app.use(express.static(__dirname));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');

});




app.get('/users',function(req,res){
res.send('hello');
});



// var router = express.Router();
var User = require('./models/user');
var User2 = require('./models/user_ui');
var User3 = require('./models/user_workshop');
var User4 = require('./models/user_code');
var Themes = require('./models/themes');

// var path = require('path');
 //POST route for updating data

 app.post('/codebonanza', function (req, res, next) {
  // confirm that user typed same password twice
  console.log('/post')
  // if (req.body.password !== req.body.passwordConf) {
  //   var err = new Error('Passwords do not match.');
  //   err.status = 400;
  //   res.send("passwords dont match");
  //   return next(err);
  // }

  if (req.body.email &&
    req.body.name &&
    req.body.github &&
    req.body.mobile &&
    req.body.college 
   
  ) {

    var user4Data = {
      email: req.body.email,
      name: req.body.name,
      college:  req.body.college,
      github:   req.body.github,
      mobile:   req.body.mobile
       }

       var myData4 = new User4(req.body);
       myData4.save()
       .then(item => {
        // alert('successfully submitted!');
        // res.redirect('/');
        res.redirect('/success');
       })
       .catch(err => {
       res.status(400).send("unable to save to database");
       });
  }
   else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

app.post('/uiux', function (req, res, next) {
  // confirm that user typed same password twice
  console.log('/post')
  // if (req.body.password !== req.body.passwordConf) {
  //   var err = new Error('Passwords do not match.');
  //   err.status = 400;
  //   res.send("passwords dont match");
  //   return next(err);
  // }

  if (req.body.email &&
    req.body.name &&
    req.body.github &&
    req.body.mobile &&
    req.body.college 
   
  ) {

    var user2Data = {
      email: req.body.email,
      name: req.body.name,
      college:  req.body.college,
      github:   req.body.github,
      mobile:   req.body.mobile
       }

       var myData2 = new User2(req.body);
       myData2.save()
       .then(item => {
      //   popup.alert({
      //     content: 'successfully submitted'
      // });
      // alert('successfully submitted!');
        // res.redirect('/');
        res.redirect('/uisuccess');
      // res.send('<script>alert("successfully submitted!")</script>');
  
       })
       .catch(err => {
       res.status(400).send("unable to save to database");
       console.log(err);
       });
  }
   else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

 app.post('/workshop', function (req, res, next) {
  // confirm that user typed same password twice
  console.log('/post')
  // if (req.body.password !== req.body.passwordConf) {
  //   var err = new Error('Passwords do not match.');
  //   err.status = 400;
  //   res.send("passwords dont match");
  //   return next(err);
  // }

  if (req.body.email &&
    req.body.name &&
    req.body.github &&
    req.body.mobile &&
    req.body.college 
   
  ) {

    var user3Data = {
      email: req.body.email,
      name: req.body.name,
      college:  req.body.college,
      github:   req.body.github,
      mobile:   req.body.mobile
       }

       var myData3 = new User3(req.body);
       myData3.save()
       .then(item => {
        // alert('successfully submitted!');
        // res.redirect('/');
        res.redirect('/success');
       })
       .catch(err => {
       res.status(400).send("unable to save to database");
       });
  }
   else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});



 app.post('/maithacks', function (req, res, next) {
    // confirm that user typed same password twice
    console.log('/post')
    // if (req.body.password !== req.body.passwordConf) {
    //   var err = new Error('Passwords do not match.');
    //   err.status = 400;
    //   res.send("passwords dont match");
    //   return next(err);
    // }
  
    if (req.body.email1 &&
      req.body.name1 &&
      req.body.mobile1 &&
      req.body.github &&
      req.body.college 
      && req.body.teamname  
    ) {

      var userData = {
      email1:  req.body.email1,
     name1:  req.body.name1,
     mobile1: req.body.mobile1,
     
     name2: req.body.name2,
     mobile2: req.body.mobile2,
     email2:  req.body.email2,
      
      name3: req.body.name3,
      mobile3: req.body.mobile3,
      email3:  req.body.email3,
      
      name4: req.body.name4,
      mobile4: req.body.mobile4,
      email4:  req.body.email4,
        college:  req.body.college,
        github:   req.body.github,
        teamname: req.body.teamname
         }

         var myData = new User(req.body);
       myData.save()
       .then(item => {
        // alert('successfully submitted!');
        // res.redirect('/');
        res.redirect('/success');
       })
       .catch(err => {
         console.log(err);
       res.status(400).send("unable to save to database");
       });
  }
   else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
  });
  app.post('/theme', function (req, res, next) {
    console.log('/post')
// console.log(req);
// console.log(req.data.THEME1);
// req.on('data', function (chunk) {
//   console.log('GOT DATA!');
//   console.log(chunk);
// });
console.log(req.body.THEME1);
console.log(req.body.THEME2);
console.log(req.body.TEAMNAME)
//console.log(res);

    var themesData = {
      teamname: req.body.TEAMNAME,
      theme1: req.body.THEME1,
      theme2: req.body.THEME2
    }

    mongoose.model('maithacks').findOne({'teamname': req.body.TEAMNAME}, function(error, exist) {
      if(exist && !error){
        //do something
        console.log("exists");
 

    var themedata = new Themes(themesData);
    themedata.save()
    .then(item => {
      // alert('successfully submitted!');
     // res.redirect('/');
    // res.redirect('/uisuccess');
      res.status(200).end('success')
     })
     .catch(err => {
       console.log(err);
       //res.send('entered team name does not exist')
      //  res.writeHead(400, {'Content-Type': 'text/html'})
      //  res.write("unable to save to database");
      //  res.end('<p>Team has not been registered or theme has already been generated</p>');
      res.status(400).end('error')
      console.log("does not exist");
     });
    } else {
      //IF YOU ARE USING EXPRESS.JS, YOU MUST USE RES.SEND() or RES.END() TO TERMINATE THE CONNECTION
    //   res.writeHead(500, {'Content-Type': 'text/html'})
    //  res.write("unable to save to database");
    //  res.end('<p>Team has not been registered or theme has already been generated</p>');
      res.status(400).end('error')
      console.log("does not exist");
    }
  });

  });

  app.get('/error', function(req,res,next){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("unable to save to database");
    res.end('<p>Team has not been registered or theme has already been generated</p>');
  })



  //theme generation route ///////////////////
  app.get('/generate', function(req,res,next){
    console.log(req.query.team)
    res.render('theme_gen.hbs', {
      team: req.query.team
    })
  })
  
  // GET route after registering
  app.get('/uisuccess', function(req,res,next){
    res.render('uisuccess.hbs')
  })
  app.get('/success', function(req,res,next){
    res.render('success.hbs')
  })

  app.get('/profile', function (req, res, next) {
    User.findById(req.session.userId)
      .exec(function (error, user) {
        if (error) {
          return next(error);
        } else {
          if (user === null) {
            var err = new Error('Not authorized! Go back!');
            err.status = 400;
            return next(err);
          } else {
            // return res.send('<h1>Name: </h1>' + user.name + '<h2>Mail: </h2>' + user.email + 
            // + '<h2>github: </h2>' + user.github 
            // + '<h2>college: </h2>' + user.college 
            // + '<h2>mobile: </h2>' + user.mobile 
            // + '<h2>team name: </h2>' + user.teamname +
            // '<br><a type="button" href="/logout">Logout</a>')
            return res.render('profile.hbs',{
              'name': user.name,
              'email': user.email,
              'github': user.github,
              'college': user.college,
              'mobile': user.mobile,
              'team': user.teamname
            })
          }
        }
      });
  });
  
//   // GET for logout logout
  app.get('/logout', function (req, res, next) {
      console.log('logout');
    if (req.session) {
      // delete session object
      req.session.destroy(function (err) {
        if (err) {
          return next(err);
        } else {
          return res.redirect('/');
        }
      });
    }
  });
  
// //   module.exports = router;
app.listen(process.env.PORT || 8000 ); 