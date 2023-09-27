import PropTypes from "prop-types";
import React, { useState, useContext } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";

import { sapformStatus } from "../../contexts/formContexts";

import NextButton from "../next-button";

const Section3 = () => {
  const { formStatus_sap, set_formStatus_sap, setExpanded_sap, formData } =
    useContext(sapformStatus);

  const [a11, set_a11] = useState("");
  const [a12, set_a12] = useState("");
  const [a13, set_a13] = useState("");
  const [a14, set_a14] = useState("");
  const [a15, set_a15] = useState("");
  const [a16, set_a16] = useState("");
  const [a17, set_a17] = useState("");
  const [a18, set_a18] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (
      checkfield(a11) &&
      checkfield(a12) &&
      checkfield(a13) &&
      checkfield(a14) &&
      checkfield(a15) &&
      checkfield(a16) &&
      checkfield(a17) &&
      checkfield(a18)
    ) {
      const section_data = {
        a11: a11,
        a12: a12,
        a13: a13,
        a14: a14,
        a15: a15,
        a16: a16,
        a17: a17,
        a18: a18,
      };
      console.log("sap - section4:", formData);
      formData.current.sap.section4 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section4: true });
      setExpanded_sap("section5");
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
          label="School has facility for handwashing after use of toilet - Wash basin for hand washing either inside or attached to every toilet unit "
        />
        <TextFieldComponent
          question={a12}
          set_question={set_a12}
          label=" School provide soaps for hand washing after use of toilets - Soaps are available at all the hand washing points all the time"
        />
        <TextFieldComponent
          question={a13}
          set_question={set_a13}
          label="School has facility for handwashing before Mid-Day Meal (MDM) / lunch where a group of children can practice hand washing at the same time - Yes, with water from taps"
        />
        <TextFieldComponent
          question={a14}
          set_question={set_a14}
          label="School provide soaps for handwashing before Mid-Day Meal (MDM) / lunch - Soaps are available at all the handwashing points at all the times"
        />
        <TextFieldComponent
          question={a15}
          set_question={set_a15}
          label="All children wash their hands with soap before mid-day meal (MDM)/ Lunch - All children wash their hands with soap  "
        />
        <TextFieldComponent
          question={a16}
          set_question={set_a16}
          label="Is the height of handwashing facilities suitable for children of all age groups in the school "
        />
        <TextFieldComponent
          question={a17}
          set_question={set_a17}
          label="Does the school have a proper mechanism for wastewater disposal near all the hand washing unit?"
        />
        <TextFieldComponent
          question={a18}
          set_question={set_a18}
          label="Does the school have developed some kind of recording system of daily handwashing with soap before the mid-day meal?"
        />
        <NextButton type="submit" />
      </Stack>
    </form>
  );
};

export default Section3;
