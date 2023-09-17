import React, { useEffect, useState } from "react";
import { Form, useLocation } from "react-router-dom";
import { Box, Container, Typography, Stack } from "@mui/material";

import { DatePicker } from "@mui/x-date-pickers";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

// sections headings data
import sectionsjson from "../data/sections.json";

import { Country, State, City } from "country-state-city";


export default function SurveyForm() {
  return (
    <Box>
      <FormSectionA />
    </Box>
  );
}

const states = State.getStatesOfCountry("IN");

const fieldStyle = {
  maxWidth: "33.33%",
  width: "100%",
};

function FormSectionA() {
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  const [a3, setA3] = useState("");
  const [a5, setA5] = useState("");
  const [a4, setA4] = useState("");
  const [a6, setA6] = useState("");
  const [a7, setA7] = useState("");
  const [a8, setA8] = useState("");
  const [a9, setA9] = useState("");
  const [a10, setA10] = useState("");
  const [a11, setA11] = useState("");
  const [a19, setA19] = useState("");
  const [a17, setA17] = useState("");
  const [a12, setA12] = useState("");
  //const [a13, setA13] = useState("");
  const [state, setState] = useState("Enter your state");
  const [cityList, setCityList] = useState([]);
  const [city, setCity] = useState("Enter your city");

  const styles = {
    inputfield: {
      width: "33%",
    },
  };
  return (
    <Box sx={{ padding: "2.5rem" }}>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={1} sx={{ padding: "0rem 0" }}>
          <Typography level="h4" fontWeight={"semibold"}>
            Primary Information
          </Typography>

          <div style={{ padding: "1rem", background: "#f4e7ff" }}>
            <Stack direction="column" spacing={3}>
              <Stack direction="row" spacing={2}>
                <Select
                  value={state}
                  defaultValue={"Select your state"}
                  // placeholder="Designation of Respondent"
                  onChange={(e) => {
                    console.log(e.target.value.name);
                    setState(e.target.value)
                    setCityList(
                      City.getCitiesOfState("IN", e.target.value.isoCode)
                    );
                  }}
                >
                  {states.map((stateData, index) => (
                    <MenuItem value={stateData} key={index}>
                      {stateData.name}
                    </MenuItem>
                  ))}
                </Select>

                <Select
                  value={city}
                  defaultValue={cityList[0]}
                  onChange={(e) => setCity(e.target.value)}
                >
                  {cityList.map((cities, index) => (
                    <MenuItem value={cities.name} key={index}>
                      {cities.name}
                    </MenuItem>
                  ))}
                </Select>
              </Stack>

              <Stack spacing={2}>
                <FormLabel>U-DISE Code</FormLabel>
                <Input placeholder="" />

                <FormLabel>Name of Respondent</FormLabel>
                <Input placeholder="" />
              </Stack>

              <Stack spacing={2}>
                <FormLabel>Name of School</FormLabel>
                <Input placeholder="" />

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Address of School</FormLabel>
                  <Input placeholder="" />
                </FormControl>
              </Stack>

              <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Name of Respondent</FormLabel>
                  <Input placeholder="" />
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Designation of Respondent</FormLabel>
                  <Select
                    value={a4}
                    defaultValue={""}
                    // placeholder="Designation of Respondent"
                    onChange={(e, newvalue) => setA4(newvalue)}
                  >
                    <MenuItem value={"Principal/Head Teacher"}>
                      Principal/Head Teacher
                    </MenuItem>
                    <MenuItem value={"In-charge Head of the school"}>
                      In-charge Head of the school
                    </MenuItem>
                    <MenuItem value={"Teacher"}>Teacher</MenuItem>
                    <MenuItem value={"Other staff of the school"}>
                      Other Staff of the school
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>School Phone No:</FormLabel>
                  <Input placeholder="" />
                </FormControl>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Mobile No:</FormLabel>
                  <Input placeholder="" />
                </FormControl>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Email Id:</FormLabel>
                  <Input placeholder="" />
                </FormControl>
              </Stack>

              <Stack spacing={2} direction={{ xs: "column", md: "row" }}>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>
                    School Management (Please select anyone)
                  </FormLabel>
                  <Select
                    value={a6}
                    defaultValue={""}
                    // placeholder="School Management (Please select anyone)"
                    onChange={(e, newvalue) => setA6(newvalue)}
                  >
                    <MenuItem value={"Government schools"}>
                      Government schools
                    </MenuItem>
                    <MenuItem
                      value={"Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)"}
                    >
                      Govt- Kasturba Gandhi Balika Vidyalaya (KGBV)
                    </MenuItem>
                    <MenuItem value={"Govt- Ekalavya Model Residential School"}>
                      Govt- Ekalavya Model Residential School
                    </MenuItem>
                    <MenuItem value={" Government-aided Schools"}>
                      Government-aided Schools
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grades 6-12"}>
                      Higher secondary with grades 6-12
                    </MenuItem>
                    <MenuItem
                      value={"Specified Category Schools - Kendriya Vidyalaya"}
                    >
                      Specified Category Schools - Kendriya Vidyalaya
                    </MenuItem>
                    <MenuItem value={"Navodya Vidyalaya (JNV)"}>
                      Navodya Vidyalaya (JNV)
                    </MenuItem>
                    <MenuItem value={"Sainik School  "}>Sainik School </MenuItem>
                    <MenuItem value={"Private Schools"}>Private Schools</MenuItem>
                    <MenuItem value={"Others"}>Other</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>School type (use)</FormLabel>
                  <Select
                    value={a7}
                    defaultValue={""}
                    // placeholder="School type (use)"
                    onChange={(e, newvalue) => setA7(newvalue)}
                  >
                    <MenuItem value={"Residential"}>Residential</MenuItem>
                    <MenuItem value={"Non-Residential"}>Non-Residential</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Category of School</FormLabel>
                  <Select
                    value={a8}
                    defaultValue={""}
                    // placeholder="Category of School"
                    onChange={(e, newvalue) => setA8(newvalue)}
                  >
                    <MenuItem value={"Primary only with grades 1-5"}>
                      Primary only with grades 1-5
                    </MenuItem>
                    <MenuItem value={"Upper primary with grades 1-8"}>
                      Upper primary with grades 1-8 Govt- Kasturba Gandhi Balika
                      Vidyalaya (KGBV)
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grades 1-12"}>
                      Higher secondary with grades 1-12
                    </MenuItem>
                    <MenuItem value={"Upper Primary only with grades 6-8"}>
                      Upper Primary only with grades 6-8
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grades 6-12"}>
                      Higher secondary with grades 6-12
                    </MenuItem>
                    <MenuItem value={"Secondary/ Sr. Secondary with grades 1-10"}>
                      Secondary/ Sr. Secondary with grades 1-10
                    </MenuItem>
                    <MenuItem value={"Secondary/ Sr. Secondary with grades 6-10"}>
                      Secondary/ Sr. Secondary with grades 6-10
                    </MenuItem>
                    <MenuItem
                      value={"Secondary/ Sr. Secondary only with grades 9 & 10"}
                    >
                      Secondary/ Sr. Secondary only with grades 9 & 10
                    </MenuItem>
                    <MenuItem value={"Higher secondary with grade 9-12"}>
                      Higher secondary with grade 9-12
                    </MenuItem>
                    <MenuItem
                      value={
                        "Higher secondary/ Jr. College only with grades 11 & 12"
                      }
                    >
                      Higher secondary/ Jr. College only with grades 11 & 12
                    </MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Year of Establishment of School</FormLabel>
                  <DatePicker
                    value={a10}
                    onChange={(e) => setA10(e.target.value)}
                    views={["year"]}
                    sx={{ width: "100%" }}
                    slotProps={{ textField: { size: "small" } }}
                  />
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Location of School</FormLabel>
                  <Select
                    value={a11}
                    // placeholder="Location of School"
                    onChange={(e, newvalue) => setA11(newvalue)}
                  >
                    <MenuItem value={"Rural Area"}>Rural Area</MenuItem>
                    <MenuItem value={"Urban Area"}>Urban Area</MenuItem>
                  </Select>
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>School type (boys / girls)</FormLabel>
                  <Select
                    value={a9}
                    defaultValue={""}
                    // placeholder="School type (boys / girls)"
                    onChange={(e, newvalue) => setA9(newvalue)}
                  >
                    <MenuItem value={"All boys' school"}>All boys’ school</MenuItem>
                    <MenuItem value={"All-girls' school"}>
                      All-girls’ school
                    </MenuItem>
                    <MenuItem value={"Co-education"}>Co-education</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <FormControl sx={styles.inputfield} required>
                <FormLabel>Name of Board</FormLabel>
                <RadioGroup
                  defaultValue=""
                  name="radio-buttons-group"
                  value={a12}
                  onChange={(e) => setA12(e.target.value)}
                >
                  <Stack direction="row" spacing={2}>
                    <Radio value="state" label="State" variant="outlined" />
                    <Radio value="others" label="Others" variant="outlined" />
                  </Stack>
                </RadioGroup>
                {a12 == "others" && (
                  <Input
                    placeholder="specify,"
                    sx={{ marginTop: ".75rem", minWidth: "30%" }}
                    required
                  />
                )}
              </FormControl>

              <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Number of Students enrolled in School</FormLabel>
                  <Stack spacing={2}>
                    <Input placeholder="Number of Boys" type="number" />
                    <Input placeholder="Number of Girls" type="number" />
                  </Stack>
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Number of Children with Special Needs:</FormLabel>
                  <Stack spacing={2}>
                    <Input placeholder="Number of Boys" type="number" />
                    <Input placeholder="Number of Girls" type="number" />
                  </Stack>
                </FormControl>

                <FormControl sx={styles.inputfield} required>
                  <FormLabel>Number of Teachers and Staff:</FormLabel>
                  <Stack spacing={2}>
                    <Input placeholder="Number of Male" type="number" />
                    <Input placeholder="Number of Female" type="number" />
                  </Stack>
                </FormControl>
              </Stack>

              {/* <Stack direction={{ xs: "column", md: "row" }} spacing={2}> */}
              <FormControl required>
                <FormLabel>
                  Has the school developed Swachhata Action Plan (SAP)?
                </FormLabel>
                <Select
                  value={a17}
                  defaultValue={""}
                  onChange={(e, newvalue) => setA17(newvalue)}
                >
                  <MenuItem value={"yes"}>yes</MenuItem>
                  <MenuItem value={"no"}>no</MenuItem>
                </Select>
              </FormControl>
              <FormControl required>
                <FormLabel>
                  Is the school aware of the requirements of the Standard
                  Operating Procedures (SOPs) for Sustaining Water, Sanitation &
                  Hygiene in schools{" "}
                  <span>
                    (
                    <a
                      href="https://schooledn.py.gov.in/ssarmsa/pdf/SOP for WASH -
                  14-10-2021.pdf"
                    >
                      https://schooledn.py.gov.in/ssarmsa/pdf/SOP for WASH -
                      14-10-2021.pdf
                    </a>
                    )?
                  </span>
                </FormLabel>
                <Select
                  value={a19}
                  defaultValue={""}
                  onChange={(e, newvalue) => setA19(newvalue)}
                >
                  <MenuItem value={"yes"}>yes</MenuItem>
                  <MenuItem value={"no"}>no</MenuItem>
                </Select>
              </FormControl>
              {/* </Stack> */}

              <Stack
                direction={"row"}
                spacing={2}
                sx={{ button: { minWidth: "160px" } }}
              >
                <Button>Save Changes</Button>
                <Button color="warning">Next</Button>
              </Stack>
            </Stack>
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
