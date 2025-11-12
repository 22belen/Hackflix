import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";

function Barra() {
  return (
    <div className="fondo">
      <Navbar expand="lg">
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

      <Carousel>
        <Carousel.Item>
          <img
            src="/img/project_x.png "
            alt="Primera imagen"
            className="d-block w-100  fondo"
          />
          <Carousel.Caption className="titulo"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/img/maze.png"
            alt="Segunda imagen"
            className="d-block w-100  fondo"
          />
          <Carousel.Caption className="titulo"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src="/img/joker.jpg"
            alt="Tercera imagen"
            className="d-block w-100  fondo"
          />
          <Carousel.Caption className="titulo"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Barra;
