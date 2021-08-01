const router = require('express').Router();
const { Blog, Comment } = require('../models');

// GET all blogs for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
    //   include: [
    //     {
    //       model: ,
    //       attributes: [],
    //     },
    //   ],
    });

    const blogs = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one blog
router.get('/blog/:id', async (req, res) => {
  try {
    const dbBlogData = await Blog.findByPk(req.params.id, {
    //   include: [
    //     {
    //       model: ,
    //       attributes: [],
    //     },
    //   ],
    });

    const blog = dbBlogData.get({ plain: true });
    // Send over the 'loggedIn' session variable to the 'blog' template
    res.render('blog', { blog, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one comment
router.get('/comment/:id', async (req, res) => {
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

module.exports = router;
