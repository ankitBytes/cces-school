import React, { useState, useContext } from "react";

import Stack from "@mui/material/Stack";
import OptionForm from "./option-form";
import NextButton from "./next-button";
import { ccesformStatus } from "../contexts/formContexts";

export default function SectionB5() {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);
  const [b51, set_b51] = useState("");
  const [b52, set_b52] = useState("");
  const [b53, set_b53] = useState("");
  const [b54, set_b54] = useState("");
  const [b55, set_b55] = useState("");
  const [b56, set_b56] = useState("");
  const [b57, set_b57] = useState("");
  const [b58, set_b58] = useState("");
  const [b59, set_b59] = useState("");
  const [b510, set_b510] = useState("");
  const [b511, set_b511] = useState("");
  const [b512, set_b512] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (
      checkfield(b51) &&
      checkfield(b52) &&
      checkfield(b53) &&
      checkfield(b54) &&
      checkfield(b55) &&
      checkfield(b56) &&
      checkfield(b57) &&
      checkfield(b58) &&
      checkfield(b59) &&
      checkfield(b510) &&
      checkfield(b511) &&
      checkfield(b512)
    ) {
      const section_data = {
        b51: b51,
        b52: b52,
        b53: b53,
        b54: b54,
        b55: b55,
        b56: b56,
        b57: b57,
        b58: b58,
        b59: b59,
        b510: b510,
        b511: b511,
        b512: b512,
      };
      console.log("section b5:", formData);
      formData.current.cces.sectionB5 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB5: true });
      setExpanded_cces("sectionB6");
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
            question={b51}
            set_question={set_b51}
            label="Has your school adopted the 5R’s (refuse, reduce, reuse, repurpose, and then recycle) of waste management Standard Operating Procedures (SOP)?"
            options={["yes", "No"]}
          />

          <OptionForm
            question={b52}
            set_question={set_b52}
            label="Does the school provide dustbins in each classroom, kitchen area, toilet, and other appropriate locations for the collection of waste? (Multiple responses may be there)"
            options={[
              "No",
              "Yes, in each classroom.",
              "Yes, in the kitchen.",
              "Toilet locations",
              "Other appropriate areas in the school ",
            ]}
          />

          <OptionForm
            question={b53}
            set_question={set_b53}
            label="Does the school segregate wet waste (bio-degradable waste) and dry waste (non-biodegradable waste)? "
            options={["yes", "No"]}
          />
          <OptionForm
            question={b54}
            set_question={set_b54}
            label="How does the school compost its own biodegradable waste (wet waste)? "
            options={[
              "No specific measure ",
              "Yes, waste is taken away for composting by someone.",
              "Yes, on school premises ",
            ]}
          />
          <OptionForm
            question={b55}
            set_question={set_b55}
            label="If in previous question, school is not composting biodegradable waste in the school premises, what are the reasons for not doing so (wherever applicable)?"
            options={[
              " Lack of space",
              "Lack of know how",
              " Other reasons (please specify)",
            ]}
          />
          <OptionForm
            question={b56}
            set_question={set_b56}
            label="How does the school dispose of its non-biodegradable waste (dry waste)? "
            options={[
              "No specific measure / throw anywhere/ dumped at a place aside in campus/ nearby/ Burnt on school premises",
              "Buried on school premises",
              "Collection by municipality/Panchayat",
            ]}
          />
          <OptionForm
            question={b57}
            set_question={set_b57}
            label="If in previous question, the school does not have any mechanism for safe disposal of non-biodegradable waste disposal, what are the reasons "
            options={[
              "Lack of space",
              "Lack of knowhow",
              " Other reasons (please specify)",
            ]}
          />
          <OptionForm
            question={b58}
            set_question={set_b58}
            label="Is the school premises clean (free from littering)? "
            options={["yes", "No"]}
          />
          <OptionForm
            question={b59}
            set_question={set_b59}
            label="Are the waste pits in your school secured from climate events such as floods (above the  the flood level/ have some kind of flood proofing arrangement) ? "
            options={["yes", "No"]}
          />
          <OptionForm
            question={b510}
            set_question={set_b510}
            label="Has the school taken any innovative measures for the reuse of waste material (such as using plastic bottles and toffee wrappers for making bricks for fencing of vegetation/plants)"
            options={["yes", "No"]}
          />
          <OptionForm
            question={b511}
            set_question={set_b511}
            label="Has school engaged children in understanding the waste management priority through activities such as waste audit, waste trails, waste journey, etc? "
            options={["yes", "No"]}
          />
          <OptionForm
            question={b512}
            set_question={set_b512}
            label="Has school taken any measures to reduce, minimize or ban the use of single-use plastic?"
            options={["yes", "No"]}
          />

          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
}
