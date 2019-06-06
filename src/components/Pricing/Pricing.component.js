import React from "react";
import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  Button
} from "reactstrap";

const Pricing = (props) => {
  const { plans } = props;
  return (
    <section>
      {plans &&
        plans.length &&
        plans.map((plan) => {
          const { title, text, icon, price, ctaBtnText } = plan;
          return (
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardBody>
                {icon}
                <CardSubtitle>{price}/mnth</CardSubtitle>
                <CardText>{text}</CardText>
              </CardBody>
              <Button>{ctaBtnText}</Button>
            </Card>
          );
        })}
    </section>
  );
};

Pricing.propTypes = {
  plans: PropTypes.array
};

Pricing.defaultProps = {
  plans: [
    {
      title: "Free Plan",
      text: "sed vulputate odio ut enim blandit volutpat maecenas",
      icon: (
        <CardGroup>
          <FaDollarSign />
        </CardGroup>
      ),
      price: "Free",
      ctaBtnText: "Free Trial"
    },
    {
      title: "Silver Plan",
      text: "venenatis tellus in metus vulputate eu scelerisque felis",
      icon: (
        <CardGroup>
          <FaDollarSign /> <FaDollarSign />
        </CardGroup>
      ),
      price: "8.99",
      ctaBtnText: "Silver Plan"
    },
    {
      title: "Gold Plan",
      text: "nisl suscipit adipiscing bibendum est ultricies integer quis",
      icon: (
        <CardGroup>
          <FaDollarSign /> <FaDollarSign /> <FaDollarSign />
        </CardGroup>
      ),
      price: "12.99",
      ctaBtnText: "Gold Status"
    }
  ]
};

export default Pricing;
