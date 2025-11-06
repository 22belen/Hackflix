import { useEffect, useState } from "react";
import "./App.css";
import Barra from "./componentes/Barra";
import { Rating } from "react-simple-star-rating";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function App() {
  const [rating, setRating] = useState(0);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2cb2d43409108d6f09870f3c3c531b0c&page=${page}`
      );
      setMovies(response.data.results);
      console.log(response);
    };
    getMovies();
  }, []);

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
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
