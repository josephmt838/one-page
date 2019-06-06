import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaClipboardCheck, FaShippingFast, FaPoll } from "react-icons/fa";

const Benefits = (props) => {
  const { benefitsImg } = props;
  return (
    <section>
      <img src={benefitsImg} alt="benefits" />
      <section>
        <Card>
          <CardBody>
            <FaShippingFast size="2rem" />
            <CardTitle>Benefit 1</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <FaClipboardCheck size="2rem" />
            <CardTitle>Benefit 2</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <FaPoll size="2rem" />
            <CardTitle>Benefit 3</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardText>
          </CardBody>
        </Card>
      </section>
    </section>
  );
};

Benefits.propTypes = {
  benefitsImg: PropTypes.string
};

Benefits.defaultProps = {
  benefitsImg: "https://via.placeholder.com/250"
};

export default Benefits;
