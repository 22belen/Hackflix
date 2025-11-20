import "./App.css";
import Barra from "./components/Barra";
import Scroll from "./components/Scroll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Barra />
          <Scroll />
        </>
      ),
    },
    {
      path: "/pelicula/:id",
      element: <MovieDetails />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
