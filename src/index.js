import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Form from "./Form";

let route = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "form", element: <Form /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <RouterProvider router={route}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
