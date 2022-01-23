import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import ReactPlayer from "react-player/youtube";
import { MiniProperty } from "../components/MiniProperty";
import { masterData, howitworks, SERVICES } from "../common/constants";
import { WorksCard } from "../components/WorksCard";
import { ServicesCard } from "../components/ServicesCard";

const Home = () => {
  const matches = useMediaQuery("(min-width:600px)");
  // const intro =
  //   "These days, however, consumers and agents don't always have the opportunity to fully immerse their senses in properties for sale. Sellers have been reluctant to open their homes to strangers, and out-of-town buyers might not be able to navigate travel restrictions. Our aim is to provide a wide range of 3D /Ariel footage content and solutions across many industries and probably the pioneer company to bring the technology to Dehradun. Using specialised cameras, we create Virtual Tours of indoor and outdoor spaces for Residential and commercial lands including  houses. While virtual tours for real estate is the main thrust of the technology, other use cases include providing legal services, construction materials, architects, contractors and security to help you build your dream house.";

  return (
    <div>
      <section className="home-intro"></section>
      <br />
      <br />
      <Typography component="section" padding={4}>
        <Typography variant="h5" component="div" marginBottom={2}>
          Our Services
        </Typography>
        <Typography
          variant="body1"
          display={"flex"}
          flexWrap="wrap"
          marginRight={-5}
        >
          {SERVICES.map((item) => (
            <ServicesCard {...item} />
          ))}
        </Typography>
      </Typography>

      <Typography component="section" padding={4}>
        <Typography variant="h5" component="div" marginBottom={2}>
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
          <Typography variant="body1" display="flex" flexWrap="nowrap">
            {masterData.map((item, index) => (
              <MiniProperty {...item} key={index} />
            ))}
          </Typography>
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
        <Typography variant="h5" component="div" marginBottom={2}>
          How it Works?
        </Typography>
        <Typography
          variant="body1"
          display={"flex"}
          flexWrap="wrap"
          marginRight={-5}
          marginBottom={-4}
        >
          {howitworks.map((item) => (
            <WorksCard {...item} />
          ))}
        </Typography>
      </Typography>

      <Typography component="section" padding={4}>
        <Typography variant="h5" component="div" marginBottom={2}>
          Sample video
        </Typography>
        <Typography>
          <ReactPlayer
            width={matches ? 640 : 320}
            height={matches ? 360 : 180}
            url="https://www.youtube.com/watch?v=QuMWSrJyt3o"
          />
        </Typography>
      </Typography>
    </div>
  );
};

export default Home;
