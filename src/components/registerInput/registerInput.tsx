import { Box } from "@material-ui/system";
import React from "react";
import TextInput from "../customInputs/TextInput";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";

interface IProps {
  onSubmit: Function;
  children: string;
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
    onSubmit: (form) => {
      onSubmit(form);
    },
  });
  const boxStyle: Object = {
    display: "flex",
    alignItems: "center",
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
              {...inputProps}
            />
          </Box>
          <Box sx={doubleBox}>
            <TextInput
              label="Отчество"
              name="patronymic"
              value={formik.values.patronymic}
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
              {...inputProps}
            />
          </Box>
          <Box sx={{ flex: 1, m: "8px" }}>
            <TextInput
              label="Стр."
              name="building"
              value={formik.values.building}
              {...inputProps}
            />
          </Box>
          <Box sx={{ flex: 1, m: "8px" }}>
            <TextInput
              label="Дом"
              name="buildingNum"
              value={formik.values.buildingNum}
              required
              {...inputProps}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <TextInput
              label="Кв."
              name="apartament"
              value={formik.values.apartament}
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
