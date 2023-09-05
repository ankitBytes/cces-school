import React, { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { Box, Container, Typography, Stack } from "@mui/joy";

import { DatePicker } from "@mui/x-date-pickers";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";

// sections headings data
import sectionsjson from "../data/sections.json";

export default function SurveyForm() {
  const headings = Object.values(sectionsjson);
  useEffect(() => {
    console.log(sectionsjson);
    Object.values(sectionsjson).map((section) => {
      console.log(section);
    });
  }, []);
  return (
    <Box>
      <FormSectionA />
    </Box>
  );
}

const fieldStyle = {
  maxWidth: "33.33%",
  width: "100%",
};

function FormSectionA() {
  const [a4, setA4] = useState("");
  const [a6, setA6] = useState("dog");
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState("");
  const [a9, setA9] = useState("");
  const [a10, setA10] = useState("");
  const [a11, setA11] = useState("");

  return (
    <Box>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={1} sx={{ padding: "0rem 0" }}>
          <Typography level="h5" fontWeight={"bold"}>
            Primary Information
          </Typography>

          <div style={{ padding: "1rem" }}>
            <Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>U-DISE Code</FormLabel>
                  <Input placeholder="" />
                </FormControl>

                <FormControl>
                  <FormLabel>Name of Respondent</FormLabel>
                  <Input placeholder="" />
                </FormControl>
              </Stack>

              <FormControl>
                <FormLabel>Designation of Respondent</FormLabel>
                <Select
                  value={a4}
                  defaultValue={""}
                  // placeholder="Designation of Respondent"
                  onChange={(e, newvalue) => setA4(newvalue)}
                >
                  <Option value={"Principal/Head Teacher"}>
                    Principal/Head Teacher
                  </Option>
                  <Option value={"In-charge Head of the school"}>
                    In-charge Head of the school
                  </Option>
                  <Option value={"Teacher"}>Teacher</Option>
                  <Option value={"Other staff of the school"}>
                    Other Staff of the school
                  </Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>School Management (Please select anyone)</FormLabel>
                <Select
                  value={a6}
                  defaultValue={""}
                  // placeholder="School Management (Please select anyone)"
                  onChange={(e, newvalue) => setA6(newvalue)}
                >
                  <Option value={"Government schools"}>
                    Government schools
                  </Option>
                  <Option
                    value={"Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)"}
                  >
                    Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)
                  </Option>
                  <Option value={"Govt- Ekalavya Model Residential School"}>
                    Govt- Ekalavya Model Residential School
                  </Option>
                  <Option value={" Government-aided Schools"}>
                    Government-aided Schools
                  </Option>
                  <Option value={"Higher secondary with grades 6-12"}>
                    Higher secondary with grades 6-12
                  </Option>
                  <Option
                    value={"Specified Category Schools - Kendriya Vidyalaya"}
                  >
                    Specified Category Schools - Kendriya Vidyalaya
                  </Option>
                  <Option value={"Navodya Vidyalaya (JNV)"}>
                    Navodya Vidyalaya (JNV)
                  </Option>
                  <Option value={"Sainik School  "}>Sainik School </Option>
                  <Option value={"Private Schools"}>Private Schools</Option>
                  <Option value={"Others"}>Other</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>School type (use)</FormLabel>
                <Select
                  value={a7}
                  defaultValue={""}
                  // placeholder="School type (use)"
                  onChange={(e, newvalue) => setA7(newvalue)}
                >
                  <Option value={"Residential"}>Residential</Option>
                  <Option value={"Non-Residential"}>Non-Residential</Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Category of School</FormLabel>
                <Select
                  value={a8}
                  defaultValue={""}
                  // placeholder="Category of School"
                  onChange={(e, newvalue) => setA8(newvalue)}
                >
                  <Option value={"Primary only with grades 1-5"}>
                    Primary only with grades 1-5
                  </Option>
                  <Option value={"Upper primary with grades 1-8"}>
                    Upper primary with grades 1-8 Govt- Kasturba Gandhi Balika
                    Vidyalaya (KGBV)
                  </Option>
                  <Option value={"Higher secondary with grades 1-12"}>
                    Higher secondary with grades 1-12
                  </Option>
                  <Option value={"Upper Primary only with grades 6-8"}>
                    Upper Primary only with grades 6-8
                  </Option>
                  <Option value={"Higher secondary with grades 6-12"}>
                    Higher secondary with grades 6-12
                  </Option>
                  <Option value={"Secondary/ Sr. Secondary with grades 1-10"}>
                    Secondary/ Sr. Secondary with grades 1-10
                  </Option>
                  <Option value={"Secondary/ Sr. Secondary with grades 6-10"}>
                    Secondary/ Sr. Secondary with grades 6-10
                  </Option>
                  <Option
                    value={"Secondary/ Sr. Secondary only with grades 9 & 10"}
                  >
                    Secondary/ Sr. Secondary only with grades 9 & 10
                  </Option>
                  <Option value={"Higher secondary with grade 9-12"}>
                    Higher secondary with grade 9-12
                  </Option>
                  <Option
                    value={
                      "Higher secondary/ Jr. College only with grades 11 & 12"
                    }
                  >
                    Higher secondary/ Jr. College only with grades 11 & 12
                  </Option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>School type (boys / girls)</FormLabel>
                <Select
                  value={a9}
                  defaultValue={""}
                  // placeholder="School type (boys / girls)"
                  onChange={(e, newvalue) => setA9(newvalue)}
                >
                  <Option value={"All boys' school"}>All boys’ school</Option>
                  <Option value={"All-girls' school"}>All-girls’ school</Option>
                  <Option value={"Co-education"}>Co-education</Option>
                </Select>
              </FormControl>

              <DatePicker
                placeholder={"Year of Establishment of the School"}
                views={["year"]}
                sx={fieldStyle}
                slotProps={{ textField: { size: "small" } }}
              />

              <FormControl>
                <FormLabel>Location of School</FormLabel>
                <Select
                  value={a11}
                  // placeholder="Location of School"
                  onChange={(e, newvalue) => setA11(newvalue)}
                >
                  <Option value={"Rural Area"}>Rural Area</Option>
                  <Option value={"Urban Area"}>Urban Area</Option>
                </Select>
              </FormControl>

              <button
                onClick={() => {
                  console.log(a6);
                }}
              >
                submit
              </button>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}