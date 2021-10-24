import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/system";
import { useField } from "formik";

export const TextInputStyled = styled(TextField)({
  "& label.Mui-focused": {
    color: "#dda15e",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#606c38",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#283618",
    },
    "&:hover fieldset": {
      borderColor: "#606c38",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#606c38",
    },
  },
});
interface IProps {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
}

const TextInput: React.FC<IProps> = ({ name, label, required }) => {
  const [field, meta] = useField(name);
  const textfieldConfiguration: Object = {
    ...field,
    name,
    label,
    required,
    fullWidth: true,
  };

  return (
    <TextInputStyled
      error={meta.touched && !!meta.error}
      helperText={meta.touched && meta.error ? meta.error : ""}
      size="small"
      margin="dense"
      variant="standard"
      {...textfieldConfiguration}
    />
  );
};

export default TextInput;
