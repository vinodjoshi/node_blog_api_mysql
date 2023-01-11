const express = require('express')
const PostController = require('../controllers/PostController')

const router = express.Router()

router.get('/', (req, resp) => {
    resp.render('home');
});
router.route('/posts')
    .get(PostController.getAllPosts)
    .post(PostController.storeNewPost);

router.route('/posts/:id')
    .get(PostController.getPostById)
    .delete(PostController.deletePostById);

module.exports = router