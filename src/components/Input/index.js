import React from "react";
import { InputBelow, InputWrapper, LabelAbove } from "./styles";

const Input = React.forwardRef(
  ({ name, label, value, type = "text", ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelAbove for={name}>{label}</LabelAbove>
        <InputBelow name={name} type={type} ref={ref} value={value} />
      </InputWrapper>
    );
  }
);

export const TextInput = React.forwardRef((props, ref) => (
  <Input type="text" {...props} ref={ref} />
));
export const PasswordInput = React.forwardRef((props, ref) => (
  <Input type="password" {...props} ref={ref} />
));
