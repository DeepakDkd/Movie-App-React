import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home.jsx";
import MoviesField from "./Components/MoviesField.jsx";
import Card from "./Components/Card.jsx";
import Episode from "./Components/Episode.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search/:title/page/:page",
        element: <MoviesField />,
      },
      {
        path: "/movie/:movieID/season?/:season?",
        element: <Card />,
      },
      {
        path: "/series/:movieID/season/:season/episode/:episode",
        element: <Episode />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
