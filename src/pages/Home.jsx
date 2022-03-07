import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import CardMedia from "@mui/material/CardMedia";
import ReactPlayer from "react-player/youtube";
import { MiniProperty } from "../components/MiniProperty";
import { masterData, howitworks, SERVICES } from "../common/constants";
import { WorksCard } from "../components/WorksCard";
import { ServicesCard } from "../components/ServicesCard";
import CallIcon from "../common/call.svg";
import ListingIcon from "../common/listing.png";
import Fab from "@mui/material/Fab";
import { phoneNo } from "../common/constants";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const videoURL = "https://youtu.be/HfHoOBvrJEs";
  // const intro =
  //   "These days, however, consumers and agents don't always have the opportunity to fully immerse their senses in properties for sale. Sellers have been reluctant to open their homes to strangers, and out-of-town buyers might not be able to navigate travel restrictions. Our aim is to provide a wide range of 3D /Ariel footage content and solutions across many industries and probably the pioneer company to bring the technology to Dehradun. Using specialised cameras, we create Virtual Tours of indoor and outdoor spaces for Residential and commercial lands including  houses. While virtual tours for real estate is the main thrust of the technology, other use cases include providing legal services, construction materials, architects, contractors and security to help you build your dream house.";

  if (matches)
    return (
      <Typography component="main" marginTop={10}>
        <Typography variant="h5" component="div" textAlign="center">
          Please use a mobile device to view this website
        </Typography>
      </Typography>
    );

  return (
    <Typography component="main" sx={{ overflowX: "hidden" }}>
      <section className="home-intro"></section>
      <br />
      <br />

      <Typography component="section" padding={4}>
        <Typography
          variant="h5"
          component="div"
          marginBottom={2}
          textAlign="center"
        >
          Handpicked Properties
        </Typography>
        <Typography
          component="div"
          overflow="auto"
          // width="100vw"
          display="flex"
          paddingLeft="1px"
          paddingBottom={2}
        >
          <Typography
            component="div"
            variant="body1"
            display="flex"
            flexWrap="nowrap"
          >
            {masterData.map((item) => (
              <MiniProperty {...item} />
            ))}
          </Typography>
        </Typography>
      </Typography>

      <Typography
        component="div"
        padding={4}
        variant={matches ? "h3" : "h5"}
        sx={{
          backgroundColor: "aliceblue",
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CardMedia
          component="img"
          sx={{ width: 35, height: 35, marginRight: matches ? 2 : 1 }}
          image={ListingIcon}
          alt="listing"
        />
        <span>Free listing for owners</span>
      </Typography>

      <Typography component="section" padding={4}>
        <Typography
          variant="h5"
          component="div"
          marginBottom={2}
          textAlign="center"
        >
          Sample video
        </Typography>
        <Typography marginY={4} variant="body2" color="text.secondary">
          While sitting at your home comfort, we provide virtual tour of
          properties to our customers across all four corners of Dehradun, and
          outside. Our virtual touring include potential development around
          property in the upcoming future, better understanding for customers
          about the physical layout and connectivity
        </Typography>
        <Typography component="div" display="flex" justifyContent="center">
          <ReactPlayer
            width={matches ? 640 : 320}
            height={matches ? 360 : 180}
            url={videoURL}
          />
        </Typography>
      </Typography>

      <Typography
        component="div"
        padding={4}
        textAlign="center"
        variant={matches ? "h3" : "h5"}
        sx={{
          backgroundColor: "aliceblue",
        }}
      >
        All Your Construction Needs Under One Roof
      </Typography>

      <Typography component="section" padding={4}>
        <Typography
          variant="h5"
          component="div"
          marginBottom={2}
          textAlign="center"
        >
          How it Works?
        </Typography>
        <Typography
          component="div"
          variant="body1"
          display={"flex"}
          flexWrap="wrap"
          marginRight={-5}
          marginBottom={-4}
          justifyContent="center"
        >
          {howitworks.map((item) => (
            <WorksCard {...item} />
          ))}
        </Typography>
      </Typography>

      <Typography component="section" padding={4}>
        <Typography
          variant="h5"
          component="div"
          marginBottom={2}
          textAlign="center"
        >
          Our Services
        </Typography>
        <Typography
          component="div"
          variant="body1"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          marginRight={-5}
        >
          {SERVICES.map((item) => (
            <ServicesCard {...item} />
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

export default Home;
