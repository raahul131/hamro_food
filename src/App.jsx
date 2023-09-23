import "./index.css";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ReactDOM from "react-dom/client";
import Offers from "../src/components/Offers";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import SIgnUp from "./components/SignUp";
const App = () => {
  return (
    <>
      <NavBar />
      {/* Outlet takes the childern from the below children and put it inside this outlet */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/offers", element: <Offers /> },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SIgnUp />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
