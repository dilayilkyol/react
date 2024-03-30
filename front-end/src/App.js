
// App.js
import React from "react";
import Navbar from "./pages/Navbar";
import Signin from "./pages/Signin";
import Home from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;