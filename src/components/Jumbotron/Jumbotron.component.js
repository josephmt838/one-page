import React from "react";
import PropTypes from "prop-types";

// components
import JumboForm from "../JumboForm";

const Jumbotron = (props) => {
  const { jumboImg } = props;
  const { mainImg, mainImgAlt } = jumboImg;

  return (
    <section>
      <img src={mainImg} alt={mainImgAlt} />
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
    mainImg: "https://via.placeholder.com/250",
    mainImgAlt: "image"
  }
};

export default Jumbotron;
