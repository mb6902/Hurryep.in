import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
// import { Link } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import menu_icon from "../../assets/menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [clickMenu, setClickMenu] = useState(false);
  function toggleMenu() {
    clickMenu ? setClickMenu(false) : setClickMenu(true);
  }
  const location = useLocation();
  const isActiveLink = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };
  // Function to scroll to top of the page
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : " "}`}>
      <Link to="/" onClick={scrollToTop}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className={clickMenu ? "" : "hide-menu"}>
        <li>
          <Link
            to="/"
            onClick={scrollToTop}
            className={`nav-link ${isActiveLink("/")}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={scrollToTop}
            to="/aboutpage"
            className={`nav-link ${isActiveLink("/aboutpage")}`}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            onClick={scrollToTop}
            to="/servicespage"
            className={`nav-link ${isActiveLink("/servicespage")}`}
          >
            Our Services
          </Link>
        </li>
        {/* <li>
          <Link
            to="/aboutpage"
            className={`nav-link ${isActiveLink("/aboutpage")}`}
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            to="/aboutpage"
            className={`nav-link ${isActiveLink("/aboutpage")}`}
          >
            Plans
          </Link>
        </li> */}
        <li>
          <Link
            onClick={scrollToTop}
            to="/contactpage"
            className={`nav-link ${isActiveLink("/contactpage")}`}
          >
            Contact us
          </Link>
        </li>
        <li>
          <button className="button-85" style={{ fontSize: "18px", fontWeight:"bold" }}>
            <Link to="/contactpage" onClick={scrollToTop}>
              Get Started
            </Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
