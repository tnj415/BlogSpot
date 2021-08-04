const router = require('express').Router();
// const withAuth = require('../../utils/auth');

const { Blog } = require('../../models');

// //route to get one blog
// router.get('/:id', async (req, res) => {

//     try {
//         //find ids of :id
//         const blogData = await Blog.findByPk(req.params.id);
//         //if found...
//         if (!blogData) {
//             return;
//         }
//         //serialize data
//         const blog = blogData.get({ plain: true });
//         res.render('blog', blog);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })

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
    try {
        const blog = await Blog.update(
            req.body,
            { where: { id: req.params.id } }
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
    try {
        const blog = await Blog.destroy(
            { where: { id: req.params.id } }
        )
        res.status(200).json(blog);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})

module.exports = router;