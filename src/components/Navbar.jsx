import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <nav className="navbar-intro">
      <span>
        <span>Logo</span>
        <Link to="/">Company</Link>
      </span>
      <Link to="about">About</Link>
      <Button variant="outlined">
        <Link to="services">Services</Link>
      </Button>
    </nav>
  );
};

export default Navbar;
