const router = require('express').Router();

const Blog = require('../models/Blog');

//route to get all blogs
router.get('/', async (req, res) => {
    const blogData = await Blog.findAll().catch((err) => {
        res.json(err);
    });
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render('all', { blogs });
});

//route to get one blog
router.get('/blog/:id', async (req, res) => {
    try {
        //find dis of :id
        const blogData = await Blog.findByPk(req.params.id);
        //if found...
        if (!blogData) {
            return;
        }
        //serialize data
        const blog = blogData.get({ plain: true });
        res.render('blog', blog);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;