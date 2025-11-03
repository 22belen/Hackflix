import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Barra() {
  return (
    <div className="fondo">
      <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand className="element" href="#home">
            Hackflix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="element" href="#home">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="titulo">
        <h1>¡Tus películas favoritas!</h1>
        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
      </div>
    </div>
  );
}

export default Barra;
