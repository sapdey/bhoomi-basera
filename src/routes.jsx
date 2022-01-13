import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}></Route>
        {/* <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} /> */}
        <Route path="services" element={<Services />}></Route>
      </Route>
    </Routes>
  );
};

export default ApplicationRoutes;
