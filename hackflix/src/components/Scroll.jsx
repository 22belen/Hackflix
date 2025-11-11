import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

function Scroll() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [rating, setRating] = useState(0);

  function handleRating(rate) {
    const realRating = rate * 2;
    setRating(realRating);
  }

  function handleReset() {
    setRating(0);
  }

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2cb2d43409108d6f09870f3c3c531b0c&page=${page}`
      );
      const newMovies = response.data.results;

      setMovies((prevMovies) => {
        const existingIds = new Set(prevMovies.map((m) => m.id));
        const uniqueMovies = newMovies.filter((m) => !existingIds.has(m.id));
        return [...prevMovies, ...uniqueMovies];
      });

      if (newMovies.length === 0) {
        setHasMore(false);
      }

      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log("Ocurrió un error al cargar las películas", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);

  return (
    <div>
      <div className="contenedor rating mt-4">
        <Rating onClick={handleRating} initialValue={(rating / 10) * 5} />
        <button onClick={handleReset}>reset</button>
        <p>Puntaje seleccionado: {rating}</p>
      </div>
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={<h4>Cargando más películas...</h4>}
        endMessage={<p>No hay más películas para mostrar</p>}
      >
        <Container>
          <Row>
            {filteredMovies.map((movie) => (
              <Col md={4} key={movie.id}>
                <div className="movie-card mt-4">
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
      </InfiniteScroll>
    </div>
  );
}

export default Scroll;
