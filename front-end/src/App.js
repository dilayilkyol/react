
// App.js
import React, { useState, useEffect } from 'react';
import Navbar from "./pages/Navbar";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const initialState = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
;

function App() {
  const [card, setCard] = useState(initialState)
  const addToCart = (product) => {
    setCard([...card,product])
  }
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(card))
  },[card])
  console.log('card', card)
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart}/>} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/cart" element={<Checkout addToCart={addToCart} card={card}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;