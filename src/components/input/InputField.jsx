import { TextField } from "@mui/material";
import React from "react";
import { PropTypes } from "prop-types";
import { Controller, useFormContext } from "react-hook-form";

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function InputField(props) {
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
            type="text"
            label={label}
            fullWidth
            variant="standard"
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : " "}
          />
        )}
      />
    </>
  );
}

export default InputField;
