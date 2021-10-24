import React from "react";
import { Form, Formik } from "formik";
import RegisterInput, {
  registerInitValues,
} from "../../registerInput/registerInput";
import { registerValidation } from "../../registerInput/validation";

const EditData: React.FC = () => {
  return (
    <Formik
      validate={registerValidation}
      initialValues={registerInitValues}
      onSubmit={(val) => console.log(val)}
    >
      <Form>
        <RegisterInput />
      </Form>
    </Formik>
  );
};
