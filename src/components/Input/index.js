import React from "react";
import { InputBelow, InputWrapper, LabelAbove } from "./styles";

const Input = React.forwardRef(
  ({ name, label, value, type = "text", ...props }, ref) => {
    return (
      <InputWrapper>
        <LabelAbove htmnlFor={name}>{label}</LabelAbove>
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

export const RadioInput = ({ name, value, label }, ref) => {
  return (
    <input type="radio" name={name} ref={ref} checked={value}>
      <label htmlFor={name}>{label}</label>
    </input>
  );
};

export const RadioGroup = React.forwardRef((props, ref) => {
  const radioItems = props?.items || [];

  return radioItems.map((item, index) => (
    <RadioInput key={`radio_${index}`} {...props} />
  ));
});
