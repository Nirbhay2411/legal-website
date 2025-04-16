import "../../assets/css/Navbar.css";
import { Scale } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaEnvelope, FaUser, FaUserTag } from "react-icons/fa";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const isLoggedIn = Boolean(localStorage.getItem("id"));
  const firstName = localStorage.getItem("firstName") || "";
  const lastName = localStorage.getItem("lastName") || "";
  const email = localStorage.getItem("email") || "";
  const role = localStorage.getItem("role") || "";

  const isLawyer = role.toLowerCase() === "lawyer";

  const getInitials = () => {
    const firstInitial = firstName.charAt(0).toUpperCase();
    const lastInitial = lastName.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const logout = () => {
    localStorage.clear();
    alert("You have been logged out.");
    window.location.href = "/";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <Scale className="law-icon" />
          <span className="logo-text">Legal Consultation</span>
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          {!isLoggedIn ? (
            <>
              {/* Public links can go here if needed */}
            </>
          ) : isLawyer ? (
            <>
              <li><Link to="/lawyer-dashboard">Dashboard</Link></li>
              {/* <li><Link to="/lawyer-clients">My Clients</Link></li> */}
              <li><Link to="/lawyer-queries">Client Queries</Link></li>
              <li><Link to="/about ">About Us </Link></li>
            </>
          ) : (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about ">About Us </Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              
            </>
          )}
        </ul>

        {/* Profile or Login */}
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <>
              <Link to="/login"><button className="login">Login</button></Link>
              <Link to="/signup"><button className="signup">Sign Up</button></Link>
            </>
          ) : (
            <div className="profile-section" ref={dropdownRef}>
              <div className="profile-circle" onClick={toggleDropdown}>
                {getInitials()}
              </div>
              {dropdownVisible && (
                <div className="profile-dropdown glass">
                  <p><FaUser /> <strong>Name:</strong> {firstName} {lastName}</p>
                  <p><FaEnvelope /> <strong>Email:</strong> {email}</p>
                  <p><FaUserTag /> <strong>Role:</strong> {role}</p>
                  <button className="logout" onClick={logout}>Logout</button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
