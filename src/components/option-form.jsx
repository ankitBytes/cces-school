import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import PropTypes from "prop-types";

const OptionForm = ({
  question,
  set_question,
  label,
  options,
  helperText,
  ...others
}) => {
  return (
    <FormControl {...others} required>
      <FormLabel
        id="demo-customized-select-label"
        sx={{ wordWrap: "break-word" }}
      >
        {label}
      </FormLabel>
      <Select
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.trim().toLowerCase()}>
            {option}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
OptionForm.propTypes = {
  question: PropTypes.string.isRequired,
  set_question: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  helperText: PropTypes.string,
  others: PropTypes.any,
};

export default OptionForm;
