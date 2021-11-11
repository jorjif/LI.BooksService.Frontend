import React from "react";
import { FieldArray, Form, Formik } from "formik";
import RegisterInput, {
  registerInitValues,
} from "../../registerInput/registerInput";
import { registerValidation } from "../../registerInput/validation";
import AdressInput, { adressInitial } from "../../registerInput/adress";
import { Box } from "@material-ui/system";
import { Button } from "@material-ui/core";

const EditData: React.FC = () => {
  return (
    <Formik
      validate={registerValidation}
      initialValues={{ ...registerInitValues, adress: [adressInitial] }}
      onSubmit={(val) => console.log(val)}
    >
      {({ values }) => (
        <Form>
          <RegisterInput />
          <FieldArray name="adress">
            {({ insert, remove, push }) => (
              <Box>
                {values.adress &&
                  values.adress.map((adress, index) => (
                    <Box key={index}>
                      <h1 className="page_userPage_subHeader">Адрес {index + 1}</h1>
                      <AdressInput num={index} />
                      <Button
                        variant="contained"
                        className="page_userPage_delete"
                        onClick={() => remove(index)}
                      >
                        Удалить
                      </Button>
                    </Box>
                  ))}
                <Button
                  className="page_userPage_button"
                  onClick={() => push(adressInitial)}
                >
                  Добавить адрес
                </Button>
              </Box>
            )}
          </FieldArray>
          <Box sx={{ display: "flex", justifyContent: "flex-end", m: "16px 0 0 0" }}>
            <Button className="page_userPage_button" type="submit">
              Сохранить
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default EditData;
