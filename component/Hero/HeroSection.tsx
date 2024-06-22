import React from "react";
import { Box, Typography } from "@mui/material";
import { url } from "inspector";

const HeroSectionPage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(/images/laptop.jpg)`,
          textAlign: "center",
          py: 8,
          mt: 10,
          minHeight: 600,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          component="p"
          sx={{
            mb: 4,
            fontWeight: "bold",
          }}
        >
          {description}
        </Typography>
      </Box>
    </>
  );
};

export default HeroSectionPage;
