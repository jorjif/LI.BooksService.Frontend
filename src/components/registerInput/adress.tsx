import { Box } from "@material-ui/system";
import TextInput from "../customInputs/TextInput";
import React from "react";

interface IProps {
  num: number;
}

export interface IAdressData {
  addrCity: string;
  addrStreet: string;
  addrStructure: string;
  addrHouse: string;
  addrApart: string;
  addrIndex: string;
}

export const adressInitial: IAdressData = {
  addrCity: "",
  addrStreet: "",
  addrStructure: "",
  addrHouse: "",
  addrApart: "",
  addrIndex: "",
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
    <Box sx={{ maxWidth: "560px" }}>
      <Box sx={boxStyle}>
        <Box sx={doubleBoxLeft}>
          <TextInput label="Город" name={`adress[${num}].addrCity`} required />
        </Box>
        <Box sx={doubleBox}>
          <TextInput label="Индекс" name={`adress[${num}].addrIndex`} required />
        </Box>
      </Box>
      <Box sx={boxStyle}>
        <Box sx={{ flex: 4 }}>
          <TextInput label="Улица" name={`adress[${num}].addrStreet`} required />
        </Box>
        <Box sx={{ flex: 1, m: "0 8px" }}>
          <TextInput label="Стр." name={`adress[${num}].addrStructure`} />
        </Box>
        <Box sx={{ flex: 1, m: "0 8px" }}>
          <TextInput label="Дом" name={`adress[${num}].addrHouse`} required />
        </Box>
        <Box sx={{ flex: 1 }}>
          <TextInput label="Кв." name={`adress[${num}].addrApart`} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdressInput;
