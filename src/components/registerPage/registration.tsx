import { Button, Paper } from "@material-ui/core";
import React from "react";
import "./registration.scss";
import { ReactComponent as Kid } from "../mainPage/kid.svg";
import { Box } from "@material-ui/system";
import RegisterInput, { registerInitValues } from "../registerInput/registerInput";
import { registerValidation } from "../registerInput/validation";
import "../mainPage/mainPage.scss";
import { Form, Formik } from "formik";
import AdressInput, { adressInitial } from "../registerInput/adress";

const Registration: React.FC = () => {
  const boxStyles: Object = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  return (
    <Paper elevation={3} className="page_paper">
      <Kid className="page_registerPage_icon" />
      <Box sx={boxStyles}>
        <h1 className="page_registerPage_h1">Книгомен</h1>
        <h2 className="page_registerPage_h2">Регистрация</h2>
        <Formik
          onSubmit={(values) => console.log(values)}
          initialValues={{
            ...registerInitValues,
            adress: [adressInitial],
          }}
          validate={registerValidation}
        >
          <Form>
            <RegisterInput />
            <AdressInput num={0} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                m: "8px 0",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                className="page_registerPage_button"
              >
                Зарегистрироваться
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Paper>
  );
};

export default Registration;
