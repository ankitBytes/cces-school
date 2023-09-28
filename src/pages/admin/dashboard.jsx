import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import DashboardNav from "../../components/admin/dashboard-nav";
import SchoolDataTab from "../../components/admin/school-data";
import FormDataCharts from "../../components/admin/form-charts";

export default function AdminDashboard() {
  const [currentView, set_currentView] = useState(null);

  return (
    <Box>
      <DashboardNav set_currentView={set_currentView} />
      <Container maxWidth="lg">
        <Box
          sx={{
            margin: ".5rem 0",
            padding: "1rem",
            borderRadius: "1rem",
            background: "#CEF6FF",
          }}
        >
          <Typography variant="subtitle1">
            Total Registered Schools:{"  "}
            <Typography variant="subtitle1" component={"span"}>
              {Number(100)}
            </Typography>
          </Typography>
        </Box>

        {currentView === "schools" ? <SchoolDataTab /> : <FormDataCharts />}
      </Container>
    </Box>
  );
}
