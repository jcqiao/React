import React from "react";
import { Link } from "react-router-dom";

function FooterLinkItem(props) {
  const { item } = props;
  return (
    <div class="footer-link-items">
      {item.map((item, index) => {
        return (
          <div className="footer-link-wrapper" key={index}>
            <h2>{item.title}</h2>
            <Link to={item.path} exact={item.exact ? item.exact : "false"}>
              {item.text}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default FooterLinkItem;
