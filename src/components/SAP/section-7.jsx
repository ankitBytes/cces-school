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

  const handleNext = (e) => {
    e.preventDefault();

    if (
      checkfield(a11) &&
      checkfield(a12) &&
      checkfield(a13) &&
      checkfield(a14) &&
      checkfield(a15)
    ) {
      const section_data = {
        a11: a11,
        a12: a12,
        a13: a13,
        a14: a14,
      };
      console.log("sap - section7:", formData);
      formData.current.sap.section7 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section7: true });
      setExpanded_sap("section8");
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
          label="Has the school developed it’s own school-level strategies/ standard operating procedures (SOP) for reducing energy consumption?"
        />
        <TextFieldComponent
          question={a12}
          set_question={set_a12}
          label=" Has your school taken significant steps to maximize the usage of natural lighting throughout the building?"
        />
        <TextFieldComponent
          question={a13}
          set_question={set_a13}
          label="Does your school generate/use energy from any of the renewable sources"
        />
        <TextFieldComponent
          question={a14}
          set_question={set_a14}
          label=" Whether school use energy-efficient cookware, such as stove pressure cookers and/ or solar cookers?"
        />
        <TextFieldComponent
          question={a15}
          set_question={set_a15}
          label=" Has your school undertaken any assessment of electricity consumption in school?"
        />
        <NextButton type="submit" />
      </Stack>
    </form>
  );
};

export default Section2;
