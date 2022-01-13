import Typography from "@mui/material/Typography";

const Services = () => {
  const servicesContent = [
    {
      name: "Property Portal",
      body: "We are Doon's first property portal, which deals with every aspect of the consumers' needs in the real estate industry. we provides detail overview of the property which we post in our portal. Our Studio house executives' does the site visit and understand all aspects of property and capture them in 3D/Arial footages for better understanding.",
    },
    {
      name: "Legal Advisory",
      body: "Buying a home is probably the biggest investment you'll ever make, you might consider a real estate legal advisor to guide you through the legal process. Real estate advisors specialize in matters related to property, from transactions to handling disputes between parties.",
    },
    {
      name: "Architects",
      body: "Without an architect, your home addition project or new construction build can become a lot more complicated. Our offering include highly experienced architect to provide a variety of services for residential projects. They can design custom homes and outdoor spaces. They can negotiate on the homeowner's behalf, and they can oversee the project from inception to completion.",
    },
    {
      name: "Construction Materials",
      body: "The construction of the house involves more than 100 different types of materials. This is not to scare you but you will be spending a lot of time towards buying all materials. Buying building materials also involves various stages like selection of the right product, search for the right supplier, right quality or specifications and finally negotiating a fair deal. But that's not it. The second phase starts from the delivery of the materials at the site, verifying the quantity and quality delivered at the site, checking the bills of material delivered and ultimately payments and settling accounts. We know all this is overwhelmingly time-consuming and demanding. We provide team of  highly skilled and knowledgeable people to make it a hassle-free transition.",
    },
    {
      name: "Contractors",
      body: "In any construction project there are three main parties involved: the owner or client, the management team, and the contractor. We offer best contractor from town to coordinates construction activities, and to complete the project within the established time and budget. Our  Contractors will be  responsible for the entire construction process, and  determine the best methods to finish the project as specified.",
    },
    {
      name: "Security services",
      body: "Are you outside from Uttarakhand ? and is afraid of Investing ?. Don't worry we offer security services against your property. Out team schedule a weekly visit at  consumers' property and you will be notified with weekly reports and recent  images of your property.",
    },
  ];
  return (
    <div>
      {servicesContent.map(({ name, body }, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom component="div">
            {name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {body}
          </Typography>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Services;
