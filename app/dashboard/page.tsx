import React from "react";
import Container from "@mui/material/Container";

async function DashboardPage() {
  const data = await fetch("http://localhost:3000/api/token");
  const result = await data.json();

  return (
    <div className="App" style={{ marginTop: "100px" }}>
      <Container
        sx={{
          marginTop: "100",
          backgroundColor: "#80deea",
          padding: 5,
        }}
      ></Container>
    </div>
  );
}

export default DashboardPage;
