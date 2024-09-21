import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import { Home } from "./PAGES/Home";
import { About } from "./PAGES/About";
import { Movie } from "./PAGES/movie";
import { Contact } from "./PAGES/Contact";
import { AppLayout } from "./components/AppLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { ErrorPage } from "./components/ErrorPage";
import { GetApiData } from "./components/GetApiData";

const App = () => {
  //1. FIRST WAY TO NAVIGATE FROM ONE PAGE TO ANOTHER...

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />, //This will help to show error When we make mistakes...
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
          loader: GetApiData, //STEP-2
        },
        {
          path: "/contact",
          element: <Contact />,
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
