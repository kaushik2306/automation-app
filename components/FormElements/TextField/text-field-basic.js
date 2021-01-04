import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { validate } from "../../../lib/basic-form-validator";

export default function TextFieldBasic({
  id,
  label,
  type,
  defaultValue,
  helperText,
  required,
  regexToMatch,
  errorMessage,
  autoFocus,
  handleChange,
  isError,
}) {
  const [fieldValue, setFieldValue] = useState(defaultValue);
  const [error, setError] = useState(isError);
  const [helperTextState, setHelperTextState] = useState(helperText);

  const handleOnChange = (e) => {
    let value = e.target.value;
    setFieldValue(value);

    let pattern = null;
    let isError = false;
    const obj = {
      id: id,
      value: value,
      regexToMatch: regexToMatch,
      required: required,
    };
    if (regexToMatch != null) {
      pattern = new RegExp(regexToMatch);
      if (validate(obj)) {
        setError(false);
        setHelperTextState(helperText);
        obj.isError = false;
      } else {
        setHelperTextState(errorMessage);
        setError(true);
        obj.isError = true;
      }
    } else if (required) {
      if (validate(obj)) {
        setError(false);
        setHelperTextState(helperText);
        isError = false;
        obj.isError = false;
      } else {
        setHelperTextState(errorMessage);
        setError(true);
        isError = true;
        obj.isError = true;
      }
    }
    handleChange(obj);

    // let matchResult = pattern.test(e.target.value);
    // if (regexToMatch != null && pattern.test(e.target.value)) {
    //   console.log("Pattern passed");
    //   setHelperTextState(errorMessage);
    // } else {
    //   setHelperTextState(helperText);
    // }
  };

  return (
    <TextField
      margin="dense"
      id={`${label}-${id}`}
      label={label}
      fullWidth
      type={type}
      value={fieldValue}
      helperText={helperTextState}
      variant="outlined"
      onChange={handleOnChange}
      error={error}
      autoFocus={autoFocus}
      required={required}
    />
  );
}
