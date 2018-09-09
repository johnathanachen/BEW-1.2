// ===================================================================================
// INSTALLATIONS & DECLARATIONS ======================================================
// ===================================================================================
require("dotenv").config();
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require('path');

const app = express();

// ===================================================================================
// INITIALIZERS: MONGODB =============================================================
// ===================================================================================

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/reddit-clone', { useNewUrlParser: true })
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))
mongoose.set("debug", true);

// ===================================================================================
// INITIALIZERS: EXPRESS =============================================================
// ===================================================================================

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.engine(".handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.static('./public'));

// ===================================================================================
// VERIFY USER AUTHENTICATION ========================================================
// ===================================================================================

var checkAuth = (req, res, next) => {
  console.log("Checking authentication");
  if (typeof req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
    req.user = null;
  } else {
    var token = req.cookies.nToken;
    var decodedToken = jwt.decode(token, { complete: true }) || {};
    req.user = decodedToken.payload;
  }

  next()
}

app.use(checkAuth);

// ===================================================================================
// MAIN ==============================================================================
// ===================================================================================

require('dotenv').config();
require("./controllers/auth.js")(app);
require('./controllers/comments.js')(app);
require('./controllers/posts.js')(app);

const Post = require('./models/post.js')

// ===================================================================================
// ======== GET ======================================================================
// ===================================================================================

app.get('/', (req, res) => {
  var currentUser = req.user;

Post.find({}).then((posts) => {

    res.render('posts-index', { posts, currentUser })
  }).catch((err) => {
    console.log(err.message);
  });

})

app.get('/login', (req, res) => {
    res.render('login');
 });

app.get("/sign-up", (req, res) => {
    res.render("sign-up");
});

app.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/');
 });

app.get('/posts/new', function (req, res) {
  res.render('posts-new')
})

app.get('/posts/:id', function (req, res) {
    // LOOK UP THE POST
    Post.findById(req.params.id).then((post) => {
    	res.render('post-show', { post })
    }).catch((err) => {
    	console.log(err.message)
    })
})

app.get("/r/:subreddit", (req, res) => {
    Post.find({ subreddit: req.params.subreddit }).exec((err, posts) => {
        let currentUser;

        if (req.user) {
            currentUser = req.user.id;
        }
        else {
            currentUser = 0;
        }
    }).then((posts, currentUser) => {
            res.render("posts-index", { posts, currentUser });
        }).catch((err) => {
            console.error(err.message);
        });
});

// ===================================================================================
// ======== POSTS ====================================================================
// ===================================================================================

app.post('/posts', (req, res) => {
  if (req.user) {
    var post = new Post(req.body);

    post.save(function (err, post) {
      return res.redirect(`/`);
    })
  } else {
    return res.status(401); // UNAUTHORIZED
  }
});

app.post('/posts/new', (req, res) => {
	// INSTANTIATE INSTANCE OF POST MODEL
	let post = new PostSchema(req.body);
	console.log(req.body);

  // SAVE INSTANCE OF POST MODEL TO DB
  post.save((err, post) => {
	// REDIRECT TO THE ROOT
	return res.redirect('/');
	})
});

app.post('/sign-up', (req, res) => {
    // Create User and JWT
    const user = new User(req.body);

    user.save().then((user) => {
      var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
      res.redirect('/');
    }).catch((err) => {
      console.log(err.message);
      return res.status(400).send({ err: err });
    });
  });

app.post('/n/:subreddit', function(req, res) {
    Post.find({ subreddit: req.params.subreddit }).then((posts) => {
      res.render('posts-index', { posts })
    }).catch((err) => {
      console.log(err)
    })
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  // Find this user name
  User.findOne({ username }, 'username password').then((user) => {
    if (!user) {
      // User not found
      return res.status(401).send({ message: 'Wrong Username or Password' });
    }
    // Check the password
    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        // Password does not match
        return res.status(401).send({ message: "Wrong Username or password"});
      }
      // Create a token
      const token = jwt.sign(
        { _id: user._id, username: user.username }, process.env.SECRET,
        { expiresIn: "60 days" }
      );
      // Set a cookie and redirect to root
      res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
      res.redirect('/');
    });
  }).catch((err) => {
    console.log(err);
  });
});

// CREATE
app.post('/posts/:postId/comments', function (req, res) {
  // FIND THE PARENT POST
  Post.findById(req.params.postId).exec(function (err, post) {
    // UNSHIFT A NEW COMMENT
    post.comments.unshift(req.body);
    // SAVE THE PARENT
    post.save();

    // REDIRECT BACK TO THE PARENT POST#SHOW PAGE TO SEE OUR NEW COMMENT IS CREATE
    return res.redirect(`/posts/` + post._id);
  })
});

// ===================================================================================
// ======== PUT ====================================================================
// ===================================================================================

app.put('posts/:id/vote-up', function (req, res) {
  Post.findById(req.params.id).exec(function (err, post) {
    post.upVotes.push(req.user._id)
    post.voteScore = post.voteTotal + 1
    post.save();

    res.status(200);
  })
})

app.put('posts/:id/vote-down', function (req, res) {
  Post.findById(req.params.id).exec(function (err, post) {
    post.downVotes.push(req.user._id)
    post.voteScore = post.voteTotal - 1
    post.save();

    res.status(200);
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
