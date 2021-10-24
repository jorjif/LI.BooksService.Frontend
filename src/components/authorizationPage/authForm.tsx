import React from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Field, Form, Formik } from "formik";
import { validation } from "./validation";
import TextInput from "../customInputs/TextInput";

const AuthForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        login: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validation}
    >
      <Form>
        <Box>
          <TextInput label="Логин" name="login" />
          <TextInput label="Пароль" name="password" type="password" />
        </Box>
        <Button variant="contained" type="submit" className="page_authPage_button">
          Войти
        </Button>
      </Form>
    </Formik>
  );
};

export default AuthForm;
