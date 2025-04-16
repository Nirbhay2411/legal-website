import { useState } from "react";
import { Link } from "react-router-dom";
import { Scale, Gavel } from "lucide-react";
import "../assets/css/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
      <div className="logo">
      <Scale className="law-icon" /> 
          <span className="logo-text">Legal Counsaltation </span>
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          {/* <li><a href="/">Home</a></li> */}
          {/* <li><a href="/Appointment">Appontment</a></li> */}
          {/* <li><a href="/About ">About us</a></li>
          <li><a href="/contact ">contact us</a></li> */}
          {/* <li><a href="/Contest">Contests</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Pet</a></li> */}
        </ul>

        <div className="auth-buttons">
         
          <Link to="/login">
            <button className="login">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup">Sign Up</button>
          </Link>
          
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
