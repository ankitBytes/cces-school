import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";

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
        background: "#CEF6FF",
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

      {Object.keys(cces_section).map((section, index) => {
        return (
          <CustomTabPanel value={ccestab} index={index} key={index}>
            <Grid container spacing={2} sx={{ padding: ".5rem 0" }}>
              {Object.keys(questions.cces[section]).map((questionId, index) => {
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <QuestionChart
                      data={ccesData}
                      section={section}
                      questionId={questionId}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </CustomTabPanel>
        );
      })}
    </Box>
  );
}

const cces_section = {
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

function QuestionChart({ data, section, questionId }) {
  const chartData = data.map((item) => item[section][questionId]);
  let counts = {};
  chartData.forEach((item) => {
    counts[item] = counts[item] ? counts[item] + 1 : 1;
  });

  const finalData = [];
  Object.keys(counts).map((item, index) => {
    finalData.push({ id: index, label: item, value: counts[item] });
  });
  console.log(finalData);
  return (
    <Box
      sx={{ padding: ".5rem", borderRadius: ".5rem", background: "#B1D5ED" }}
    >
      <Typography variant="subtitle1">
        {questions.cces[section][questionId]}
      </Typography>
      <Box sx={{ width: "400px", height: 300 }}>
        <PieChart
          series={[
            {
              data: finalData,
              outerRadius: 100,
              innerRadius: 30,
              cornerRadius: 2,
              paddingAngle: 5,
            },
          ]}
          // width={500}
          // height={200}
        />
      </Box>
    </Box>
  );
}
