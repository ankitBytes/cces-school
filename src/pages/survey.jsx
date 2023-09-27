import { useState, useRef } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// firebase
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

// components
import SectionAccordion from "../components/section-accordion";
import CustomTabPanel from "../components/custom-tab-panel";
import NextButton from "../components/next-button";

// cces form sections
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
// sap form sections
import Section1 from "../components/SAP/section-1";
import Section2 from "../components/SAP/section-2";
import Section3 from "../components/SAP/section-3";
import Section4 from "../components/SAP/section-4";
import Section5 from "../components/SAP/section-5";
import Section6 from "../components/SAP/section-6";
import Section7 from "../components/SAP/section-7";
import Section8 from "../components/SAP/section-8";
import Section9 from "../components/SAP/section-9";

// cces and sap form status context
import { ccesformStatus, sapformStatus } from "../contexts/formContexts";

export default function SurveyForm() {
  const [expanded_cces, setExpanded_cces] = useState("sectionA");
  const [expanded_sap, setExpanded_sap] = useState("section1");
  const [tab, set_tab] = useState(0);

  const formData = useRef({
    cces: {
      sectionA: {},
      sectionB1: {},
      sectionB2: {},
      sectionB3: {},
      sectionB4: {},
      sectionB5: {},
      sectionB6: {},
      sectionB7: {},
      sectionB8: {},
      sectionB9: {},
    },
    sap: {
      section1: {},
      section2: {},
      section3: {},
      section4: {},
      section5: {},
      section6: {},
      section7: {},
      section8: {},
      section9: {},
    },
  });

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

  const [formStatus_sap, set_formStatus_sap] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
    section7: false,
    section8: false,
    section9: false,
  });

  const handleChange = (panel) => {
    if (expanded_cces === panel) return;

    if (expanded_cces !== panel && formStatus_cces[panel] === false) {
      alert("please fill the current section first");
      return;
    }

    if (expanded_cces !== panel && formStatus_cces[panel] === true) {
      setExpanded_cces(panel);
      return;
    }
  };

  const handleChangeSap = (panel) => {
    if (expanded_sap === panel) return;

    if (expanded_sap !== panel && formStatus_cces[panel] === false) {
      alert("please fill the current section first");
      return;
    }

    if (expanded_sap !== panel && formStatus_cces[panel] === true) {
      setExpanded_sap(panel);
      return;
    }
  };

  const handleFinalSubmit = async () => {
    console.log("final submit");
    console.log(formData.current.cces, formData.current.sap);
    const uid = formData.current.cces.sectionA.a1.toLowerCase();
    const schoolPrimaryInfo = {
      uDiseCode: uid,
      NameAndAddress: formData.current.cces.sectionA.a2,
      Respondent: formData.current.cces.sectionA.a3,
      RespondentDesignation: formData.current.cces.sectionA.a4,
      SchoolPhone: formData.current.cces.sectionA.a5.schoolPhone,
    };

    try {
      await setDoc(doc(db, "UnicefSurveyCces", uid), formData.current.cces);
      await setDoc(doc(db, "UnicefSurveySap", uid), formData.current.sap);
      await setDoc(doc(db, "SchoolInfo", uid), schoolPrimaryInfo);
      console.log("Database updated successfully!");
    } catch (error) {
      console.error("Error updating database:", error);
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
            <Tab label="SAP" disabled />
          </Tabs>
        </Box>

        <CustomTabPanel value={tab} index={0}>
          <ccesformStatus.Provider
            value={{
              formStatus_cces,
              set_formStatus_cces,
              setExpanded_cces,
              formData,
            }}
          >
            <Stack direction="column" spacing={0}>
              {/* section A - primary Informaiton */}
              <SectionAccordion
                sectionId="sectionA"
                expanded={expanded_cces === "sectionA"}
                onChange={() => handleChange("sectionA")}
                heading="Primary Informaiton"
                section_form={SectionA}
                formStatus={formStatus_cces}
              />

              {/* section B1: Risk assessment, analysis, preventive measures, Plan */}
              <SectionAccordion
                sectionId="sectionB1"
                expanded={expanded_cces === "sectionB1"}
                onChange={() => handleChange("sectionB1")}
                heading="Risk assessment, analysis, preventive measures, Plan"
                section_form={SectionB1}
                formStatus={formStatus_cces}
              />

              {/* section B1: Water */}
              <SectionAccordion
                sectionId="sectionB2"
                expanded={expanded_cces === "sectionB2"}
                onChange={() => handleChange("sectionB2")}
                heading="Water"
                section_form={SectionB2}
                formStatus={formStatus_cces}
              />

              {/* section B3: Sanitation */}
              <SectionAccordion
                sectionId="sectionB3"
                expanded={expanded_cces === "sectionB3"}
                onChange={() => handleChange("sectionB3")}
                heading="Sanitation"
                section_form={SectionB3}
                formStatus={formStatus_cces}
              />

              {/* section B4: Handwashing with soap */}
              <SectionAccordion
                sectionId="sectionB4"
                expanded={expanded_cces === "sectionB4"}
                onChange={() => handleChange("sectionB4")}
                heading="Handwashing with soap"
                section_form={SectionB4}
                formStatus={formStatus_cces}
              />

              {/* section B5: Waste Management */}
              <SectionAccordion
                sectionId="sectionB5"
                expanded={expanded_cces === "sectionB5"}
                onChange={() => handleChange("sectionB5")}
                heading="Waste Management"
                section_form={SectionB5}
                formStatus={formStatus_cces}
              />

              {/* section B6: Energy */}
              <SectionAccordion
                sectionId="sectionB6"
                expanded={expanded_cces === "sectionB6"}
                onChange={() => handleChange("sectionB6")}
                heading="Energy"
                section_form={SectionB6}
                formStatus={formStatus_cces}
              />

              {/* section B7: Environment */}
              <SectionAccordion
                sectionId="sectionB7"
                expanded={expanded_cces === "sectionB7"}
                onChange={() => handleChange("sectionB7")}
                heading="Environment"
                section_form={SectionB7}
                formStatus={formStatus_cces}
              />

              {/* section B8: O and M */}
              <SectionAccordion
                sectionId="sectionB8"
                expanded={expanded_cces === "sectionB8"}
                onChange={() => handleChange("sectionB8")}
                heading="O and M"
                section_form={SectionB8}
                formStatus={formStatus_cces}
              />

              {/* section B9: Capacity Building and Behaviour Change */}
              <SectionAccordion
                sectionId="sectionB9"
                expanded={expanded_cces === "sectionB9"}
                onChange={() => handleChange("sectionB9")}
                heading="Capacity Building and Behaviour Change"
                section_form={SectionB9}
                formStatus={formStatus_cces}
              />

              <NextButton
                color="success"
                onClick={() => {
                  let ans = Object.values(formStatus_cces).reduce(
                    (total, item) => {
                      return total && item;
                    },
                    true
                  );
                  if (ans) set_tab(1);
                  else alert("please fill all the sections");

                  console.log(formData.current);
                }}
              />
            </Stack>
          </ccesformStatus.Provider>
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <sapformStatus.Provider
            value={{
              formStatus_sap,
              set_formStatus_sap,
              setExpanded_sap,
              formData,
            }}
          >
            <SectionAccordion
              sectionId="section1"
              expanded={expanded_sap === "section1"}
              onChange={() => handleChangeSap("section1")}
              heading="Risk assessment, analysis, preventive measures, Plan"
              section_form={Section1}
              formStatus={formStatus_sap}
            />

            {/* section B1: Water */}
            <SectionAccordion
              sectionId="section2"
              expanded={expanded_sap === "section2"}
              onChange={() => handleChangeSap("section2")}
              heading="Water"
              section_form={Section2}
              formStatus={formStatus_sap}
            />

            {/* section B3: Sanitation */}
            <SectionAccordion
              sectionId="section3"
              expanded={expanded_sap === "section3"}
              onChange={() => handleChangeSap("section3")}
              heading="Sanitation"
              section_form={Section3}
              formStatus={formStatus_sap}
            />

            {/* section B4: Handwashing with soap */}
            <SectionAccordion
              sectionId="section4"
              expanded={expanded_sap === "section4"}
              onChange={() => handleChangeSap("section4")}
              heading="Handwashing with Soap & Water"
              section_form={Section4}
              formStatus={formStatus_sap}
            />

            {/* section B5: Waste Management */}
            <SectionAccordion
              sectionId="section5"
              expanded={expanded_sap === "section5"}
              onChange={() => handleChangeSap("section5")}
              heading="Waste Management"
              section_form={Section5}
              formStatus={formStatus_sap}
            />

            {/* section B6: Energy */}
            <SectionAccordion
              sectionId="section6"
              expanded={expanded_sap === "section6"}
              onChange={() => handleChangeSap("section6")}
              heading="O and M"
              section_form={Section6}
              formStatus={formStatus_sap}
            />

            {/* section B7: Environment */}
            <SectionAccordion
              sectionId="section7"
              expanded={expanded_sap === "section7"}
              onChange={() => handleChangeSap("section7")}
              heading="Energy"
              section_form={Section7}
              formStatus={formStatus_sap}
            />

            {/* section B8: O and M */}
            <SectionAccordion
              sectionId="section8"
              expanded={expanded_sap === "section8"}
              onChange={() => handleChangeSap("section8")}
              heading="Environment"
              section_form={Section8}
              formStatus={formStatus_sap}
            />

            {/* section B9: Capacity Building and Behaviour Change */}
            <SectionAccordion
              sectionId="section9"
              expanded={expanded_sap === "section9"}
              onChange={() => handleChangeSap("section9")}
              heading="Behavior Change & Capacity Building"
              section_form={Section9}
              formStatus={formStatus_sap}
            />

            <Button
              variant="contained"
              color="success"
              onClick={(e) => handleFinalSubmit()}
            >
              Submit
            </Button>
          </sapformStatus.Provider>
        </CustomTabPanel>
      </Box>
    </Container>
  );
}