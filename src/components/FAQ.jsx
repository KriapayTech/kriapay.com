import React from "react";
import { Accordion} from "react-bootstrap";
import "./Faq.css"

const FAQ = () => {
  return (
    <div className="py-5 container-fluid text-center" style={{width:'790px'}}>
      <h3 className="text-center" style={{fontSize:'45px', color:'#072A30',marginBottom:'80px'}}>Still not convinced? <br/> We’ve got the answers</h3>
      <Accordion style={{ backgroundColor: "#B2BEB5", borderRadius:'30px'}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header style={{fontSize:'18px'}}>How much does it cost to transfer money?</Accordion.Header>
          <Accordion.Body style={{fontSize:'18px'}}>Our transfer fees are the lowest in the market.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={{fontSize:'18px'}}>Is my money Safe with Kriapay</Accordion.Header>
          <Accordion.Body style={{fontSize:'18px'}}>Instant for most transactions.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header style={{fontSize:'18px'}}>How long does international money transfer take in Kriapay?</Accordion.Header>
          <Accordion.Body style={{fontSize:'18px'}}>Instant for most transactions.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header style={{fontSize:'18px'}}>What kind of support can i expect from Kriapay?</Accordion.Header>
          <Accordion.Body style={{fontSize:'18px'}}>Instant for most transactions.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <p style={{fontSize:'18px', marginTop:'104px'}}>Still have more questions? Chat with us in-app or email support@kriapay.com</p>
    </div>
  );
};

export default FAQ;
