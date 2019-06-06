import React, { useState } from "react";
import { Input, Button, Nav, NavItem, NavLink } from "reactstrap";
import {
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaTwitter,
  FaBullseye
} from "react-icons/fa";

const Footer = (props) => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  return (
    <footer>
      <section>
        <FaBullseye />
        <h6>Company Social</h6>
        <Nav>
          <NavItem>
            <NavLink href="https://www.facebook.com">
              <FaFacebook />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.twitter.com">
              <FaTwitter />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com">
              <FaLinkedin />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.google.com">
              <FaGooglePlus />
            </NavLink>
          </NavItem>
        </Nav>
      </section>
      <section>
        <h6>Resources</h6>
        <ul>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Investors</a>
          </li>
          <li>
            <a href="#">Affiliates</a>
          </li>
        </ul>
      </section>
      <section>
        <h6>Subscribe</h6>
        <span>
          <Input
            type="email"
            value={subscribeEmail}
            onChange={(e) => setSubscribeEmail(e.target.value)}
          />
          <Button
            color="primary"
            onClick={() =>
              alert(`${subscribeEmail} has been set up for email list.`)
            }
          >
            Get News Now
          </Button>
        </span>
      </section>
    </footer>
  );
};

export default Footer;
