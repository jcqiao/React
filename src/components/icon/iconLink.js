import React from "react";
import { Link } from "react-router-dom";

function IconLink(props) {
  const { item } = props;
  return item.map((item, index) => {
    return (
      <>
        <Link
          class={`social-icon-link ${item.linkClass}`}
          to="/"
          target="_blank"
          aria-label={item.title}
          key={index}
        >
          <i class={item.iconClass} />
        </Link>
      </>
    );
  });
}

export default IconLink;
