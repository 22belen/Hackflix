import { useState } from "react";
import "./App.css";
import Barra from "./componentes/Barra";
import { Rating } from "react-simple-star-rating";
import movies from "./db/movies.json";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [rating, setRating] = useState(0);

  function handleRating(rate) {
    let stars;
    if (rate > 5) {
      stars = rate / 20;
    } else {
      stars = rate;
    }

    const value10 = Math.round(stars * 2 * 10) / 10;
    setRating(value10);
  }

  function handleReset() {
    setRating(0);
  }

  const parseVote = (v) => {
    if (v === null || v === undefined) return 0;
    if (typeof v === "number") return v;

    const s = String(v).replace(",", ".").trim();
    const n = parseFloat(s);
    return Number.isNaN(n) ? 0 : n;
  };

  const filteredMovies =
    rating > 0
      ? movies.filter((movie) => parseVote(movie.vote_average) >= rating)
      : movies;

  return (
    <>
      <Barra />
      <div className="contenedor rating" style={{ margin: "1rem 0" }}>
        <h4>Filtrar películas por puntuación:</h4>

        <Rating
          onClick={handleRating}
          initialValue={rating / 2}
          allowFraction={true}
          transition
        />

        <div style={{ marginTop: "0.5rem" }}>
          <button onClick={handleReset}>Reset</button>
          {rating > 0 && (
            <span style={{ marginLeft: "1rem" }}>
              Mostrando películas con voto ≥ {rating}
            </span>
          )}
        </div>
      </div>

      <Container>
        <Row>
          {filteredMovies.length === 0 && (
            <p style={{ padding: 16 }}>
              No hay películas que cumplan ese filtro.
            </p>
          )}

          {filteredMovies.map((movie) => (
            <Col md={4} key={movie.id}>
              <div className="movie-card">
                <img
                  src={movie.poster_path}
                  alt={movie.title}
                  className="poster"
                />
                <h5 className="nombre">{movie.title}</h5>
                <p>⭐ {parseVote(movie.vote_average)}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
