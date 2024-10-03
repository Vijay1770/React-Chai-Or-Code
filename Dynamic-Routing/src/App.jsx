import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import { Home } from "./PAGES/Home";
import { About } from "./PAGES/About";
import { Movie } from "./PAGES/Movie";
import { Contact } from "./PAGES/Contact";
import { Connect } from "./PAGES/Connect";
import { AppLayout } from "./components/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorPage } from "./components/ErrorPage";
import { GetApiData } from "./components/GetApiData";

import { MovieDetail } from "./components/MovieDetail";
import { GetMovieDetails } from "./components/GetMovieDetails";
// import {GetMovieDetails} from "./Dynamic-Routing/GetMovieDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/movie",
          element: <Movie />,
          loader: GetApiData,
        },
        {
          // Dynamic movieID route for individual movie details
          path: "/movie/:movieID",
          element: <MovieDetail />, // Component that handles movie details
          loader: GetMovieDetails,  // Loader to fetch movie data
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/connect",
          element: <Connect />,
          // action:connectData
        },
      ],
    },
  ]);

  /*
  //2. SECOND WAY TO NAVIGATE FROM ONE PAGE TO ANOTHER WITH THE HELP OF CreateRoutesFromElements Helper...

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Route>
    )
  );
*/
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
