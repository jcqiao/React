import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/navMenu/NavMenu";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const item = [
    {
      name: "Home",
      path: "/",
      onclick: () => {
        console.log("Home");
      },
    },
    {
      name: "Service",
      path: "/service",
      onclick: () => {
        console.log("service");
      },
    },
    {
      name: "Products",
      path: "/products",
      onclick: () => {
        console.log("products");
      },
    },
  ];
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fas fa-bomb"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <NavMenu
            item={item}
            menuClick={click}
            closeMobileMenu={closeMobileMenu}
          />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
