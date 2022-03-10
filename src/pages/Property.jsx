import { useState } from "react";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardMedia from "@mui/material/CardMedia";
import { useParams } from "react-router-dom";
import { plotOnSale, plotOnRent } from "../common/constants";
import Fab from "@mui/material/Fab";
import CallIcon from "../common/call.svg";
import logoCollection from "../common/logocol.webp";
import ReactPlayer from "react-player/youtube";
import { phoneNo } from "../common/constants";
import FullScreenDialog from "../components/Dialog";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Property = () => {
  const { propertyId } = useParams();
  const masterData = [...plotOnSale, ...plotOnRent];
  const property = masterData[propertyId - 1];

  const matches = useMediaQuery("(min-width:600px)");

  const [activeImg, setActiveImg] = useState(-1);

  if (!property)
    return (
      <Typography padding={6} textAlign="center">
        Property not found
      </Typography>
    );

  if (matches)
    return (
      <Typography component="main" marginTop={10}>
        <Typography variant="h5" component="div" textAlign="center">
          Please use a mobile device to view this website
        </Typography>
      </Typography>
    );

  const {
    imgUrl,
    price,
    state,
    type,
    location,
    specs,
    details,
    videoURL,
    viewCount,
  } = property;
  return (
    <Typography component="main">
      <Typography
        component="section"
        padding={2}
        borderBottom="1px solid #ebecf0"
      >
        {/* <FullScreenDialog images={imgUrl} videoURL={videoURL} /> */}
        <Carousel autoPlay={false} showThumbs={false}>
          {imgUrl.map((url, i) => (
            <Typography component="div" onClick={() => setActiveImg(i)}>
              <CardMedia component="img" image={url} alt="dehradun" />
            </Typography>
          ))}
        </Carousel>
        <Modal
          open={activeImg > -1}
          onClose={() => setActiveImg(-1)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box bgcolor="white">
            <Typography
              component="div"
              variant="h4"
              textAlign="right"
              marginRight={2}
              marginBottom="-40px"
              onClick={() => setActiveImg(-1)}
            >
              x
            </Typography>
            <Typography
              component="div"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100vh"
            >
              {/* <CardMedia
                component="img"
                image={crossUrl}
                alt="active-image"
                // width={100}
                height={30}
              /> */}
              {/* <CardMedia
                component="img"
                image={activeImg}
                alt="active-image"
                width="100%"
              /> */}
              <Carousel
                selectedItem={activeImg}
                autoPlay={false}
                showThumbs={false}
              >
                {imgUrl.map((url) => (
                  <Typography component="div">
                    <CardMedia component="img" image={url} alt="dehradun" />
                  </Typography>
                ))}
              </Carousel>
            </Typography>
          </Box>
        </Modal>
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
          {type}
        </Typography>
        <Typography variant="body2" marginTop={0.5} style={{ fontWeight: 700 }}>
          {location}
        </Typography>
        <Typography display="flex" component="div" marginTop={2}>
          {specs.map(({ value, type, logo, color, position }) => (
            <Typography
              component="div"
              key={value}
              marginX={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Typography
                component="div"
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
          {viewCount} people are currently viewing this property
        </Typography>
        <Typography component="div" variant="h5" marginBottom={2}>
          Property Details
        </Typography>
        <Typography component="table">
          <Typography component="tbody">
            {Object.keys(details).map((key) => (
              <Typography component="tr" key={key}>
                <Typography
                  component="td"
                  width="131px"
                  marginBottom={3}
                  display="inline-block"
                  style={{
                    fontWeight: 400,
                    color: "#42526e",
                    fontSize: "12px",
                  }}
                >
                  {key}
                </Typography>
                <Typography
                  component="td"
                  marginBottom={3}
                  display="inline-block"
                  style={{
                    fontWeight: 700,
                    color: "#091E42",
                    fontSize: "12px",
                  }}
                >
                  {details[key]}
                </Typography>
              </Typography>
            ))}
          </Typography>
        </Typography>
        <Typography component="div" variant="h5" marginBottom={2}>
          Property Drone view
        </Typography>
        <Typography
          component="div"
          marginTop={2}
          display="flex"
          justifyContent="center"
        >
          <ReactPlayer
            width={matches ? 640 : 320}
            height={matches ? 360 : 180}
            url={videoURL}
          />
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
