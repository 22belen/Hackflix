import "./App.css";
import Barra from "./components/Barra";
import Scroll from "./components/Scroll";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
