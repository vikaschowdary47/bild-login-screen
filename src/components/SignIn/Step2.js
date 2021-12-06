import React from "react";
import { Button } from "react-bootstrap";
import { useSnapshot } from "valtio";
import InputField from "../../fields/InputField.js";
import { signState } from "./index.js";
import SignInWrapper from "./SignInWrapper";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";

const Step2 = ({ classes }) => {
  const value = useSnapshot(signState);
  const [phoneValue, setValue] = React.useState();
  return (
    <SignInWrapper>
      <form>
        <InputField
          name="phone"
          type="phone"
          placeholder="Your phone number"
          label="Phone number"
          value={value.phone}
          onChange={(e) => (signState.phone = e)}
          required
        />

        <InputField
          name="address"
          type="text"
          placeholder="Please enter Address"
          label="Your address"
          value={value.address}
          onChange={(e) => (signState.address = e.target.value)}
          required
        />
        <InputField
          name="country"
          type="select"
          placeholder="Please select"
          label="Country of residence"
          options={[
            { name: "india", value: "india" },
            { name: "USA", value: "usa" },
          ]}
          value={value.country}
          onChange={(e) => (signState.country = e.target.value)}
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

export default Step2;
