import React from "react";
import { string, number, oneOfType, bool } from "prop-types";

import { InputWrapper, InputField } from "./styles";

function Input({ width, height, type, value, placeholder, checked, ...props }) {
  return (
    <InputWrapper>
      <InputField
        {...props}
        width={width}
        required
        type={type}
        value={value}
        name={name}
        checked={checked}
        height={height}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

Input.displayName = "Input";

Input.defaultProps = {
  placeholder: "",
  type: "text",
  name: "",
  value: "",
  checked: false
};

Input.propTypes = {
  placeholder: string,
  type: string,
  name: string,
  width: number,
  checked: bool,
  height: number,
  value: oneOfType([number, string])
};

export default Input;
