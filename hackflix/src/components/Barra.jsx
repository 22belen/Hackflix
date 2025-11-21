import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Barra() {
  return (
    <div className="fondo">
      <Navbar expand="lg" fixed="top" className="navbar-black">
        <Container>
          <Navbar.Brand className="element" href="#home">
            <Link
              to="/"
              className="inicio"
              style={{ textDecoration: "none", color: "white" }}
            >
              HACKFLIX
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="element" href="#home">
                <Link
                  to="/"
                  className="inicio"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Barra;
