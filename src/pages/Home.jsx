import Typography from "@mui/material/Typography";

const Home = () => {
  const intro =
    "These days, however, consumers and agents don't always have the opportunity to fully immerse their senses in properties for sale. Sellers have been reluctant to open their homes to strangers, and out-of-town buyers might not be able to navigate travel restrictions. Our aim is to provide a wide range of 3D /Ariel footage content and solutions across many industries and probably the pioneer company to bring the technology to Dehradun. Using specialised cameras, we create Virtual Tours of indoor and outdoor spaces for Residential and commercial lands including  houses. While virtual tours for real estate is the main thrust of the technology, other use cases include providing legal services, construction materials, architects, contractors and security to help you build your dream house.";
  return (
    <div>
      <section className="home-intro"></section>
      <section>
        <Typography variant="body1" gutterBottom>
          {intro}
        </Typography>
      </section>
    </div>
  );
};

export default Home;
