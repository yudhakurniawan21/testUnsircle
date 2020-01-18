import React from "react";
import { Field, reduxForm } from "redux-form";
import submit from "../submit";
import styles from "./login.module.css";

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="form-group">
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched && error && <span className={styles.danger}>{error}</span>}
    </div>
  </div>
);

const SubmitValidationForm = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h3>Sign In</h3>

      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
        className="form-group"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        label="Password"
        className="form-group"
      />
      {error && <p className={styles.danger}>{error}</p>}
      <div>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={submitting}
        >
          Log In
        </button>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
      </div>

      {/* <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
      <p className="forgot-password text-right">
        Forgot <a href="#" value="">
            password?
          </a>
      </p> */}
    </form>
  );
};
export default reduxForm({
  form: "submitValidation" // a unique identifier for this form
})(SubmitValidationForm);
