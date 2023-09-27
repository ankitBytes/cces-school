import React, { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import OptionForm from "./option-form";
import NextButton from "./next-button";
import { ccesformStatus } from "../contexts/formContexts";

const SectionB8 = () => {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [b81, set_b81] = useState("");
  const [b82, set_b82] = useState("");
  const [b83, set_b83] = useState("");
  const [b84, set_b84] = useState("");
  const [b85, set_b85] = useState("");
  const [b86, set_b86] = useState("");
  const [b87, set_b87] = useState("");
  const [b88, set_b88] = useState("");
  const [b89, set_b89] = useState("");
  const [b810, set_b810] = useState("");
  const [b811, set_b811] = useState("");
  const [b812, set_b812] = useState("");
  const [b813, set_b813] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (
      checkfield(b81) &&
      checkfield(b82) &&
      checkfield(b83) &&
      checkfield(b84) &&
      checkfield(b85) &&
      checkfield(b86) &&
      checkfield(b87) &&
      checkfield(b88) &&
      checkfield(b89) &&
      checkfield(b810) &&
      checkfield(b811) &&
      checkfield(b812) &&
      checkfield(b813)
    ) {
      const section_data = {
        b81: b81,
        b82: b82,
        b83: b83,
        b84: b84,
        b85: b85,
        b86: b86,
        b87: b87,
        b88: b88,
        b89: b89,
        b810: b810,
        b811: b811,
        b812: b812,
        b813: b813,
      };
      console.log("section b8:", formData);
      formData.current.cces.sectionB8 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB8: true });
      setExpanded_cces("sectionB9");
    }
  };

  const checkfield = (field) => {
    if (field && field !== "") {
      return true;
    } else return false;
  };

  return (
    <div>
      <form onSubmit={(e) => handleNext(e)}>
        <Stack direction={"column"} spacing={2}>
          <OptionForm
            question={b81}
            set_question={set_b81}
            label={
              "Does the school follow standard practices/procedures for the operation and maintenance of WASH facilities?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b82}
            set_question={set_b82}
            label={"Does the school have a boundary wall with secured gates ?"}
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b83}
            set_question={set_b83}
            label={
              "Does the school take care of the upkeeping, repair and maintenance of fitting and fixture of WASH facilities such as taps, flushing cistern, drainage pipes, overhead tank, wash basin etc. on a regular basis?"
            }
            options={[
              "No, fittings and fixtures are not in working condition",
              "Yes, fittings and fixtures are in working condition ",
            ]}
          />
          <OptionForm
            question={b84}
            set_question={set_b84}
            label={
              "Does the school have a system for regular monitoring (e.g., through checklists or observation) of the cleaning of WASH facilities?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b85}
            set_question={set_b85}
            label={
              "Does the school have access to adequate cleaning materials like disinfectants such as hypochlorite solutions, toilet cleaning liquids, soap, PPE etc.) ?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b86}
            set_question={set_b86}
            label={
              "Does the school have access to adequate cleaning equipment (broom, shovels, mop, bucket etc)?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b87}
            set_question={set_b87}
            label={
              "Who supervises the cleaning and maintenance of the toilets in the school?"
            }
            options={[
              "No one in particular",
              "Team of teachers, staff",
              "Team of teachers, staff and child cabinet members",
            ]}
          />
          <OptionForm
            question={b88}
            set_question={set_b88}
            label={
              "Does the school have an effective linkage with local service providers for material, plumbing, and technical support for timely repair of the WASH facilities?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b89}
            set_question={set_b89}
            label={
              "Is there an arrangement for any part/full-time cleaning/sanitation worker in the school?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b810}
            set_question={set_b810}
            label={
              "Does the School Management Committee take active part in reviewing and addressing school WASH and operation and maintenance (functionality of water, toilet, handwashing & general cleanliness) related issues in their monthly meetings?  "
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b811}
            set_question={set_b811}
            label={
              "Does the School Management Committee take active part in reviewing and addressing school WASH and operation and maintenance (functionality of water, toilet, handwashing & general cleanliness) related issues in their monthly meetings?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b812}
            set_question={set_b812}
            label={
              "Do the Gram Panchayats (GPs)/Urban Local Bodies (ULBs) take an active part in reviewing and addressing school WASH and O&M issues?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b813}
            set_question={set_b813}
            label={
              "Whether school has been able to mobilize adequate resources for the climate-resilient school interventions?"
            }
            options={["No", "Yes, to some extent", "Yes to a great  extent"]}
          />
          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
};
export default SectionB8;
