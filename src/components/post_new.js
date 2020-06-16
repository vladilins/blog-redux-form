import React, { Component } from "react";

import { Field, reduxForm } from "redux-form";

export class PostNew extends Component {
  render() {
    return (
      <form
        action="
    "
      >
        <Field name="title" component={}></Field>
      </form>
    );
  }
}

export default reduxForm({
  form: "PostsNewForm",
})(PostNew);
