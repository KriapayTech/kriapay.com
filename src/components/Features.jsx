import React from "react";
import {  Row, Col, Card } from "react-bootstrap";

const Features = () => {
  return (
    <div className="py-5 container-fluid">
      <Row>
        <Col md={6}>
          <Card className="p-4">
            <Card.Body>
              <h4>One Wallet, Multiple Currencies</h4>
              <p>Say goodbye to currency restrictions.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="p-4">
            <Card.Body>
              <h4>Affordable Transfers</h4>
              <p>Send money across Africa effortlessly.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Features;
