import React from "react";

import { Field, reduxForm } from "redux-form";

const StreamForm = (props) => {
  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };
  return (
    <form className="ui form" onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter name" />
      <Field name="description" component={renderInput} label="Enter Description" />
      <button className="ui button primary">Submit</button>
    </form>
  );
};
//COMPONENT RELATED CODE ENDS HEREON
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Title cant be empty!";
  }

  if (!formValues.description) {
    errors.description = "Empty decsription is invalid!";
  }

  return errors;
};
const renderInput = (formProps) => {
  //const className =
  return (
    <div className="ui field">
      <label>{formProps.label}</label>
      <input {...formProps.input} />
      {renderError(formProps.meta)}
    </div>
  );
};

const renderError = ({ error, touched }) => {
  if (touched && error) {
    return <div className="ui pointing  label">{error}</div>;
  }
};

export default reduxForm({
  form: "StreamForm",
  validate,
})(StreamForm);
