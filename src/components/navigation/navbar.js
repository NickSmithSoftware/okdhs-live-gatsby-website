import React from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

import not from '../../functions/not';
import NavBarBrand from './navbar/navbar-brand';
import NavBarLinkList from './navbar/navbar-link-list';

const NavBar = (props) => {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${not(props.dark)}`}>
        <div className={`container-fluid`}>
          <NavBarBrand setDark={props.setDark} color={props.dark} />
          <button className={`navbar-toggler`} type={`button`} data-bs-toggle={`collapse`} data-bs-target={`#navbarNavDropdown`} aria-controls={`navbarNavDropdown`} aria-expanded={false} aria-label={`Toggle navigation`}>
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <NavBarLinkList links={["Home", "Benefits", "Contact Us", "Log In"]} />
        </div>
      </nav>
    )
}

export default NavBar;


{/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */}