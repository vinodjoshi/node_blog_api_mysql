const Post = require('../models/Post')

exports.getAllPosts = async(req, resp, next) => {
    try {
        const [posts, _] = await Post.findAll();
        resp.status(200).json({posts})
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.storeNewPost = async(req, resp, next) => {
    let {title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();

    console.log(post)

    resp.send('Post Createed Successfully.');
}

exports.getPostById = async(req, resp, next) => {

    try {
        const postId = req.params.id;
        let [post, _] = await Post.findById(postId);
        resp.status(200).json({post})
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.deletePostById  = async(req, resp, next) => {
    try {
        const postId = req.params.id;
        await Post.deleteById(postId);
        resp.send('Post Deleted Successfully.');
        
    } catch (error) {
        console.log(error);
        next(error)
    }
}