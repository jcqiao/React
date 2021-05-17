import React from "react";
import { Link } from "react-router-dom";

function NavMenuItem(props) {
  const { item } = props;
  return item.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <Link
          className={item.name === "Sign Up" ? "nav-links-mobile" : "nav-links"}
          to={item.path}
          onClick={item.onclick ? item.onclick : ""}
        >
          {item.name}
        </Link>
      </li>
    );
  });
}

export default NavMenuItem;
