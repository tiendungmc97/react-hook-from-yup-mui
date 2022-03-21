import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

InputField.propTypes = {};

function InputField(props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const {name} = props;
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
            label="Ten"
            variant="standard"
            error={!!errors.firstName}
            helperText={errors.firstName ? errors.firstName?.message : ""}
          />
        )}
      />
    </>
  );
}

export default InputField;