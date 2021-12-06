import React from "react";
import User from "../../icons/User";
import Briefcase from "../../icons/Briefcase";
import SignInWrapper from "./SignInWrapper/index";
import { useSnapshot } from "valtio";
import { signState } from "./index";

const Step = ({ classes }) => {
  const [activeType, setActiveType] = React.useState("");
  const value = useSnapshot(signState);

  const step0 = [
    {
      name: "Individual",
      description: "Personal account to manage all you activities.",
      icon: <User active={activeType === "Individual"} />,
    },
    {
      name: "Business",
      description: "Own or belong to a company, this is for you.",
      icon: <Briefcase active={activeType === "Business"} />,
    },
  ];

  return (
    <SignInWrapper>
      <div>
        {step0.map((step) => (
          <div
            className={`${classes.stepContainer} ${
              activeType === step.name && classes.active
            }`}
            key={step.name}
            onMouseOver={() => setActiveType(step.name)}
            onMouseOut={() => setActiveType("")}
            onClick={() =>
              value.activeStep === 0 &&
              (signState.activeStep = value.activeStep + 1)
            }
          >
            <div className={classes.iconContainer}>
              {activeType === step.name ? (
                <img src="/images/filled.svg" alt="filled" />
              ) : (
                <img src="/images/outline.svg" alt="outline" />
              )}
              <div className={classes.userIcon}>{step.icon}</div>
            </div>
            <div className={classes.content}>
              <h6>{step.name}</h6>
              <p>{step.description}</p>
            </div>
            <div
              className={classes.arrow}
              style={{
                visibility: activeType === step.name ? "visible" : "hidden",
              }}
            >
              <img src="/images/right_arrow.svg" alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </SignInWrapper>
  );
};

export default Step;
