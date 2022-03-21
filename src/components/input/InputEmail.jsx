import { TextField } from "@mui/material";
import React from "react";
import {PropTypes} from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

InputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function InputEmail(props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { name, label } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label={label}
            variant="standard"
            fullWidth
            error={!!errors[name]}
            helperText={errors[name] ? errors[name]?.message : " "}
          />
        )}
      />
    </>
  );
}

export default InputEmail;
