import { useState } from "react";
import "./App.css";
import Barra from "./components/Barra";
import { Rating } from "react-simple-star-rating";
import Scroll from "./components/Scroll";

function App() {
  return (
    <>
      <Barra />
      <Scroll />
    </>
  );
}

export default App;
