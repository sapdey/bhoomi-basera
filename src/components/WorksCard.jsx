import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export const WorksCard = ({ title, logo, id }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: 175,
        height: 130,
        marginRight: 5,
        marginBottom: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      key={id}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 45, height: 45, marginRight: 3 }}
          image={logo}
          alt={title}
        />
        <Typography variant="h2" color="primary" component="div">
          {id}
        </Typography>
      </Box>
      <Typography component="div" variant="subbody" textAlign="center">
        {title}
      </Typography>
    </Card>
  );
};
