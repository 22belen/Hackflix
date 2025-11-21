import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

function Scroll() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [rating, setRating] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

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

      if (newMovies.length === 0) setHasMore(false);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log("Ocurrió un error al cargar las películas", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  const filteredMovies = movies.filter((movie) => movie.vote_average >= rating);
  const handleShow = (movie) => setSelectedMovie(movie);
  const handleClose = () => setSelectedMovie(null);

  return (
    <div>
      <Carousel className="carrusel ">
        <Carousel.Item>
          <img
            src="/img/project_x.png "
            alt="Primera imagen"
            className="d-block w-100 "
          />
          <Carousel.Caption className="titulo"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carrusel">
          <img
            src="/img/maze.png"
            alt="Segunda imagen"
            className="d-block w-100 "
          />
          <Carousel.Caption className="titulo"></Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carrusel">
          <img
            src="/img/joker.jpg"
            alt="Tercera imagen"
            className="d-block w-100  "
          />
          <Carousel.Caption className="titulo"></Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="contenedor rating  text-center stars">
        <Rating onClick={handleRating} initialValue={(rating / 10) * 5} />
        <button className="btn btn-warning ms-2 p-1" onClick={handleReset}>
          Reset
        </button>
        <p className="mt-1 puntaje  ">
          {" "}
          <small className="me-5 estrellas">
            {" "}
            <strong>{rating} Estrellas</strong>{" "}
          </small>
        </p>
      </div>
      <h3 className="container recomendaciones ">TUS PELICULAS FAVORITAS</h3>
      <InfiniteScroll
        dataLength={filteredMovies.length}
        next={getMovies}
        hasMore={hasMore}
        loader={
          <h4 className="text-center recomendaciones  mt-3">
            Cargando más películas...
          </h4>
        }
        endMessage={<p className="text-center">No hay más películas</p>}
      >
        <Container>
          <Row>
            {filteredMovies.map((movie) => (
              <Col
                md={3}
                sm={6}
                xs={12}
                key={movie.id}
                className="mb-4 d-flex justify-content-center"
              >
                <div
                  className="movie-card mt-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/pelicula/${movie.id}`)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid rounded shadow-sm"
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </InfiniteScroll>

      <Modal show={!!selectedMovie} onHide={handleClose} centered>
        {selectedMovie && (
          <>
            <Modal.Header closeButton className="info">
              <Modal.Title>{selectedMovie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p className="info">
                <strong>Fecha de publicación:</strong>{" "}
                {selectedMovie.release_date}
              </p>
              <p className="info">
                <strong>Resumen:</strong>{" "}
                {selectedMovie.overview || "No hay resumen disponible."}
              </p>
              <p className="info">
                <strong>Rating:</strong> {selectedMovie.vote_average}
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="warning" onClick={handleClose}>
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Scroll;
