import { useState } from "react";
import "./App.css";
import Barra from "./componentes/Barra";
import { Rating } from "react-simple-star-rating";
import movies from "./db/movies.json";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReset = () => {
    setRating(0);
  };
  return (
    <>
      <Barra />
      <div className="contenedor rating">
        <h4>Calificá este producto:</h4>
        <Rating onClick={handleRating} initialValue={rating} />
        <button onClick={handleReset}>reset</button>
      </div>
      <Container>
        <Row>
          {movies.map((movie) => (
            <Col md={4} key={movie.id}>
              <div className="movie-card">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="poster"
                />
                <h5 className="nombre">{movie.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
