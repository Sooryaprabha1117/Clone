import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import image from "../asset/title.png";
import icon from "../asset/icon.png";
import "./Thozhil.css";

function Thozhil() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <img src={image} style={{ width: "15%" }} alt="Title" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <div id="nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Jobs" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/jobs/fulltime">Full time</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jobs/parttime">Part time</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Internships" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/internships/fulltime">Full time</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/internships/parttime">Part time</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/how-it-works">How it works</Nav.Link>
              <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            </Nav>
          </div>
          <Link to="/login"> {/* Wrap the button with Link */}
            <Button variant="outline-success" id="button">
              <img src={icon} id="img" alt="Icon" /> Login/Register
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Thozhil;
