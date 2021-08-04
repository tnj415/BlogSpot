const router = require('express').Router();
const { Blog, Comment } = require('../models');
const withAuth = require('../utils/auth');


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
router.get('/auth', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  console.log("req.session.loggedIn", req.session.loggedIn)
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('user');
});

//route to get all blogs
router.get('/blog/:id', withAuth, async (req, res) => {
  console.log("hit");
  try {
      const blogData = await Blog.findByPk(req.params.id, {
          include: [{
              model: Comment,
              where: {blog_id: req.params.id}
          }]
      })

      if (!blogData) {
          res.status(404).json({ message: 'Blog Not Found!' });
          return;
      }
      //convert plain text for handlebars
      const blog = blogData.get({ plain: true });
      console.log("blog: ", blog)

      res.render('blog', {blog});

  } catch (err) {
      res.status(500).json(err);
  };
});

// //Sign up route
// router.get('/signup', (req, res) => {
//   console.log("req.session.loggedIn", req.session.loggedIn)
//   if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//   }

//   // Otherwise, render the 'signup' template
//   res.render('signup', {
//   });
// });

// // GET one blog
// router.get('/blog/:id', async (req, res) => {
  
//   //if (req.session.loggedIn) {
//     try {
//     const dbBlogData = await Blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: Comment,
//           attributes: [{
//             content: req.body.content, content,
//             user_id: req.body.user_id
//           }],
//         },
//       ],
//     });

//     const blog = dbBlogData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'blog' template
//     res.render('blog', { blog, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// //}
//  // else res.redirect('login');
// });

// // GET one comment
// router.get('/comment/:id', async (req, res) => {
//   //if (req.session.loggedIn) {
//     try {
//     const dbCommentData = await Comment.findByPk(req.params.id);
//     comment
//     const comment = dbCommentData.get({ plain: true });
//     // Send over the 'loggedIn' session variable to the 'homepage' template
//     res.render('comment', { comment, loggedIn: req.session.loggedIn });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// //}
//  // else res.redirect('login');
// });

module.exports = router;
