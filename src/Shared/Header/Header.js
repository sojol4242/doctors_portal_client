import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <>
   <Navbar bg="transparent" expand="lg" className="nav-bg p-3">
          <Navbar.Brand className="nav-brand" href="#home">React-Bootstrap</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link id="#nav-link" className="mr-4" href="#home">Home</Nav.Link>
      <Nav.Link id="#nav-link" className="mr-4" href="#link">About</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Dental Services</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Reviews</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Blogs</Nav.Link>
      <Nav.Link className="mr-4 text-white" href="#link">Contact Us</Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Header;