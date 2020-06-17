import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions/index";

class PostsShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id],
});

const mapDispatchToProps = {
  fetchPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
