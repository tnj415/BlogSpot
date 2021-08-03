const router = require('express').Router();
const { Blog, Comment } = require('../models');

// GET all blogs for homepage
router.get('/', async (req, res) => {
    try {
    const dbBlogData = await Blog.findAll();
    //convert plain text for handlebars
    const blogs = dbBlogData.map((blog) => blog.get({ plain: true }));
    // Send over the blogs and 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
//}
//  else res.redirect('login');

});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  console.log("req.session.loggedIn", req.session.loggedIn)
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

//Sign up route
router.get('/signup', (req, res) => {
  console.log("req.session.loggedIn", req.session.loggedIn)
  if (req.session.loggedIn) {
      res.redirect('/');
      return;
  }

  // Otherwise, render the 'signup' template
  res.render('signup', {
  });
});

// GET one blog
router.get('/blog/:id', async (req, res) => {
  
  //if (req.session.loggedIn) {
    try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          attributes: [{
            content: req.body.content, content,
            user_id: req.body.user_id
          }],
        },
      ],
    });

    const blog = dbBlogData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'blog' template
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
//}
 // else res.redirect('login');
});

// GET one comment
router.get('/comment/:id', async (req, res) => {
  //if (req.session.loggedIn) {
    try {
    const dbCommentData = await Comment.findByPk(req.params.id);
    comment
    const comment = dbCommentData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('comment', { comment, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
//}
 // else res.redirect('login');
});

module.exports = router;
