import React from "react";
import { Button } from "react-bootstrap";
import { useSnapshot } from "valtio";
import InputField from "../../fields/InputField.js";
import { signState } from "./index.js";
import SignInWrapper from "./SignInWrapper";

const Step1 = ({ classes }) => {
  const value = useSnapshot(signState);

  return (
    <SignInWrapper>
      <form>
        <InputField
          name="fullname"
          placeholder="Your Fullname"
          label="Enter Fullname"
          value={value.fullname}
          onChange={(e) => (signState.fullname = e.target.value)}
          required
        />
        <InputField
          name="email"
          type="email"
          placeholder="Enter Email Address"
          label="Email address"
          value={value.email}
          onChange={(e) => (signState.email = e.target.value)}
          required
        />
        <InputField
          name="password"
          type="password"
          placeholder="Enter Password"
          label="Create Password"
          value={value.password}
          onChange={(e) => (signState.password = e.target.value)}
          required
        />
        <div className={classes.checkboxContainer}>
          <input
            type="checkbox"
            name="terms"
            value={value.terms}
            onChange={(e) => (signState.terms = e.target.checked)}
          />{" "}
          I agree to terms & conditions
        </div>
        <Button
          className={classes.button}
          //   type="submit"
          onClick={() => {
            signState.activeStep = value.activeStep + 1;
          }}
        >
          Register Account
        </Button>
        <span className={classes.or}>Or</span>
        <GoogleButton classes={classes} />
      </form>
    </SignInWrapper>
  );
};

export default Step1;

export const GoogleButton = ({ classes }) => {
  return (
    <div className={classes.googleButtonContainer}>
      <img
        src="/images/google.svg"
        alt="google"
        className={classes.googleImage}
      />
      <span>Register with Google</span>
    </div>
  );
};
