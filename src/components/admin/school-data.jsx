import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useContext } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomTabPanel from "../custom-tab-panel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// meta data
import questions from "../../data/questions.json";

import { serverData } from "../../contexts/formContexts";
import PropTypes from "prop-types";

export default function SchoolDataTab() {
  const { primaryData, ccesData, sapData } = useContext(serverData);

  const [ccesformModal, set_ccesformModal] = useState({
    open: false,
    uDiseCode: "",
  });
  const [sapformModal, set_sapformModal] = useState({
    open: false,
    uDiseCode: "",
  });

  const rows = primaryData.map((school, index) => {
    return {
      id: index,
      col1: school.uDiseCode,
      col2: school.NameAndAddress,
      col3: school.Respondent,
      col4: school.RespondentDesignation,
      col5: school.SchoolPhone,
    };
  });

  const columns = [
    { field: "col1", headerName: "U-Dise Code", width: 120 },
    { field: "col2", headerName: "School Name and Address", width: 220 },
    { field: "col3", headerName: "Respondent Name", width: 180 },
    { field: "col4", headerName: "Respondent's Designation", width: 200 },
    { field: "col5", headerName: "School Phone", width: 150 },
    {
      field: "col6",
      headerName: "Cces Data",
      width: 120,
      renderCell: () => <OpenInNewIcon />,
      disableClickEventBubbling: true,
    },
    {
      field: "col7",
      headerName: "Sap Data",
      width: 120,
      renderCell: () => <OpenInNewIcon />,
      disableClickEventBubbling: true,
    },
  ];

  const handleCellClick = (params, event) => {
    const uDiseCode = params.row.col1;
    console.log(uDiseCode);
    if (params.field === "col6") {
      set_ccesformModal({ open: true, uDiseCode: uDiseCode });
    } else if (params.field === "col7") {
      set_sapformModal({ open: true, uDiseCode: uDiseCode });
    }
  };

  return (
    <Box
      sx={{
        margin: ".5rem 0",
        padding: "1rem",
        borderRadius: "1rem",
        background: "#CEF6FF",
        height: "80vh",
        maxHeight: "82vh",
      }}
    >
      <Typography variant="h6" sx={{ color: "#0056B0" }}>
        Schools
      </Typography>
      <Box sx={{ height: "90%" }}>
        <DataGrid rows={rows} columns={columns} onCellClick={handleCellClick} />
      </Box>
      <CcesFormDataModal
        open={ccesformModal}
        set_open={set_ccesformModal}
        formData={ccesData}
      />
      <SapFormDataModal
        open={sapformModal}
        set_open={set_sapformModal}
        formData={sapData}
      />
    </Box>
  );
}

const ccesSectionList = {
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

const sapSectionList = {
  section1: "Risk assessment, analysis, preventive measures, Plan",
  section2: "Water",
  section3: "Sanitation",
  section4: "Handwashing with soap & water",
  section5: "Waste Management",
  section6: "O and M",
  section7: "Energy",
  section8: "Environment",
  section9: "Behaviour Change and Capacity Building",
};

function CcesFormDataModal(props) {
  const { open, set_open, formData } = props;
  const uDiseCode = open.uDiseCode;
  const school = formData.filter((item) => item.uDiseCode === uDiseCode);

  const [tab, set_tab] = useState(0);
  return (
    <Modal
      open={open.open}
      onClose={() => set_open({ ...open, open: false })}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          left: "5%",
          width: "90%",
          bgcolor: "#E6F4F1",
          border: "2px solid #000",
          borderRadius: "1rem",
          boxShadow: 24,
          p: 3,
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            CCES Section Data - {uDiseCode}
          </Typography>

          <Button
            variant="text"
            size="small"
            color="error"
            onClick={() => set_open({ ...open, open: false })}
            sx={{ padding: ".5rem" }}
          >
            <CloseIcon />
          </Button>
        </Stack>
        <Box sx={{ marginTop: ".5rem" }}>
          <Tabs
            value={tab}
            onChange={(e, newValue) => set_tab(newValue)}
            aria-label="basic tabs"
            scrollButtons="auto"
            variant="scrollable"
          >
            {Object.values(ccesSectionList).map((value, index) => (
              <Tab label={value} key={index} />
            ))}
          </Tabs>
        </Box>

        {Object.keys(ccesSectionList).map((section, index) => {
          // console.log(questions.cces[section])
          return (
            <CustomTabPanel value={tab} index={index} key={index}>
              <Stack direction={"column"} spacing={1}>
                {Object.keys(questions.cces[section]).map((data, index) => (
                  <QuestionListCces
                    data={questions}
                    section={section}
                    questionId={data}
                    school={school}
                    key={index}
                  />
                ))}
              </Stack>
            </CustomTabPanel>
          );
        })}
      </Box>
    </Modal>
  );
}

function SapFormDataModal(props) {
  const { open, set_open, formData } = props;
  const uDiseCode = open.uDiseCode;
  // console.log(uDiseCode, typeof uDiseCode);
  const school = formData.filter((item) => item.uDiseCode === uDiseCode);
  const [tab, set_tab] = useState(0);

  return (
    <Modal
      open={open.open}
      onClose={() => set_open({ ...open, open: false })}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "8%",
          left: "5%",
          width: "90%",
          bgcolor: "#E6F4F1",
          border: "2px solid #000",
          borderRadius: "1rem",
          boxShadow: 24,
          p: 3,
          height: "80vh",
          overflow: "auto",
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            SAP Section Data
          </Typography>

          <Button
            variant="text"
            size="small"
            color="error"
            onClick={() => set_open({ ...open, open: false })}
            sx={{ padding: ".5rem" }}
          >
            <CloseIcon />
          </Button>
        </Stack>
        <Box sx={{ marginTop: ".5rem" }}>
          <Tabs
            value={tab}
            onChange={(e, newValue) => set_tab(newValue)}
            aria-label="basic tabs"
            scrollButtons="auto"
            variant="scrollable"
          >
            {Object.values(sapSectionList).map((value, index) => (
              <Tab label={value} key={index} />
            ))}
          </Tabs>
        </Box>

        {Object.keys(sapSectionList).map((section, index) => {
          return (
            <CustomTabPanel value={tab} index={index} key={index}>
              <Stack direction={"column"} spacing={1}>
                {Object.keys(questions.sap[section]).map((data, index) => (
                  <QuestionListSap
                    data={questions}
                    section={section}
                    questionId={data}
                    school={school}
                    key={index}
                  />
                ))}
              </Stack>
            </CustomTabPanel>
          );
        })}
      </Box>
    </Modal>
  );
}

function QuestionListCces({ data, section, questionId, school }) {
  const schoolData = school[0][section][questionId];
  return (
    <Box
      sx={{ background: "#cef6ff", padding: ".5rem", borderRadius: ".5rem" }}
    >
      <Typography fontWeight={"bold"}>
        Q) {data.cces[section][questionId]}
      </Typography>

      <Box
        sx={{
          background: "#ceddff",
          marginLeft: "1.5rem",
          padding: ".125rem .75rem",
          borderRadius: ".25rem",
        }}
      >
        {typeof schoolData === "object" ? (
          Object.keys(schoolData).map((dataList, index) => (
            <Typography key={index}>{schoolData[dataList]}</Typography>
          ))
        ) : (
          <Typography>{schoolData}</Typography>
        )}
      </Box>
    </Box>
  );
}

function QuestionListSap({ data, section, questionId, school }) {
  const schoolData = school[0][section][questionId];
  return (
    <Box
      sx={{ background: "#cef6ff", padding: ".5rem", borderRadius: ".5rem" }}
    >
      <Typography fontWeight={"bold"}>
        Q) {data.sap[section][questionId]}
      </Typography>

      <Box
        sx={{
          background: "#ceddff",
          marginLeft: "1.5rem",
          padding: ".125rem .75rem",
          borderRadius: ".25rem",
        }}
      >
        <Typography>{schoolData}</Typography>
      </Box>
    </Box>
  );
}
