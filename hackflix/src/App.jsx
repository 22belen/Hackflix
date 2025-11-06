import { useState } from "react";
import "./App.css";
import Barra from "./componentes/Barra";
import { Rating } from "react-simple-star-rating";
import movies from "./db/movies.json";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [rating, setRating] = useState(0);

  function handleRating(rate) {
    const realRating = rate * 2;
    setRating(realRating);
  }

  function handleReset() {
    setRating(0);
  }

  const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);

  return (
    <>
      <Barra />
      <div className="contenedor rating">
        <h4>Calificá este producto:</h4>
        <Rating onClick={handleRating} initialValue={(rating / 10) * 5} />
        <button onClick={handleReset}>reset</button>
        <p>Puntaje seleccionado: {rating}</p>
      </div>
      <Container>
        <Row>
          {filteredMovies.map((movie) => (
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
