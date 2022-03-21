import {
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

InputSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

function InputSelect(props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { name, label, options } = props;
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl variant="standard" fullWidth error={!!errors[name]}>
            <InputLabel id="name">{label}</InputLabel>
            <Select {...field} labelId="name" id="name" label={label}>
              {options.map((option) => {
                return (
                  <MenuItem value={option.id} key={option.id}>
                    {option.title}
                  </MenuItem>
                );
              })}
            </Select>
            <FormHelperText>
              {!!errors[name] ? errors[name]?.message : " "}
            </FormHelperText>
          </FormControl>
        )}
      />
    </>
  );
}

export default InputSelect;
