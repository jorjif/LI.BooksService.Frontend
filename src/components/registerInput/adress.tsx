import { Box } from "@material-ui/system";
import TextInput from "../customInputs/TextInput";
import { Form } from "formik";
import React from "react";

interface IProps {
  num: number;
}

export interface IAdressData {
  city: string;
  street: string;
  building: string;
  buildingNum: string;
  apartament: string;
  index: string;
}

export const AdressInitial: IAdressData = {
  city: "",
  street: "",
  building: "",
  buildingNum: "",
  apartament: "",
  index: "",
};

const AdressInput: React.FC<IProps> = ({ num }) => {
  const boxStyle: Object = {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  };
  const doubleBox: Object = {
    flex: 1,
  };
  const doubleBoxLeft: Object = {
    ...doubleBox,
    marginRight: "16px",
  };
  return (
    <Box>
      <Box sx={boxStyle}>
        <Box sx={doubleBoxLeft}>
          <TextInput label="Город" name={`adress[${num}].city`} required />
        </Box>
        <Box sx={doubleBox}>
          <TextInput label="Индекс" name={`adress[${num}].index`} required />
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={{ flex: 4 }}>
          <TextInput label="Улица" name={`adress[${num}].street`} required />
        </Box>
        <Box sx={{ flex: 1, m: "0 8px" }}>
          <TextInput label="Стр." name={`adress[${num}].building`} />
        </Box>
        <Box sx={{ flex: 1, m: "0 8px" }}>
          <TextInput label="Дом" name={`adress[${num}].buildingNum`} required />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextInput label="Кв." name={`adress[${num}].apartament`} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdressInput;
