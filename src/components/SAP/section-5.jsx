import React, { useState, useContext } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";

import { sapformStatus } from "../../contexts/formContexts";

import NextButton from "../next-button";

const Section2 = () => {
  const { formStatus_sap, set_formStatus_sap, setExpanded_sap, formData } =
    useContext(sapformStatus);

  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");
  const [a16, set_a16] = useState("");

  const handleNext = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("next clicked");
    if (
      checkfield(a11) &&
      checkfield(a12) &&
      checkfield(a13) &&
      checkfield(a14) &&
      checkfield(a15) &&
      checkfield(a16)
    ) {
      const section_data = {
        a11: a11,
        a12: a12,
        a13: a13,
        a14: a14,
        a15: a15,
        a16: a16,
      };
      console.log("sap - section5:", formData);
      formData.current.sap.section5 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section5: true });
      setExpanded_sap("section6");
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <form autoComplete="off" onSubmit={(e) => handleNext(e)}>
      <Stack direction={"column"} spacing={2}>
        <TextFieldComponent
          question={a11}
          set_question={set_a11}
          label="School provide dustbins in each class room, kitchen area, toilets and at other appropriate locations for collection of waste"
        />
        <TextFieldComponent
          question={a12}
          set_question={set_a12}
          label="Does the school segregate wet waste (bio-degradable waste) and dry waste (non- biodegradable waste)?"
        />
        <TextFieldComponent
          question={a13}
          set_question={set_a13}
          label=" How does the school compost its own biodegradable waste (wet waste)? (Yes in school premises)"
        />
        <TextFieldComponent
          question={a14}
          set_question={set_a14}
          label="How does the school dispose its, non- biodegradable waste"
        />
        <TextFieldComponent
          question={a15}
          set_question={set_a15}
          label="Is the school premises clean (free from littering)?"
        />
        <TextFieldComponent
          question={a16}
          set_question={set_a16}
          label="School premises clean and free of water logging"
        />
        <NextButton type="submit" />
      </Stack>
    </form>
  );
};

export default Section2;
