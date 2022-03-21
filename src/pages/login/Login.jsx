import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import InputEmail from "../../components/input/InputEmail";
import InputField from "../../components/input/InputField";
import InputPassword from "../../components/input/InputPassword/InputPassword";
import InputSelect from "../../components/input/InputSelect";

Login.propTypes = {};

const options = [
  { id: "1", title: "one" },
  { id: "2", title: "two" },
  { id: "3", title: "three" },
];

const schema = yup.object().shape({
  // input: yup.string().min(4, "Ít nhất 4 kí tự"),
  // email: yup.string().email().required(),
  //   password: yup.string().min(4).max(20),
  // select: yup.string().required(),
  password: yup.string().required(),
});

function Login(props) {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const formSubmitHandle = (data, e) => {
    console.log("saf", data);
  };
  return (
    <div style={{ margin: "30px" }}>
      <h2>Login</h2>
      <form onSubmit={methods.handleSubmit(formSubmitHandle)}>
        <FormProvider {...methods}>
          {/* <InputField name="input" label="Input" />
          <br /> */}
          {/* <InputEmail name="email" label="Email"/>
          <br />
          <InputSelect name="select" label="Select" options={options}/>
          <br /> */}
          <InputPassword name="password" label="Password" />
          <br />
          <input type="submit" />
        </FormProvider>
      </form>
    </div>
  );
}

export default Login;
