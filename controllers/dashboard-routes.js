const router = require('express').Router();
const { User, Blog, Comment } = require('../models')

// GET all users
router.get('/', async (req, res) => {
 
      try {
      const userData = await Blog.findAll();
  
      //convert plain text for handlebars
      const user = userData.map((user) => user.get({ plain: true })
      );
      
      res.render('dashboard', {
        user,
    
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  })

//route to get user data
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk({
          where: {
            id: req.params.id
          }
        })

        if (!userData) {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }

        const user = userData.get({plain: true});

        res.render('dashboard', { user })

    } catch (err) {
      console.log(`ERROR: http://localhost:3001/dashboard/${req.params.id}`)
        res.status(500).json(err);
    };

});

module.exports = router;