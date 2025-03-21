import React from "react";
import {Container, Navbar, Nav, Button } from "react-bootstrap";

const Navigation = () => {
<style>
    
</style>


  return (
    <Navbar
    style={{
      width: "100%",
      maxWidth: "1900px",
      height: "90px",
      backgroundColor: "#072a30",
    }}
    expand="lg"
    variant="dark"
    className="container-fluid"
  >
    <div
      className="container-fluid d-flex align-items-center"
      style={{ height: "90px" , position:'relative',zIndex:'5',opacity:'1',width:"100%" }}
    >
      <Container className="d-flex ">
        
       <a href="/">   <img  style={{
            width: "130px",
            height: "48px",
            color: "white",
            marginBottom: 0,
            gap:'10px',
            marginRight:'45px'
          }}src="https://res.cloudinary.com/dw7w2at8k/image/upload/v1741440756/Kriapay_Logo_nm8w7f.svg" alt="" /> </a>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex">
          <Nav className="mx-auto d-flex align-items-center ps-5 text-white"  >
            <Nav.Link style={{fontSize:'16px',color:'white', marginLeft:'10px'}} href="/kriacard">KriaCard</Nav.Link>
            <Nav.Link style={{fontSize:'16px',color:'white' , marginLeft:'10px'}} href="/company">Company</Nav.Link>
            <Nav.Link style={{fontSize:'16px',color:'white' , marginLeft:'10px'}} href="/ask">Ask Kriapay</Nav.Link>
            <Nav.Link style={{fontSize:'16px',color:'white' , marginLeft:'10px'}} href="#">Login</Nav.Link>
          </Nav>
          <Button  className="ms-auto" style={{width:"146px", height:'46px' , backgroundColor:'#1b4f56', border:'none'}}>Sign Up</Button>
        </Navbar.Collapse>
      </Container>
    </div>
  </Navbar>
  

  );
};

export default Navigation;
