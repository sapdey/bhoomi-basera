import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";
import { masterData } from "../common/constants";
import Fab from "@mui/material/Fab";
import CallIcon from "../common/call.svg";
import logoCollection from "../common/logocol.webp";
import { phoneNo } from "../common/constants";

const Property = () => {
  const { propertyId } = useParams();
  const property = masterData[propertyId - 1];

  const matches = useMediaQuery("(min-width:600px)");

  if (!property)
    return (
      <Typography padding={6} textAlign="center">
        Property not found
      </Typography>
    );

  const { imgUrl, price, state, type, location, specs, details } = property;
  return (
    <Typography component="main">
      <Typography
        component="section"
        padding={2}
        borderBottom="1px solid #ebecf0"
      >
        <CardMedia component="img" height="180" image={imgUrl} alt="image" />
        <Typography
          variant="h5"
          paddingTop={2}
          paddingBottom={1}
          marginLeft={0.5}
          component="div"
        >
          {price}
        </Typography>
        <Typography
          variant="body2"
          color="#42526E"
          border="1px solid #EBECF0"
          display="inline-block"
          paddingX={1}
          style={{
            backgroundColor: "#F1F5FF",
          }}
        >
          {state}
        </Typography>
      </Typography>
      <Typography component="section" padding={2} paddingTop={3}>
        <Typography variant="body2" style={{ fontWeight: 400 }} color="#42526E">
          Residential Land for {type} in
        </Typography>
        <Typography variant="body2" marginTop={0.5} style={{ fontWeight: 700 }}>
          {location}
        </Typography>
        <Typography display="flex" component="div" marginTop={2}>
          {specs.map(({ value, type, logo, color, position }) => (
            <Typography
              key={logo}
              marginX={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {/* <CardMedia component="img" height="20" image={logo} alt="image" /> */}
              <Typography
                style={{
                  background: color,
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  component="i"
                  style={{
                    background: `url(${logoCollection})`,
                    width: "20px",
                    height: "20px",
                    backgroundSize: "340px 166px",
                    display: "inline-block",
                    verticalSlign: "middle",
                    fontStyle: "normal",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: position,
                  }}
                ></Typography>
              </Typography>
              <Typography fontSize={12}>{value}</Typography>
              <Typography fontSize={12}>{type}</Typography>
            </Typography>
          ))}
        </Typography>
        <Typography
          component="div"
          variant="body1"
          marginY={2}
          style={{
            background: "#F4F5F7",
            padding: "12px 16px",
            borderRadius: "8px",
            color: "#091E42",
            fontSize: "12px",
          }}
        >
          4 people are currently viewing this property
        </Typography>
        <Typography component="div" variant="h5" marginBottom={2}>
          Property Details
        </Typography>
        <Typography component="table">
          {Object.keys(details).map((key) => (
            <Typography component="tr">
              <Typography
                component="td"
                width="131px"
                marginBottom={3}
                display="inline-block"
                style={{ fontWeight: 400, color: "#42526e", fontSize: "12px" }}
              >
                {key}
              </Typography>
              <Typography
                component="td"
                marginBottom={3}
                display="inline-block"
                style={{ fontWeight: 700, color: "#091E42", fontSize: "12px" }}
              >
                {details[key]}
              </Typography>
            </Typography>
          ))}
        </Typography>
      </Typography>
      <Typography
        component="div"
        position="fixed"
        zIndex={5}
        bottom={20}
        right={20}
        display="flex"
        flexDirection="column"
      >
        <Fab>
          <a href={`tel:${phoneNo}`}>
            <CardMedia
              component="img"
              sx={{ width: 35, height: 35, marginX: matches ? 3 : 1 }}
              image={CallIcon}
              alt="call"
            />
          </a>
        </Fab>
        <br />
        <Fab color="white" aria-label="whatsapp">
          <a
            href={`https://api.whatsapp.com/send?phone=${phoneNo}`}
            className="whatsappLogo"
          />
        </Fab>
      </Typography>
    </Typography>
  );
};

export default Property;
