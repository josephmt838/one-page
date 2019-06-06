import React from "react";
import PropTypes from "prop-types";

// components
import JumboForm from "../JumboForm";
import "./Jumbotron.scss";

const Jumbotron = (props) => {
  const { jumboImg } = props;
  const { mainImg, mainImgAlt } = jumboImg;

  return (
    <section id="jumbotron">
      <section className="jumbo-left">
        <img src={mainImg} alt={mainImgAlt} />
      </section>

      <JumboForm />
    </section>
  );
};

Jumbotron.propTypes = {
  jumboImg: PropTypes.shape({
    mainImg: PropTypes.string,
    mainImgAlt: PropTypes.string
  })
};

Jumbotron.defaultProps = {
  jumboImg: {
    mainImg: "https://via.placeholder.com/600",
    mainImgAlt: "image"
  }
};

export default Jumbotron;
