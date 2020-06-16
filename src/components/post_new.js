import React, { Component } from "react";
import { connect } from "react-redux";

export class PostNew extends Component {
  render() {
    return <div>Post New</div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostNew);
