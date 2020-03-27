const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const Post = require('../model/Post');
const server = require('../app');
chai.use(chaiHttp);

// testing get all posts
function getAllPosts(done) {
  chai.request(server)
    .get('/post/all')
    .end(function (err, res) {
      res.body.should.be.a('object');
      res.status.should.equal(200);
      res.body.posts.should.be.a('array');
      done();
    });
}

describe('GET :: /posts/all/',()=>{
  it('It should fetch all the posts: ', (done)=>{
    getAllPosts(done);
  })
})