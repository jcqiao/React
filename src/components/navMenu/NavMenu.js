import React, { useState } from "react";
import NavMenuItem from "./NavMenuItem";
import Button from "../Button";

function NavMenu(props) {
  const { menuClick } = props;
  const [button, setButton] = useState(false);

  const showButton = () => {
    window.innerWidth <= 960 ? setButton(false) : setButton(true);
  };
  window.addEventListener("resize", showButton);
  return (
    <>
      <ul className={menuClick ? "nav-menu active" : "nav-menu "}>
        <NavMenuItem {...props} />
      </ul>
      {button && <Button buttonStyle="btn-outline">Sign Up</Button>}
    </>
  );
}

export default NavMenu;
