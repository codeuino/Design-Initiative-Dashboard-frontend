import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap';

class PostItem extends Component {
  state = {
    post: {}
  }
  componentWillReceiveProps(nextProps) {
    console.log("NextProps ", nextProps);
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Card>
            <CardHeader>Header</CardHeader>
            <CardBody>
              <CardTitle>{post.title}</CardTitle>
                <CardText>{post.content}</CardText>
                <Button>Go somewhere</Button>
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
      </div>
    )
  }
}
PostItem.protoType = {
  post: PropTypes.object.isRequired
}
export default PostItem;