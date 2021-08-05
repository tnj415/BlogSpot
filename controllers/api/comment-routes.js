const router = require('express').Router();
const withAuth = require('../../utils/auth');

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
    console.log("req.session: " , req.session)
    try {
        const commentData = await Comment.create({ 
            ...req.body,
            username: req.session.username,
            user_id: req.session.user_id
        
        })
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
            { where: { blog_id: req.params.id }}
        )
        res.status(200).json(comment);
    }
    catch (err) {

    }
})

//delete
router.delete('/:id', async (req, res) => {
    console.log("entered route")
    try{
        const comment = await Comment.destroy (
            { where: { id: req.params.id }}
        )
        res.status(200).json(comment);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})

module.exports = router;