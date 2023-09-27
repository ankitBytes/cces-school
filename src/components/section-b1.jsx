import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import OptionForm from "./option-form";
import NextButton from "./next-button";

import { ccesformStatus } from "../contexts/formContexts";
export default function SectionB1() {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [b11, set_b11] = useState("");
  const [b12, set_b12] = useState("");
  const [b13, set_b13] = useState("");
  const [b14, set_b14] = useState("");
  const [b15, set_b15] = useState("");
  const [b16, set_b16] = useState("");
  const [b17, set_b17] = useState("");
  const [b18, set_b18] = useState("");
  const [b19, set_b19] = useState("");
  const [b110, set_b110] = useState("");
  const [b111, set_b111] = useState("");
  const [b112, set_b112] = useState("");
  const [b113, set_b113] = useState("");
  const [b114, set_b114] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (
      checkfield(b11) &&
      checkfield(b12) &&
      checkfield(b13) &&
      checkfield(b14) &&
      checkfield(b15) &&
      checkfield(b16) &&
      checkfield(b17) &&
      checkfield(b18) &&
      checkfield(b19) &&
      checkfield(b110) &&
      checkfield(b111) &&
      checkfield(b112) &&
      checkfield(b113) &&
      checkfield(b114)
    ) {
      const section_data = {
        b11: b11,
        b12: b12,
        b13: b13,
        b14: b14,
        b15: b15,
        b16: b16,
        b17: b17,
        b18: b18,
        b19: b19,
        b110: b110,
        b111: b111,
        b112: b112,
        b113: b113,
        b114: b114,
      };
      console.log("section b1:", formData);
      formData.current.cces.sectionB1 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB1: true });
      setExpanded_cces("sectionB2");
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <div>
      <form autoComplete="off" onSubmit={(e) => handleNext(e)}>
        <Stack direciton="column" spacing={2}>
          <OptionForm
            question={b11}
            set_question={set_b11}
            label=" Whether the school has a school safety or equivalent committee?"
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b12}
            set_question={set_b12}
            label="Is there a clear list of committee members available with the school?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b13}
            set_question={set_b13}
            label="Are any of the school cabinet members part of the School safety committee?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b14}
            set_question={set_b14}
            label="Whether school has developed School Safety Plan (SSP) or equivalent?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b15}
            set_question={set_b15}
            label="Whether the schools’ School safety Plan have components of WASH ? "
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b16}
            set_question={set_b16}
            label=" If school ha"
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b17}
            set_question={set_b17}
            label="were children actively involved in identifying  hazards in the school? "
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b18}
            set_question={set_b18}
            label="Is your school vulnerable to any natural disasters ? "
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b19}
            set_question={set_b19}
            label="what are the likely climate-related events/ natural hazards/ other risks, and their intensity  (State/ district may like to further add  rows and points to the lists, with few lines left to be filled by the school concerned)"
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b110}
            set_question={set_b110}
            label="Has school done identified the impact of the above disasters on the WASH infrastructure in schools ? "
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b111}
            set_question={set_b111}
            label="Is the school located near any potential risk zone ?"
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b112}
            set_question={set_b112}
            label="Does your school have a practice of conducting mock drills for disaster response?"
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b113}
            set_question={set_b113}
            label="Is the swachhta action plan effective during  cyclone, heatwave, cold wave, floods, etc.?"
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b114}
            set_question={set_b114}
            label="Whether the WASH facilities in Schools are able to be effective during  drought, floods, cyclones, forest fire, landslide, etc."
            options={["Yes", "No"]}
          />
          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
}
SectionB1.propTypes = {
  formStatus: PropTypes.object,
  set_formStatus: PropTypes.func,
};
