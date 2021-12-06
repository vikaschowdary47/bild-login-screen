import React from "react";
import { useSnapshot } from "valtio";
import { signState } from "..";
import classes from "./SignInWrapper.module.css";

const SignInWrapper = ({ children }) => {
  const value = useSnapshot(signState);

  return (
    <div>
      <div className={classes.signInWrapper}>
        {value.activeStep === 0 ? (
          <div className={classes.topLink}>
            Already have an account? <a href="/">Sign In</a>
          </div>
        ) : (
          <div className={classes.stepHeaderContainer}>
            <div
              className={classes.arrowContainer}
              onClick={() => {
                signState.activeStep = value.activeStep - 1;
              }}
            >
              <img src="/images/left_arrow.svg" alt="left arrow" />
              Back
            </div>
            <div>
              <span>STEP 0{value.activeStep}/03</span>
              <br />
              {value.activeStep === 1
                ? "Personal Info"
                : value.activeStep === 2
                ? "Recidency Info."
                : "Bank Verfication."}
            </div>
          </div>
        )}
      </div>
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          {
            <h1>
              {value.activeStep === 0
                ? "Join Us!"
                : value.activeStep === 1
                ? "Register Individual Account!"
                : value.activeStep === 2
                ? "Complete Your Profile!"
                : "Complete Your Profile!"}
            </h1>
          }
          <p>
            {value.activeStep === 0
              ? "To begin this journey, tell us what type of account you’d be opening."
              : "Complete Your Profile!"}
          </p>
          {children}
          {value.activeStep === 2 ||
            (value.activeStep === 3 && (
              <div className={classes.securityInfo}>
                <img src="/images/lock.svg" alt="lock" />
                Your Info is safely secured
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SignInWrapper;
