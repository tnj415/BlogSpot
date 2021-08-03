const router = require('express').Router();

const Comment = require('../../models/Comment');

//route to get all comments
router.get('/', async (req, res) => {
    const commentData = await Comment.findAll().catch((err) => {
        res.json(err);
    });
    const comment = commentData.map((comment) => comment.get({ plain: true }));
    res.render('all', { comment });
});

//route to get one comment
router.get('/:id', async (req, res) => {
    try {
        //find ids of :id
        const commentData = await Comment.findByPk(req.params.id);
        //if found...
        if (!commentData) {
            return;
        }
        //serialize data
        const comment = commentData.get({ plain: true });
        res.render('comment', comment);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    console.log("test", req.body)
    try {
        const commentData = await Comment.create(req.body,{user_id: req.params.user_id })
        //maybe need spread operator
        res.status(200).json(commentData);

    } catch (err) {
        console.log(err)
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