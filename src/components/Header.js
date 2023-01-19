import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Stack from 'react-bootstrap/Stack';

function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">Elemental</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="ms-auto" href="#home">INICIO</Nav.Link>
            <Nav.Link href="#nosotros">NOSOTROS</Nav.Link>
            <NavDropdown title="VIVIENDAS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#quinchos">QUINCHOS</Nav.Link>
            <Nav.Link href="#plan-e">PLAN E</Nav.Link>
            <Nav.Link href="#realidad-virtual">REALIDAD VIRTUAL</Nav.Link>
            <Nav.Link href="#contacto">CONTACTO</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}

export default Header;