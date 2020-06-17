import React, { Component } from "react";
import { connect } from "react-redux";

export class PostsShow extends Component {
  render() {
    return <div>Posts Show</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
