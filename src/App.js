import "./App.scss";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/products/:id",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
