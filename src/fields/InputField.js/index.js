import React from "react";
import "./style.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const InputField = (props) => {
  return (
    <div className="inputFieldContainer">
      {props.name && (
        <>
          <label htmlFor={props.name}>
            {props.label}
            {props.required && "*"}
          </label>
          <br />
        </>
      )}
      {props.type === "phone" ? (
        <div>
          <PhoneInput
            className="inputFieldContainer"
            placeholder="Enter phone number"
            value={props.value}
            onChange={props.onChange}
          />
        </div>
      ) : props.type === "select" ? (
        <select {...props} className="select">
          <option value="">{props.placeholder}</option>
          {props.options.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.name}
              </option>
            );
          })}
        </select>
      ) : (
        <input {...props} />
      )}
    </div>
  );
};

export default InputField;
