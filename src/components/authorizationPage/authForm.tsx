import React from "react";
import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { Form, Formik } from "formik";
import { validation } from "./validation";
import TextInput from "../customInputs/TextInput";
import { useLoginMutation } from "../../app/store/api/apiSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { IUserData, setUserData } from "../../app/store/slices/userData";
import { saveState } from "../../app/store/localStorage";
import { IAuthPayload, setCredentials } from "../../app/store/slices/auth";

const AuthForm: React.FC = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      onSubmit={async ({ userName, password }) => {
        try {
          const loginCredentials = await login({ userName, password }).unwrap();
          const auth: IAuthPayload = {
            id: loginCredentials.userId,
            token: loginCredentials.token,
          };
          const userData: IUserData = {
            userName: loginCredentials.userName,
            firstName: loginCredentials.firstName,
          };
          dispatch(setCredentials(auth));
          dispatch(setUserData(userData));
          saveState({ auth, userData });
        } catch (err) {
          console.log(err);
        }
      }}
      validate={validation}
    >
      <Form>
        <Box>
          <TextInput label="Логин" name="userName" />
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
