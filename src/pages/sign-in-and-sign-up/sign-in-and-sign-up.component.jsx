import React from "react";
import Signin from "../../components/signin/signin.component";
import Signup from "../../components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};
export default SignInAndSignUpPage;
