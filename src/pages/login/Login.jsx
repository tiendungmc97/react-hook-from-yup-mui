import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import InputEmail from "../../components/input/InputEmail";
import InputField from "../../components/input/InputField";

Login.propTypes = {};

const schema = yup.object().shape({
  firstName: yup.string().min(4, "Ít nhất 4 kí tự"),
  email: yup.string().email().required(),
  //   password: yup.string().min(4).max(20),
});

function Login(props) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmitHandle = (data, e) => {
    console.log("saf", data);
  };
  //   console.log("watch", methods.watch(methods));
  return (
    <div style={{ margin: "30px" }}>
      <h2>Login</h2>
      <form onSubmit={methods.handleSubmit(formSubmitHandle)}>
        <FormProvider {...methods}>
          <InputField name="firstName" label="Họ và Tên"/>
          <br />
          <InputEmail />
          <br />

          <input type="submit" />
        </FormProvider>
      </form>
    </div>
  );
}

export default Login;
