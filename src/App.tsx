import React from "react";
import Sidebar from "./components/sidebar";
import ContentCard from "./components/ContentCard";
import ConwayGrid from "./components/ConwayGrid";
import Resume from "./Resume.pdf";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = () =>
  createHashRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <>404 error not found</>,
    },
  ]);

const App = () => {
  return (
    <React.Fragment>
      <RouterProvider router={router()}></RouterProvider>
    </React.Fragment>
  );
};

export default App;
