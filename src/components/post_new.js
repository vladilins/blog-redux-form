import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

export class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type="text" className="form-control" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField}></Field>
        <Field name="tags" label="Tag" component={this.renderField}></Field>
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        ></Field>
      </form>
    );
  }
}

PostNew = reduxForm({
  form: "PostsNewForm",
})(PostNew);

export default PostNew;
