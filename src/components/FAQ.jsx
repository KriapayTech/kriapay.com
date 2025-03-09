import React from "react";
import { Accordion} from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="py-5 container-fluid">
      <h3 className="text-center">Still not convinced? We’ve got the answers</h3>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How much does it cost to transfer money?</Accordion.Header>
          <Accordion.Body>Our transfer fees are the lowest in the market.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How long does a transfer take?</Accordion.Header>
          <Accordion.Body>Instant for most transactions.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
