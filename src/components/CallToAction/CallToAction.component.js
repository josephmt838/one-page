import React from "react";
import { Button } from "reactstrap";

const CallToAction = () => {
  return (
    <section>
      <h3>There are many variations of passages of Lorem Ipsum available.</h3>
      <Button
        onClick={() =>
          alert("Sign up for our Mail list to recieve up to date news.")
        }
      >
        Check us Out
      </Button>
    </section>
  );
};

export default CallToAction;
