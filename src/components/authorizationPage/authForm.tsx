import React from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useFormik } from "formik";
import { validation } from "./validation";
import TextInput from "../customInputs/TextInput";

const AuthForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validate: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const inputProps: Object = {
    size: "small",
    variant: "standard",
    margin: "dense",
    fullWidth: true,
    required: true,
    onChange: formik.handleChange,
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <TextInput
          label="Логин"
          name="login"
          value={formik.values.login}
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          {...inputProps}
        />
        <TextInput
          label="Пароль"
          name="password"
          type="password"
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          {...inputProps}
        />
      </Box>
      <Button variant="contained" type="submit" className="page_authPage_button">
        Войти
      </Button>
    </form>
  );
};

export default AuthForm;
