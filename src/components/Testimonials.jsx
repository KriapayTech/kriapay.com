import React from "react";
import {  Row, Col, Card } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div className="text-center py-5 container-fluid">
      <h3>Real stories. Don’t take our word for it.</h3>
      <Row>
        <Col md={6}>
          <Card className="p-4">
            <Card.Body>
              <p>“Kriapay’s transactions have been a lifesaver. Super fast and reliable.”</p>
              <strong>- John D.</strong>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Body>
              <p>“Kriapay has changed how I send money. Highly recommend it!”</p>
              <strong>- Rebecca L.</strong>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Testimonials;
