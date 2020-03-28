const mongoose = require('mongoose')
const validator = require('validator')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    validate(postTitle) {
      if(validator.isEmpty(postTitle)) {
        throw new Error("Post title is required!");
      }
    }
  },
  content: {
    type: String,
    trim: true,
    required: true,
    validate(content) {
      if (validator.isEmpty(content)) {
        throw new Error('Post content can not be empty!')
      }
    }
  },
  image: {
    data: Buffer,
    contentType: String
  },
  imgUrl: {
    type: String,
    trim: true,
    validator(imgUrl) {
      if (!validator.isURL(imgUrl)) {
        throw new Error('Invalid image URL!')
      }
    }
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  }
})

module.exports = mongoose.model('Post', PostSchema)
