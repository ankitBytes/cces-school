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
  const [a19, set_a19] = useState("");
  const [a110, set_a110] = useState("");
  const [a111, set_a111] = useState("");
  const [a112, set_a112] = useState("");
  const [a113, set_a113] = useState("");
  const [a114, set_a114] = useState("");
  const [a115, set_a115] = useState("");
  const [a116, set_a116] = useState("");
  const [a117, set_a117] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    if (
      checkField(a11) &&
      checkField(a12) &&
      checkField(a13) &&
      checkField(a14) &&
      checkField(a15) &&
      checkField(a16) &&
      checkField(a17) &&
      checkField(a18) &&
      checkField(a19) &&
      checkField(a110) &&
      checkField(a111) &&
      checkField(a112) &&
      checkField(a113) &&
      checkField(a114) &&
      checkField(a115) &&
      checkField(a116) &&
      checkField(a117)
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
        a19: a19,
        a110: a110,
        a111: a111,
        a112: a112,
        a113: a113,
        a114: a114,
        a115: a115,
        a116: a116,
        a117: a117,
      };
      console.log("sap - section3:", formData);
      formData.current.sap.section3 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section3: true });
      setExpanded_sap("section4");
    }
  };

  const checkField = (field) => {
    if (field && field !== "") return true;
    else return false;
  };

  return (
    <form autoComplete="off" onSubmit={(e) => handleNext(e)}>
      <Stack direction={"column"} spacing={2}>
        <TextFieldComponent
          question={a11}
          set_question={set_a11}
          label=". School has separate toilet units (1 toilet seat and 3 urinals) in working condition for boys and girls - there is at least one toilet unit each for boys and girls. "
        />
        <TextFieldComponent
          question={a12}
          set_question={set_a12}
          label="How many toilets seats in working condition does the school have for boys and girls: Boys"
        />
        <TextFieldComponent
          question={a13}
          set_question={set_a13}
          label="How many toilets seats in working condition does the school have for boys and girls: Girls"
        />
        <TextFieldComponent
          question={a14}
          set_question={set_a14}
          label="How many urinals does the school have for boys and girls: Boys"
        />
        <TextFieldComponent
          question={a15}
          set_question={set_a15}
          label="How many urinals does the school have for boys and girls: Girls"
        />
        <TextFieldComponent
          question={a16}
          set_question={set_a16}
          label="School has toilets for Children with Special Needs (CWSN) - The school has at least one separate toilet for CWSN with ramp, handrail, wide door for wheelchair entry and support structure inside toilet."
        />
        <TextFieldComponent
          question={a17}
          set_question={set_a17}
          label="The height and size of toilet and urinal facilities suitable for children of all age groups in the school "
        />
        <TextFieldComponent
          question={a18}
          set_question={set_a18}
          label=" What are the most common type of toilet used by the students at the school?   "
        />
        <TextFieldComponent
          question={a19}
          set_question={set_a19}
          label="School has separate toilets for Teachers and Staff - Teachers and staff use the toilets meant for students "
        />
        <TextFieldComponent
          question={a110}
          set_question={set_a110}
          label="All the toilets in the school have secure door with latch and cloth hanging hooks - Door with latch/bolt and cloth hanging hooks."
        />
        <TextFieldComponent
          question={a111}
          set_question={set_a111}
          label="The toilets have roof and.  proper ventilation for natural light and air"
        />
        <TextFieldComponent
          question={a112}
          set_question={set_a112}
          label="School has separate dustbins with lid for disposal of sanitary waste?"
        />
        <TextFieldComponent
          question={a113}
          set_question={set_a113}
          label=" Which of the option is used by the school for safe treatment/ disposal for of sanitary waste? (Electric Incinerator, is one of the options that functions at high temperature, and environmentally safe) "
        />
        <TextFieldComponent
          question={a114}
          set_question={set_a114}
          label="What is the main mechanism for disposal of toilet waste / faecal sludge"
        />
        <TextFieldComponent
          question={a115}
          set_question={set_a115}
          label="Are any toilets in the school prone to the impact of climate/natural hazards (as floods/ drought/seasonal water scarcity etc)?"
        />
        <TextFieldComponent
          question={a116}
          set_question={set_a116}
          label="Has the school taken appropriate measures to ensure disaster-resilient toilets in view of the local hazard/disaster vulnerability context "
        />
        <TextFieldComponent
          question={a117}
          set_question={set_a117}
          label="Does the school have scheduled desludging of the faecal matter (preferably before monsoon), in coordination with nearby service provider?"
        />
        <NextButton type="submit" />
      </Stack>
    </form>
  );
};

export default Section3;
