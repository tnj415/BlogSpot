const router = require('express').Router();

const Comment = require('../models/Blog');

//route to get all comments
router.get('/', async (req, res) => {
    const commentData = await Comment.findAll().catch((err) => {
        res.json(err);
    });
    const comment = commentData.map((comment) => comment.get({ plain: true }));
    res.render('all', { comment });
});

//route to get one comment
router.get('/blog/:id', async (req, res) => {
    try {
        //find ids of :id
        const commentData = await Comment.findByPk(req.params.id);
        //if found...
        if (!commentData) {
            return;
        }
        //serialize data
        const comment = commentData.get({ plain: true });
        res.render('blog', blog);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:id', async (req, res) => {
    try{
        const comment = await Comment.update (
            req.body,
            { where: { id: req.params.id }}
        )
        res.status(200).json(comment);
    }
    catch (err) {

    }
})

module.exports = router;