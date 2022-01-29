import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";

export const ServicesCard = ({ title, logo, id, body }) => {
  return (
    <Card
      key={id}
      variant="outlined"
      sx={{ width: 420, marginRight: 5, marginBottom: 5, border: "none" }}
    >
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 45, height: 45, marginRight: 3 }}
            image={logo}
            alt={title}
          />
          <Box>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
            <Typography
              component="div"
              variant="body2"
              color="text.secondary"
              // textAlign="center"
            >
              {body}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Card>
  );
};
