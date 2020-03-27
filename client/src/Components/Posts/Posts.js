import React, { Component } from 'react'
import axios from 'axios';
import PostItem from './PostItem';
import { Card, CardText } from 'reactstrap';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    }
  }

  componentDidMount() {
  axios.get('/post/all')
    .then((res) => {
      if (res.data.posts) {
        this.setState({
          posts: res.data.posts,
          loading: false
        });
      }
    });
  }
  render() {
    const { posts, loading } = this.state;
    let content;
    if(loading || posts === null){
      content = (
         <Card body className="text-center">
        <CardText>
          <p><b>Loading posts...</b></p>
        </CardText>
      </Card>
      )
    } else {
      content = posts.map(post => (
          <PostItem post={post} key={post._id} />
      ))
    }
    return (
     <div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h5 style={{textAlign: "left"}}>Posts: </h5>
            {content}
          </div>
          <div className="col-md-2"></div>
        </div>
     </div>
    )
  }
}
export default Posts;