import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Country } from "./Pages/Country";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./components/Layout/AppLayout";
import { CountryDetails } from "./components/Layout/CountryDetails";
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Corrected the placement of the closing tag
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'country',
        element: <Country />,
      },
      {
        path: 'country/:id',
        element: <CountryDetails />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

const App =()=>{
  return <RouterProvider router={router}></RouterProvider>
};

export default App;