import React from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Field } from "formik";
import { validation } from "./validation";
import TextInput from "../customInputs/TextInput";

const AuthForm: React.FC = () => {
  /*const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validate: validation,
    onSubmit: (values) => {
      console.log(values);
    },
  });*/

  return (
    <form>
      <Box>
        <Field as={TextInput} label="Логин" name="login" />
        <Field as={TextInput} label="Пароль" name="password" type="password" />
      </Box>
      <Button variant="contained" type="submit" className="page_authPage_button">
        Войти
      </Button>
    </form>
  );
};

export default AuthForm;
