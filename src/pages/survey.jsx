import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// components
import SectionAccordion from "../components/section-accordion";
import CustomTabPanel from "../components/custom-tab-panel";

// form sections
import SectionA from "../components/sectionA";
import SectionB1 from "../components/section-b1";
import SectionB3 from "../components/section-b3";
import SectionB4 from "../components/section-b4";
import SectionB5 from "../components/section-b5";
import SectionB6 from "../components/section-b6";
import SectionB7 from "../components/section-b7";
import SectionB2 from "../components/section-b2";
import SectionB8 from "../components/section-b8";
import SectionB9 from "../components/section-b9";
import Section1 from "../components/SAP/section-1";

// cces and sap form status context
import { ccesformStatus, sapformStatus } from "../contexts/formContexts";

export default function SurveyForm({ form_tab }) {
  const [expanded, setExpanded] = useState("sectionA");
  const [tab, set_tab] = useState(form_tab);
  const [formStatus_cces, set_formStatus_cces] = useState({
    sectionA: false,
    sectionB1: false,
    sectionB2: false,
    sectionB3: false,
    sectionB4: false,
    sectionB5: false,
    sectionB6: false,
    sectionB7: false,
    sectionB8: false,
    sectionB9: false,
  });


  const handleChange = (panel) => {
    if (expanded === panel) return;

    if (expanded !== panel && formStatus_cces[panel] === false) {
      alert("please fill the current section first");
      return;
    }

    if (expanded !== panel && formStatus_cces[panel] === true) {
      setExpanded(panel);
      return;
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: "2rem 0" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={(e, newValue) => set_tab(newValue)}
            aria-label="basic tabs"
          >
            <Tab label="CCES" />
            <Tab label="SAP" />
          </Tabs>
        </Box>

        <CustomTabPanel value={tab} index={0}>
          <ccesformStatus.Provider
            value={{ formStatus_cces, set_formStatus_cces, setExpanded }}
          >
            <Stack direction="column" spacing={0}>
              {/* section A - primary Informaiton */}
              <SectionAccordion
                sectionId="sectionA"
                expanded={expanded === "sectionA"}
                onChange={() => handleChange("sectionA")}
                heading="Primary Informaiton"
                section_form={SectionA}
                formStatus={formStatus_cces}
              />

              {/* section B1: Risk assessment, analysis, preventive measures, Plan */}
              <SectionAccordion
                sectionId="sectionB1"
                expanded={expanded === "sectionB1"}
                onChange={() => handleChange("sectionB1")}
                heading="Risk assessment, analysis, preventive measures, Plan"
                section_form={SectionB1}
                formStatus={formStatus_cces}
              />

              {/* section B1: Water */}
              <SectionAccordion
                sectionId="sectionB2"
                expanded={expanded === "sectionB2"}
                onChange={() => handleChange("sectionB2")}
                heading="Water"
                section_form={SectionB2}
                formStatus={formStatus_cces}
              />

              {/* section B3: Sanitation */}
              <SectionAccordion
                sectionId="sectionB3"
                expanded={expanded === "sectionB3"}
                onChange={() => handleChange("sectionB3")}
                heading="Sanitation"
                section_form={SectionB3}
                formStatus={formStatus_cces}
              />

              {/* section B4: Handwashing with soap */}
              <SectionAccordion
                sectionId="sectionB4"
                expanded={expanded === "sectionB4"}
                onChange={() => handleChange("sectionB4")}
                heading="Handwashing with soap"
                section_form={SectionB4}
                formStatus={formStatus_cces}
              />

              {/* section B5: Waste Management */}
              <SectionAccordion
                sectionId="sectionB5"
                expanded={expanded === "sectionB5"}
                onChange={() => handleChange("sectionB5")}
                heading="Waste Management"
                section_form={SectionB5}
                formStatus={formStatus_cces}
              />

              {/* section B6: Energy */}
              <SectionAccordion
                sectionId="sectionB6"
                expanded={expanded === "sectionB6"}
                onChange={() => handleChange("sectionB6")}
                heading="Energy"
                section_form={SectionB6}
                formStatus={formStatus_cces}
              />

              {/* section B7: Environment */}
              <SectionAccordion
                sectionId="sectionB7"
                expanded={expanded === "sectionB7"}
                onChange={() => handleChange("sectionB7")}
                heading="Environment"
                section_form={SectionB7}
                formStatus={formStatus_cces}
              />

              {/* section B8: O and M */}
              <SectionAccordion
                sectionId="sectionB8"
                expanded={expanded === "sectionB8"}
                onChange={() => handleChange("sectionB8")}
                heading="O and M"
                section_form={SectionB8}
                formStatus={formStatus_cces}
              />

              {/* section B9: Capacity Building and Behaviour Change */}
              <SectionAccordion
                sectionId="sectionB9"
                expanded={expanded === "sectionB9"}
                onChange={() => handleChange("sectionB9")}
                heading="Capacity Building and Behaviour Change"
                section_form={SectionB9}
                formStatus={formStatus_cces}
              />
            </Stack>
          </ccesformStatus.Provider>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}

SurveyForm.propTypes = {
  form_tab: PropTypes.number.isRequired,
};

const form_sections = {
  sectionA: "Primary Information",
  sectionB1: "Risk assessment, analysis, preventive measures, Plan",
  sectionB2: "Water",
  sectionB3: "Sanitation",
  sectionB4: "Handwashing with soap",
  sectionB5: "Waste Management",
  sectionB6: "Energy",
  sectionB7: "Environment",
  sectionB8: "O and M",
  sectionB9: "Capacity Building and Behaviour Change",
};
