import { Box } from "@material-ui/system";
import React from "react";
import TextInput from "../customInputs/TextInput";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import { registerValidation } from "./validation";

interface IProps {
  onSubmit: Function;
  children: string;
}

export interface IRegisterData {
  firstName: string;
  lastName: string;
  patronymic: string;
  city: string;
  street: string;
  building: string;
  buildingNum: string;
  apartament: string;
  index: string;
  mail: string;
  login: string;
  password: string;
}

const RegisterInput: React.FC<IProps> = ({ onSubmit, children }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      patronymic: "",
      city: "",
      street: "",
      building: "",
      buildingNum: "",
      apartament: "",
      index: "",
      mail: "",
      login: "",
      password: "",
    },
    validate: registerValidation,
    onSubmit: (form) => {
      onSubmit(form);
    },
  });
  const boxStyle: Object = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };
  const inputProps: Object = {
    size: "small",
    variant: "standard",
    margin: "dense",
    fullWidth: true,
    onChange: formik.handleChange,
  };
  const doubleBox: Object = {
    flex: 1,
  };
  const doubleBoxLeft: Object = {
    ...doubleBox,
    marginRight: "16px",
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ maxWidth: "560px" }}>
        <Box sx={boxStyle}>
          <TextInput
            label="Фамилия"
            name="lastName"
            required
            value={formik.values.lastName}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            {...inputProps}
          />
        </Box>
        <Box sx={boxStyle}>
          <Box sx={doubleBoxLeft}>
            <TextInput
              label="Имя"
              name="firstName"
              required
              value={formik.values.firstName}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              {...inputProps}
            />
          </Box>
          <Box sx={doubleBox}>
            <TextInput
              label="Отчество"
              name="patronymic"
              value={formik.values.patronymic}
              error={formik.touched.patronymic && Boolean(formik.errors.patronymic)}
              helperText={formik.touched.patronymic && formik.errors.patronymic}
              {...inputProps}
            />
          </Box>
        </Box>
        <Box sx={boxStyle}>
          <Box sx={doubleBoxLeft}>
            <TextInput
              label="Город"
              name="city"
              required
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
              value={formik.values.city}
              {...inputProps}
            />
          </Box>
          <Box sx={doubleBox}>
            <TextInput
              label="Индекс"
              name="index"
              value={formik.values.index}
              required
              error={formik.touched.index && Boolean(formik.errors.index)}
              helperText={formik.touched.index && formik.errors.index}
              {...inputProps}
            />
          </Box>
        </Box>
        <Box sx={boxStyle}>
          <Box sx={{ flex: 4 }}>
            <TextInput
              label="Улица"
              name="street"
              value={formik.values.street}
              required
              error={formik.touched.street && Boolean(formik.errors.street)}
              helperText={formik.touched.street && formik.errors.street}
              {...inputProps}
            />
          </Box>
          <Box sx={{ flex: 1, m: "0 8px" }}>
            <TextInput
              label="Стр."
              name="building"
              value={formik.values.building}
              error={formik.touched.building && Boolean(formik.errors.building)}
              helperText={formik.touched.building && formik.errors.building}
              {...inputProps}
            />
          </Box>
          <Box sx={{ flex: 1, m: "0 8px" }}>
            <TextInput
              label="Дом"
              name="buildingNum"
              value={formik.values.buildingNum}
              error={
                formik.touched.buildingNum && Boolean(formik.errors.buildingNum)
              }
              helperText={formik.touched.buildingNum && formik.errors.buildingNum}
              required
              {...inputProps}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextInput
              label="Кв."
              name="apartament"
              value={formik.values.apartament}
              error={formik.touched.apartament && Boolean(formik.errors.apartament)}
              helperText={formik.touched.apartament && formik.errors.apartament}
              {...inputProps}
            />
          </Box>
        </Box>
        <Box sx={boxStyle}>
          <TextInput
            label="E-mail"
            type="email"
            required
            name="mail"
            value={formik.values.mail}
            fullWidth
            error={formik.touched.mail && Boolean(formik.errors.mail)}
            helperText={formik.touched.mail && formik.errors.mail}
            {...inputProps}
          />
        </Box>
        <Box sx={boxStyle}>
          <Box sx={doubleBoxLeft}>
            <TextInput
              label="Логин"
              size="small"
              name="login"
              value={formik.values.login}
              error={formik.touched.login && Boolean(formik.errors.login)}
              helperText={formik.touched.login && formik.errors.login}
              required
              {...inputProps}
            />
          </Box>
          <Box sx={doubleBox}>
            <TextInput
              label="Пароль"
              type="password"
              name="password"
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              required
              {...inputProps}
            />
          </Box>
        </Box>
      </Box>
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
          {children}
        </Button>
      </Box>
    </form>
  );
};

export default RegisterInput;
