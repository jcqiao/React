import React from "react";
import Button from "../Button";
function FooterScription() {
  return (
    <>
      <p className="footer-subscription-heading">
        Join the Adventure newsletter to receive our best vacation deals
      </p>
      <p className="footer-subscription-text">
        You can unsubscribe at any time.
      </p>
      <div className="input-areas">
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Your Email"
          />
          <Button buttonStyle="btn--outline">Subscribe</Button>
        </form>
      </div>
    </>
  );
}

export default FooterScription;
