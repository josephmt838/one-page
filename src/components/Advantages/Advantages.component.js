import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { FaCode, FaCalendarDay, FaMobileAlt } from "react-icons/fa";

const Advantages = (props) => {
  const { cards } = props;
  return (
    <section>
      <h1>Advantages</h1>
      <section>
        {cards &&
          cards.length &&
          cards.map((card) => {
            const { icon, title, text } = card;
            return (
              <Card>
                <CardBody>
                {icon}
                <CardTitle>{title}</CardTitle>
                <CardText>{text}</CardText>
                </CardBody>
              </Card>
            );
          })}
      </section>
    </section>
  );
};

Advantages.propTypes = {
  cards: PropTypes.array
};

Advantages.defaultProps = {
  cards: [
    {
      icon: <FaCode color="gray" size="1.6em" />,
      title: "Feature One",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar neque laoreet suspendisse interdum. Ornare massa eget egestas purus viverra accumsan in nisl nisi."
    },
    {
      icon: <FaCalendarDay color="gray" size="1.6em" />,
      title: "Feature Two",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id venenatis a condimentum vitae sapien pellentesque habitant morbi. Augue ut lectus arcu bibendum."
    },
    {
      icon: <FaMobileAlt color="gray" size="1.6em" />,
      title: "Feature Three",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tempor nec feugiat nisl pretium fusce. Diam maecenas ultricies mi eget mauris pharetra et."
    }
  ]
};

export default Advantages;
