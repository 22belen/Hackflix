import { useState } from "react";
import "./App.css";
import Barra from "./componentes/Barra";
import { Rating } from "react-simple-star-rating";

function App() {
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleReset = () => {
    // Set the initial value
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
    </>
  );
}

export default App;
