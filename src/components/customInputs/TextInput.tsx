import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/system";

const TextInput = styled(TextField)({
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
export default TextInput;
