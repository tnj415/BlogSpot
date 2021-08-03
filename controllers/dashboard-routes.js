const router = require('express').Router();
const { User, Blog, Comment } = require('../../models')

//route to get user data
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [
                {
                    model: Blog,
                    attributes: {
                        blog_title,
                        content
                    }
                },
                {
                    model: Comment,
                    attributes: {
                        blog_id,
                        content

                    }
                }
            ]
        })

        if (!userData) {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }

        res.status(200).json(userData);

    } catch (err) {
        res.json(err);
    };

});

module.exports = router;