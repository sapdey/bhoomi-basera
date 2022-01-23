import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Property from "./pages/Property";
import Services from "./pages/Services";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="properties" element={<Properties />} />
        <Route path="properties/:propertyId" element={<Property />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
