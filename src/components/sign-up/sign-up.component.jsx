import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            value={displayName}
            label="displayName"
            required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            label="confirmPassword"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
