
// App.js
import React, { useState, useEffect } from 'react';
import Navbar from "./pages/Navbar";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const initialState = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : []
;
const userState = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : ""
;

function App() {
  const [card, setCard] = useState(initialState)
  const [user, setUser] = useState({_id:userState})
  const updateUser = (user) => {
    setUser(user) 
  }
  const addToCart = (product) => {
    let existingItem = false
    const updatedCard = [...card].map((item) => {
      if (item.title === product.title) {
        item.quantity +=1
        existingItem = true
      } 
      return item;
    })
    if (existingItem) {
      setCard(updatedCard)
    } else {
      setCard([...card,product])
    }
    
  }
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(card))
  },[card])
  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(user._id))
  },[user])
  console.log('user', user)
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart}/>} />
            <Route path="/signin" element={<Signin user={user} updateUser={updateUser}/>} />
            <Route path="/cart" element={<Checkout addToCart={addToCart} card={card} user={user} updateUser={updateUser}/>} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;