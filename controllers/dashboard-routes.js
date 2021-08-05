const router = require('express').Router();
const { User, Blog, Comment } = require('../models')
const withAuth = require('../utils/auth')

//route to get user data
router.get('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {

      include: [{
        model: Blog,
        where: { user_id: req.params.id }
      },
      {
        model: Comment,
        where: { user_id: req.params.id}
      }]
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