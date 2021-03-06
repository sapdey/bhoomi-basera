import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { CardActionArea } from "@mui/material";

export const MiniProperty = ({ price, imgUrl, location, specs, id }) => {
  return (
    <Link key={id} to={`properties/${id}`}>
      <Card sx={{ width: 250, marginRight: "24px" }} key={id}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imgUrl[0]}
            alt="image"
          />
          <CardContent>
            <Typography variant="h6" component="div">
              {price}
            </Typography>
            <Typography
              paddingBottom={2}
              variant="body2"
              color="text.secondary"
            >
              {location}
            </Typography>
            <Divider />
            <Typography
              paddingTop={2}
              marginX={-1}
              component="div"
              display="flex"
            >
              {specs.map(({ type, value }, index) => (
                <React.Fragment key={index}>
                  {index !== 0 && <Divider orientation="vertical" flexItem />}
                  <Typography paddingX={1} component="div">
                    <Typography variant="body2" color="text.primary">
                      {value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {type}
                    </Typography>
                  </Typography>
                </React.Fragment>
              ))}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
