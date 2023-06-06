import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import logo from '../images/logo.svg';

function Header() {
  const navbarStyles = {
    fontSize: '16px',
    textDecoration: 'none',
    transition: 'transform 0.2s',
  };
  const navbarBrand={
    fontSize: '22px',
    transition: 'font-size 0.2s, text-shadow 0.2s',
  };
  const handleHoverBrand = (event) => {
    event.target.style.fontSize = '24px';
    event.target.style.textShadow = '0 0 10px #FFD700';
  };

  const handleLeaveBrand = (event) => {
    event.target.style.fontSize = '22px';
    event.target.style.boxShadow = 'none';
  };
  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.2)';
    event.target.style.textDecoration = 'underline';
  };

  const handleLeave = (event) => {
    event.target.style.transform = 'scale(1)';
    event.target.style.textDecoration = 'none';
  };
  const buttonStyles = {
    fontSize: '16px',
    padding: '5px 10px',
    transition: 'transform 0.2s',
  };

  const handleHoverButton = (event) => {
    event.target.style.transform = 'scale(1.2)';
  };

  const handleLeaveButton = (event) => {
    event.target.style.transform = 'scale(1)';
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="light" >
      <Container>
        <Navbar.Brand style={navbarBrand}  onMouseEnter={handleHoverBrand}
        onMouseLeave={handleLeaveBrand} as={Link} to="/">SoulCalm</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="/">Home</Nav.Link>
            <Nav.Link style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="#">Journaling</Nav.Link>
            <Nav.Link style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="#">Get Help</Nav.Link>
            <Nav.Link style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="#">My Goals</Nav.Link>
            <NavDropdown style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} title="Explore More" id="collasible-nav-dropdown">
              <NavDropdown.Item style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="#">
                Self Assesment 
              </NavDropdown.Item>
              <NavDropdown.Item style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="#">Talk Now</NavDropdown.Item>
              <NavDropdown.Item style={navbarStyles} onMouseEnter={handleHover}
        onMouseLeave={handleLeave} as={Link} to="#">
                Know us more
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Nav.Link as={Link} to="/Login"><Button style={buttonStyles} onMouseEnter={handleHoverButton}
        onMouseLeave={handleLeaveButton} variant="light">Login</Button></Nav.Link>
            <Nav.Link as={Link} to="/Signup">
            <Button style={buttonStyles} onMouseEnter={handleHoverButton}
        onMouseLeave={handleLeaveButton}  variant="light">Signup</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;