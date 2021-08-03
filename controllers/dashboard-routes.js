const router = require('express').Router();
const { User, Blog, Comment } = require('../models')

// // GET all users
// router.get('/', async (req, res) => {

//   try {
//     const userData = await Blog.findAll();

//     //convert plain text for handlebars
//     const dashboardInfo = userData.map((user) => user.get({ plain: true })
//     );

//     res.render('dashboard', {
//       dashboardInfo,

//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }

// })


// router.get('/:id', async (req, res) => {
//   return res.render('dashboard', User[req.params.num - 1]);
// });

//route to get user data
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {

      include: [{
        model: Blog,
        where: { id, user_id: req.params.id }
      },
      {
        model: Comment,
        where: { user_id: req.params.id}
      }],    


    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    const dashboardInfo = userData.get({ plain: true });
    console.log("USER:\n", dashboardInfo)

    res.render('dashboard', {dashboardInfo})

  } catch (err) {
    console.log(`ERROR: http://localhost:3001/dashboard/${req.params.id}`)
    console.log(err)
    res.status(500).json(err);
  };

});

module.exports = router;