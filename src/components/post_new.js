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
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
        ></Field>
        <Field
          name="content"
          label="Post Content"
          component={this.renderField}
        ></Field>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  // if errors empty will submit the form
  return errors;
}

PostNew = reduxForm({
  form: "PostsNewForm",
  validate,
})(PostNew);

export default PostNew;
