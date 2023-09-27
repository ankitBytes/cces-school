import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";

import { PieChart } from "@mui/x-charts/PieChart";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";

import questions from "../../data/questions.json";

// components
import CustomTabPanel from "../custom-tab-panel";

export default function FormDataCharts() {
  const [ccestab, set_ccestab] = useState(0);
  const [ccesData, set_ccesData] = useState([]);

  // console.log(questions);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "UnicefSurveyCces"),
      (snapshot) => {
        const updatedList = snapshot.docs.map((doc) => doc.data());
        set_ccesData(updatedList);
        console.log(updatedList);
      }
    );
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  return (
    <Box
      sx={{
        margin: ".5rem 0",
        padding: "1rem",
        borderRadius: "1rem",
        background: "#eef",
      }}
    >
      <Typography variant="h6">Charts</Typography>

      <Box sx={{ marginTop: ".5rem" }}>
        <Tabs
          value={ccestab}
          onChange={(e, newValue) => set_ccestab(newValue)}
          aria-label="basic tabs"
          scrollButtons="auto"
          variant="scrollable"
        >
          {Object.values(cces_section).map((item, index) => (
            <Tab label={item} key={index} />
          ))}
        </Tabs>
      </Box>

      <CustomTabPanel value={ccestab} index={0}>
        <Stack direction="column" spacing={2} sx={{ padding: ".5rem 0" }}>
          {Object.keys(questions.cces["sectionB1"]).map((questionId, index) => {
            console.log(questionId);
            return (
              <QuestionChart
                data={ccesData}
                section={"sectionB1"}
                questionId={questionId}
                key={index}
              />
            );
          })}
        </Stack>
      </CustomTabPanel>

      <CustomTabPanel value={ccestab} index={1}>
        <Stack direction="column" spacing={2} sx={{ padding: ".5rem 0" }}>
          {Object.keys(questions.cces["sectionB2"]).map((questionId, index) => {
            console.log(questionId);
            return (
              <QuestionChart
                data={ccesData}
                section={"sectionB2"}
                questionId={questionId}
                key={index}
              />
            );
          })}
        </Stack>
      </CustomTabPanel>

    </Box>
  );
}

const cces_section = {
  b1: "Risk assessment, analysis, preventive measures, Plan",
  b2: "Water",
  b3: "Sanitation",
  b4: "Handwashing with soap",
  b5: "Waste Management",
  b6: "Energy",
  b7: "Environment",
  b8: "O and M",
  b9: "Capacity Building and Behaviour Change",
};

function QuestionChart({ data, section, questionId }) {
  const chartData = data.map((item) => item[section][questionId]);
  let counts = {};
  chartData.forEach((item) => {
    counts[item] = counts[item] ? counts[item] + 1 : 1;
  });
  // console.log(counts);

  const finalData = [];
  Object.keys(counts).map((item, index) => {
    finalData.push({ id: index, label: item, value: counts[item] });
  });
  console.log(finalData);
  return (
    <Box sx={{ padding: ".5rem", borderRadius: ".5rem", background: "#ddf" }}>
      <Typography variant="subtitle1">
        {questions.cces[section][questionId]}
      </Typography>
      <PieChart
        series={[
          {
            data: finalData,
          },
        ]}
        width={250}
        height={200}
      />
    </Box>
  );
}
