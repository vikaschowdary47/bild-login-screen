import React from "react";
import Layout from "../Layout";
import Step from "./Step";
import classes from "./SignIn.module.css";
import Step1 from "./Step1";
import { proxy, useSnapshot } from "valtio";
import Step3 from "./Step3";
import Step2 from "./Step2";

export const signState = proxy({
  step: [0, 1, 2, 3, 4],
  activeStep: 0,
  fullname: "",
  email: "",
  password: "",
  terms: false,
  phone: "",
  address: "",
  country: "",
  bvn: "",
});

const SignIn = () => {
  const value = useSnapshot(signState);
  return (
    <Layout>
      {value.activeStep === 0 ? (
        <Step classes={classes} />
      ) : value.activeStep === 1 ? (
        <Step1 classes={classes} />
      ) : value.activeStep === 2 ? (
        <Step2 classes={classes} />
      ) : (
        <Step3 classes={classes} />
      )}
      {/* <Step classes={classes} /> */}
    </Layout>
  );
};

export default SignIn;
