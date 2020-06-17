import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";

export class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return <div>Posts Show</div>;
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id],
});

const mapDispatchToProps = {
  fetchPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
