const Post = require('../model/Post');
const HTTP_STATUS = require('../utility/constants');

module.exports = {
  // func to create post 
  createPost: async (req, res, next) => {
    const { title } = req.body;
    // check if post with same title exists 
    const post = await Post.findOne({ title });
    if(post) {
      return res.status(HTTP_STATUS.CONFLICT).json({error: 'Post with same title already exists!'});
    }
    const newPost = new Post(req.body);
    const postData = await newPost.save();
    return res.status(HTTP_STATUS.CREATED).json({ post: postData });
  },
  // func to get all the posts 
  getPosts: async (req, res, next) => {
    const posts = await Post.find({}).lean();
    return res.status(HTTP_STATUS.OK).json({ posts });    
  }
}