import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="form">Form</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
