import React from "react";
import { Button } from "react-bootstrap";
import { useSnapshot } from "valtio";
import InputField from "../../fields/InputField.js";
import { signState } from "./index.js";
import SignInWrapper from "./SignInWrapper";

const Step3 = ({ classes }) => {
  const value = useSnapshot(signState);

  return (
    <SignInWrapper>
      <form>
        <InputField
          name="bvn"
          type="text"
          placeholder="Your bank verification number"
          label="Bank verification number (BVN)"
          value={value.bvn}
          onChange={(e) => (signState.bvn = e.target.value)}
          required
        />
        <Button
          className={classes.button}
          onClick={() => {
            signState.activeStep = value.activeStep + 1;
          }}
        >
          Save & Continue
        </Button>
      </form>
    </SignInWrapper>
  );
};

export default Step3;
