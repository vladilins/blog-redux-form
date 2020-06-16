import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";

export class PostIndex extends Component {
  componentDidMount() {
    fetchPosts();
  }

  render() {
    return <div>Post Index</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
