import "./App.css";
import Barra from "./components/Barra";
import Scroll from "./components/Scroll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import NotFound from "./components/NotFound";

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
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
