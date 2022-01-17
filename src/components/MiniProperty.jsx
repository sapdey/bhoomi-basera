import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { CardActionArea } from "@mui/material";

export const MiniProperty = ({ price, imgUrl, detail, specs, key }) => {
  return (
    <Card sx={{ width: 250, marginRight: "24px" }} key={key}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={imgUrl} alt="image" />
        <CardContent>
          <Typography variant="h6" component="div">
            {price}
          </Typography>
          <Typography paddingBottom={2} variant="body2" color="text.secondary">
            {detail}
          </Typography>
          <Divider />
          <Typography
            paddingTop={2}
            marginX={-1}
            component="div"
            display="flex"
          >
            {specs.map(({ type, value }, index) => (
              <>
                {index !== 0 && <Divider orientation="vertical" flexItem />}
                <Typography paddingX={1} component="div" key={index}>
                  <Typography variant="body2" color="text.primary">
                    {value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {type}
                  </Typography>
                </Typography>
              </>
            ))}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
