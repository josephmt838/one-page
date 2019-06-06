import React from "react";
import PropTypes from "prop-types";
import { Nav, NavItem, NavLink } from "reactstrap";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlus
} from "react-icons/fa";

const Partners = (props) => {
  const { article1, article2 } = props;
  return (
    <section>
      <article>
        <img src={article1.img} alt="partners 1" />
        <section>
          <h3>{article1.title}</h3>
          <p>{article1.text}</p>
        </section>
      </article>
      <article>
        <section>
          <h3>{article2.title}</h3>
          <p>{article2.text}</p>
          <hr />
          <h6>Social Accounts</h6>
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
        <img src={article2.img} alt="partners 2" />
      </article>
    </section>
  );
};

Partners.propTypes = {
  article1: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  }),
  article2: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
  })
};

Partners.defaultProps = {
  article1: {
    img: "https://via.placeholder.com/500",
    title: "Partners",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat nisl."
  },
  article2: {
    img: "https://via.placeholder.com/500",
    title: "More Information about our Partners",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam faucibus purus in massa tempor nec feugiat nisl."
  }
};

export default Partners;
