import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound-container">
      <img
        src="/img/error404.jpg"
        alt="Página no encontrada"
        className="notfound-image"
      />

      <h2>Página no encontrada</h2>

      <Link to="/" className="btn btn-warning mt-3 mb-5">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
