import "./App.css";
import { Homepage, About, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </Fragment>
  );
}

export default App;
