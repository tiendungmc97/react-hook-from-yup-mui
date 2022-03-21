import { TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

InputEmail.propTypes = {};

function InputEmail(props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  console.log(useFormContext());
  return (
    <>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="email"
            label="Email"
            variant="standard"
            fullWidth
            error={!!errors.email}
            helperText={errors.email ? errors.email?.message : " "}
          />
        )}
      />
    </>
  );
}

export default InputEmail;
