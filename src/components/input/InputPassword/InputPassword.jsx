import { TextField } from "@mui/material";
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Controller, useFormContext } from "react-hook-form";
import './InputPassword.scss';

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

function InputPassword(props) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { name, label } = props;
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div className="InputPassword">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <TextField
              {...field}
              fullWidth
              type={!isShowPassword? "password" : "text"}
              label={label}
              variant="standard"
              error={!!errors[name]}
              helperText={errors[name] ? errors[name]?.message : ""}
            />
            {isShowPassword&&<VisibilityIcon onClick={() =>setIsShowPassword(!isShowPassword)}/>}
            {!isShowPassword&&<VisibilityOffIcon onClick={() =>setIsShowPassword(!isShowPassword)}/>}          
          </>
        )}
      />
    </div>
  );
}

export default InputPassword;
