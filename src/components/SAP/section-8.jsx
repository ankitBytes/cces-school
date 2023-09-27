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

  const handleNext = (e) => {
    console.log(e);
    e.preventDefault();
    console.log("next clicked");
    if (checkfield(a11) && checkfield(a12) && checkfield(a13)) {
      const section_data = {
        a11: a11,
        a12: a12,
        a13: a13,
      };
      console.log("sap - section8:", formData);
      formData.current.sap.section8 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section8: true });
      setExpanded_sap("section9");
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
          label=" Does the plantation of the species selected in the school are appropriate to the soil type, climatic condition and topography?"
        />
        <TextFieldComponent
          question={a12}
          set_question={set_a12}
          label=" Has the school planted   24 hour oxygen-generating plants/trees such as Banyan, Peepal, Tulsi, Money plant, Aloe Vera, etc.?"
        />
        <TextFieldComponent
          question={a13}
          set_question={set_a13}
          label="Has the school taken up noteworthy steps towards reducing noise pollution, including creating silent zones within and nearby the school campus ?"
        />
        <NextButton type="submit" />
      </Stack>
    </form>
  );
};

export default Section2;
