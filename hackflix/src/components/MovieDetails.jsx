import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Barra from "./Barra";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=2cb2d43409108d6f09870f3c3c531b0c`
        );
        setMovie(response.data);
      } catch (error) {
        console.log("Error al cargar la película", error);
      }
    }
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Cargando...</p>;

  return (
    <>
      {" "}
      <Barra />
      <div className="container  mt-3   ">
        <div className="row">
          <div className="col-6">
            <h2 className="peli-individual ">{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              className="img-fluid img-id "
            />
          </div>
          <div className="col-6  detalles-peli ">
            <div className="datos  ">
              <p>
                <strong>Fecha de estreno:</strong> {movie.release_date}
              </p>
              <p>
                <strong>Resumen:</strong> {movie.overview}
              </p>
              <p>
                <strong>Rating:</strong> {movie.vote_average}
              </p>
            </div>

            <button
              className="btn btn-warning mt-2 back-home "
              onClick={() => navigate("/")}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
