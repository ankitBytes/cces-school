import React, { useState, useContext } from "react";
import { Stack } from "@mui/material";
import TextFieldComponent from "../text-field";
import { sapformStatus } from "../../contexts/formContexts";

import NextButton from "../next-button";

const Section9 = () => {
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
      checkField(a110)
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
      };
      console.log("sap - section9:", formData);
      formData.current.sap.section9 = section_data;
      set_formStatus_sap({ ...formStatus_sap, section9: true });
      setExpanded_sap(false);
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
          label="School has at least 2 teachers trained in sanitation and hygiene education"
        />
        <TextFieldComponent
          question={a12}
          set_question={set_a12}
          label="School have a Child cabinet (Bal Sansad) that takes an active role in promoting sanitation and hygiene practices"
        />
        <TextFieldComponent
          question={a13}
          set_question={set_a13}
          label="Supervision of practice of daily handwashing with soap by students and cooks before Mid-Day Meal (MDM) / lunch - Dedicated team of teachers/staff members and child cabinet members"
        />
        <TextFieldComponent
          question={a14}
          set_question={set_a14}
          label="School take up safe hygiene and sanitation education including awareness on hand-washing during morning assembly and in school clubs"
        />
        <TextFieldComponent
          question={a15}
          set_question={set_a15}
          label="Menstrual health management discussed with girl students - At least once every month "
        />
        <TextFieldComponent
          question={a16}
          set_question={set_a16}
          label="School regularly conducts cultural programs and competitions (Essay, painting, debate) on hygiene and sanitation"
        />
        <TextFieldComponent
          question={a17}
          set_question={set_a17}
          label="School display and use Water, Sanitation and Hygiene related posters and materials for promoting hygiene education"
        />
        <TextFieldComponent
          question={a18}
          set_question={set_a18}
          label="  Has the school taken any community outreach activities on climate-resilient WASH services in schools/ local settings?"
        />
        <TextFieldComponent
          question={a19}
          set_question={set_a19}
          label=" Does the school display and use climate resilient water, Sanitation and Hygiene related posters and materials for promoting environmental and hygiene education? "
        />
        <TextFieldComponent
          question={a110}
          set_question={set_a110}
          label="Does the school observe special days/ fortnights actively- such as World Env. Day, Earth Day, World Water Day, World Toilet Day/GHD/ World Hand Hygiene/ Swachhata Pakhwada? "
        />
        <NextButton type="submit" />
      </Stack>
    </form>
  );
};

export default Section9;
