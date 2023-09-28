import React, { useContext, useState } from "react";

import Stack from "@mui/material/Stack";
import OptionForm from "./option-form";
import NextButton from "./next-button";
import { ccesformStatus } from "../contexts/formContexts";

const SectionB9 = () => {
  const {
    formStatus_cces,
    set_formStatus_cces,
    setExpanded_cces,
    formData,
    set_tab,
  } = useContext(ccesformStatus);

  const [b91, set_b91] = useState("");
  const [b92, set_b92] = useState("");
  const [b93, set_b93] = useState("");
  const [b94, set_b94] = useState("");
  const [b95, set_b95] = useState("");
  const [b96, set_b96] = useState("");
  const [b97, set_b97] = useState("");
  const [b98, set_b98] = useState("");
  const [b99, set_b99] = useState("");
  const [b910, set_b910] = useState("");
  const [b911, set_b911] = useState("");
  const [b912, set_b912] = useState("");
  const [b913, set_b913] = useState("");
  const [b914, set_b914] = useState("");
  const [b915, set_b915] = useState("");
  const [b916, set_b916] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (
      checkfield(b91) &&
      checkfield(b92) &&
      checkfield(b93) &&
      checkfield(b94) &&
      checkfield(b95) &&
      checkfield(b96) &&
      checkfield(b97) &&
      checkfield(b98) &&
      checkfield(b99) &&
      checkfield(b910) &&
      checkfield(b911) &&
      checkfield(b912) &&
      checkfield(b913) &&
      checkfield(b914) &&
      checkfield(b915) &&
      checkfield(b916)
    ) {
      const section_data = {
        b91: b91,
        b92: b92,
        b93: b93,
        b94: b94,
        b95: b95,
        b96: b96,
        b97: b97,
        b98: b98,
        b99: b99,
        b910: b910,
        b911: b911,
        b912: b912,
        b913: b913,
        b914: b914,
        b915: b916,
      };
      console.log("section b9:", formData);
      formData.current.cces.sectionB9 = section_data;
      set_formStatus_cces({ ...formStatus_cces, sectionB9: true });
      setExpanded_cces(false);
      set_tab(1);
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
            question={b91}
            set_question={set_b91}
            label={
              "Does the school have any vision for a 'Climate resilient school/ Climate Smart School'?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b92}
            set_question={set_b92}
            label={
              "Does the school have at least 2 teachers trained in “climate resilient WASH services” ?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b93}
            set_question={set_b93}
            label={
              "Did teachers receive regular training in school safety and disaster preparedness?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b94}
            set_question={set_b94}
            label={
              "Are the SMCs/SSP members imparted with orientation/ training on climate resilient WinS?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b95}
            set_question={set_b95}
            label={
              "Are the GP/ULB members imparted with orientation/ training on climate resilient WinS?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b96}
            set_question={set_b96}
            label={
              "Whether any student-led bodies/ group are there in schools to focus on  “climate resilient WASH services”?"
            }
            options={[
              "No",
              "Bal-Sansad",
              "Raju Manch",
              "Meena Manch",
              "Eco Club",
              "Youth Club",
              "NCC",
              "NSS",
              "Others",
            ]}
          />
          <OptionForm
            question={b97}
            set_question={set_b97}
            label={
              "Do student-led bodies play an active role in “Climate resilient WASH services”?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b98}
            set_question={set_b98}
            label={
              "Is menstrual health management regularly discussed with or taught to students of appropriate age (at least once in 3 months)?"
            }
            options={["No", "Only with girls", "With both girls and boys"]}
          />
          <OptionForm
            question={b99}
            set_question={set_b99}
            label={
              "Has the school identified key climate action points to be focused among the school children?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b910}
            set_question={set_b910}
            label={
              "Does the school take up the safe environment and climate education (including water, sanitation, and hygiene) through classroom/ session using suitable age-appropriate pedagogy including hands-on activities, project work, experiential learning, morning assembly, etc.?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b911}
            set_question={set_b911}
            label={
              "Do students in the school are engaged in a 'Nature walk' to explore, appreciate and learn the value of environmental conservation and biodiversity?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b912}
            set_question={set_b912}
            label={
              "Does the school engage children in listing and understanding local traditional wisdom, culture, practices for environment conservation?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b913}
            set_question={set_b913}
            label={
              "Has the school taken any community outreach activities on climate-resilient WASH services in schools/ local settings?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b914}
            set_question={set_b914}
            label={
              "Does the school conduct cultural programs and competitions (essay, painting, debate) on Climate resilient water, sanitation, hygiene services?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b915}
            set_question={set_b915}
            label={
              "Does the school display and use climate resilient water, Sanitation and Hygiene related posters and materials for promoting environmental and hygiene education?"
            }
            options={["Yes", "No"]}
          />
          <OptionForm
            question={b916}
            set_question={set_b916}
            label={
              "Does the school observe special days/ fortnights actively- such as World Env. Day, Earth Day, World Water Day, World Toilet Day/GHD/ World Hand Hygiene/ Swachhata Pakhwada?"
            }
            options={["Yes", "No"]}
          />
          <NextButton type="submit" />
        </Stack>
      </form>
    </div>
  );
};

export default SectionB9;
