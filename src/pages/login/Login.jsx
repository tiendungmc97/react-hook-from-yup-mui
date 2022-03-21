import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import InputEmail from "../../components/input/InputEmail";
import InputField from "../../components/input/InputField";
import InputSelect from "../../components/input/InputSelect";

Login.propTypes = {};

const options = [
  { id: "1", title: "one" },
  { id: "2", title: "two" },
  { id: "3", title: "three" },
];

const schema = yup.object().shape({
    firstName: yup.string().min(4, "Ít nhất 4 kí tự"),
    lastName: yup.string().min(4, "Ít nhất 4 kí tự"),
    email: yup.string().email().required(),
  //   password: yup.string().min(4).max(20),
    test: yup.string().required(),
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
          <InputField name="firstName" label="Họ và Tên" />
          <InputField name="lastName" label="Teen lot" />
          <br />
          <InputEmail name="email" label="Email"/>
          <br />
          <InputSelect name="test" label="Phong" options={options}/>
          <br />
          <br />
          <input type="submit" />
        </FormProvider>
      </form>
    </div>
  );
}

export default Login;
