const Post = require('../models/post')

module.exports = (app) => {

    app.get('/posts/new', (req, res) => {
        res.render('posts-new')
    })

    app.get('/posts/:id', function (req, res) {
      // LOOK UP THE POST
        Post.findById(req.params.id).populate('comments').then((post) => {
          res.render('post-show', { post })
        }).catch((err) => {
          console.log(err.message)
        })
    })

    // CREATE
    app.post('/posts/', (req, res) => {

    //Instatiate instance of post model
    var post = new Post(req.body);
    post.author = req.user._id

    post.save().then((post) => {
      return User.findById(req.user._id)
    }).then((user) => {
      user.posts.unshift(post);
      user.save();
      // REDIRECT TO THE NEW POST
      res.redirect('/posts/'+ post._id)
    }).catch((err) => {
      console.log(err.message);
    });

})

};
