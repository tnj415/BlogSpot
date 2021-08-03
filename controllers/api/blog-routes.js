const router = require('express').Router();
//const withAuth = require('../../utils/auth');

const { Blog, Comment } = require('../../models');

//route to get all blogs
router.get('/', async (req, res) => {
    try {
    const blogData = await Blog.findAll({
        where: { id: blog_id },
            include: [{
                model: Comment,
                attributes: {
                    content, username

                },
                
            }]
        }
    )
    //convert plain text for handlebars
    const blogs = blogData.map((blog) => blog.get({ plain: true }));
    res.render('blog', { blogs });

} catch(err) {
    res.status(500).json(err);
};
});

//route to get one blog
router.get('/:id', async (req, res) => {
    
    try {
        //find ids of :id
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

//create
router.post('/', async (req, res) => {
    console.log("test", req.body)
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json(blog);

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

//update
router.put('/:id', async (req, res) => {
    try{
        const blog = await Blog.update (
            req.body,
            { where: { id: req.params.id }}
        )
        res.status(200).json(blog);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})

//delete
router.delete('/:id', async (req, res) => {
    try{
        const blog = await Blog.destroy (
            req.body,
            { where: { id: req.params.id }}
        )
        res.status(200).json(blog);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})

module.exports = router;