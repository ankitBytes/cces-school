import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        Home page
        <Link to={{pathname:"/survey",hash:"sectionA"}}>
          <Button variant="contained">go to survey</Button>
        </Link>
      </Container>
    </div>
  );
}
