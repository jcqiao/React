import React from "react";
import "./footer.css";
import FooterScription from "./footerScription";
import { Link } from "react-router-dom";
import FooterLinkItem from "./footerLinkItem";
import IconLink from "../icon/iconLink";
import { footerLinkItems, iconItems } from "./data";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <FooterScription />
      </section>
      <div class="footer-links">
        <FooterLinkItem item={footerLinkItems} />
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              TRVL
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights">TRVL © 2020</small>
          <div class="social-icons">
            <IconLink item={iconItems} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
