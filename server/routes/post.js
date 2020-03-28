const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// add post 
router.post(
  '/create', 
  postController.createPost
);

// get all posts 
router.get(
  '/all',
  postController.getPosts
);

module.exports = router;