import React, { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import OptionForm from "./option-form";
import NextButton from "./next-button";
import { ccesformStatus } from "../contexts/formContexts";

export default function SectionB7() {
  const { formStatus_cces, set_formStatus_cces, setExpanded_cces, formData } =
    useContext(ccesformStatus);

  const [b71, set_b71] = useState("");
  const [b72, set_b72] = useState("");
  const [b73, set_b73] = useState("");
  const [b74, set_b74] = useState("");
  const [b75, set_b75] = useState("");
  const [b76, set_b76] = useState("");
  const [b77, set_b77] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (
      checkfield(b71) &&
      checkfield(b72) &&
      checkfield(b73) &&
      checkfield(b74) &&
      checkfield(b75) &&
      checkfield(b76) &&
      checkfield(b77)
    ) {
      const section_data = {
        b71: b71,
        b72: b72,
        b73: b73,
        b74: b74,
        b75: b75,
        b76: b76,
        b77: b77,
      };
      console.log("section b7:", formData);
      formData.current.cces.sectionB7 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB7: true });
      setExpanded_cces("sectionB8");
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
            question={b71}
            set_question={set_b71}
            label="Whether the school premises are majorly covered with greeneries?"
            options={[
              "No",
              "kitchen garden",
              "plantation",
              "Nutrional garden",
              "Herbal garden",
            ]}
          />

          <OptionForm
            question={b72}
            set_question={set_b72}
            label="If the school does not have greeneries in its premises, what are the reasons?"
            options={[
              "Not enough space",
              "No security ensured",
              "No proper fencing",
              "No proper watach and ward",
              "Other, please specify",
            ]}
          />

          <OptionForm
            question={b73}
            set_question={set_b73}
            label=" Does the plantation of the species selected in the school are appropriate to the soil type, climatic condition and topography?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b74}
            set_question={set_b74}
            label="Does the school maintain a plant diversity ?"
            options={[
              "Vegetable species",
              "Plants for  shading",
              "flowering plants",
              "fruits bearing plants",
              "Any other,",
            ]}
          />

          <OptionForm
            question={b75}
            set_question={set_b75}
            label="Has the school planted (C4)  24 hour oxygen-generating plants/trees such as Banyan, Peepal, Tulsi, Money plant, Aloe Vera, etc.?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b76}
            set_question={set_b76}
            label="Does the school engage students in creative/ innovative ways in protecting, caring, and adopting plants/vegetation, including green fencing, etc.?"
            options={["Yes", "No"]}
          />

          <OptionForm
            question={b77}
            set_question={set_b77}
            label="Has the school taken up noteworthy steps towards reducing noise pollution, including creating silent zones within and nearby the school campus ?"
            options={["Yes", "No"]}
          />
          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
}
