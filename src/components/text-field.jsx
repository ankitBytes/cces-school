import React from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";

const TextFieldComponent = (props) => {
  const { question, set_question, label, type, ...others } = props;
  return (
    <FormControl fullWidth required>
      <FormLabel id="demo-customized-select-label">{label}</FormLabel>
      <TextField
        variant="outlined"
        size="small"
        value={question}
        onChange={(e) => set_question(e.target.value)}
        type={type}
        required
        {...others}
      />
    </FormControl>
  );
};

TextFieldComponent.propTypes = {
  question: PropTypes.string.isRequired,
  set_question: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
};
export default TextFieldComponent;
