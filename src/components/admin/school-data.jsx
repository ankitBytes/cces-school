import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../firebase";

export default function SchoolDataTab() {
  const [schools, set_schools] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "SchoolInfo"), (snapshot) => {
      const updatedList = snapshot.docs.map((doc) => doc.data());
      set_schools(updatedList);
      console.log(updatedList);
    });
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  const rows = schools.map((school, index) => {
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
    { field: "col1", headerName: "U-Dise Code", width: 100 },
    { field: "col2", headerName: "School Name and Address", width: 250 },
    { field: "col3", headerName: "Respondent Name", width: 150 },
    { field: "col4", headerName: "Respondent's Designation", width: 200 },
    { field: "col5", headerName: "School Phone", width: 120 },
  ];
  return (
    <Box
      sx={{
        margin: ".5rem 0",
        padding: "1rem",
        borderRadius: "1rem",
        background: "#eef",
        maxHeight: "80vh",
      }}
    >
      <Typography variant="h6">Schools</Typography>
      <DataGrid rows={rows} columns={columns} />
    </Box>
  );
}
