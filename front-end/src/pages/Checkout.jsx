import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayButton from "../Components/PayButton"
import "./Checkout.css";

const Cart = ({user, addToCart, card}) => {
  // const cart = useSelector((state) => state.cart);
  // const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();


  return (
    <div>
        <div className="shopping-cart-title">
        <h1>Shopping Cart</h1>
        </div>
        <div>
            {card.map(({title, description, price, quantity}) => { 
                return (
                    <div className="checkout-container">
                        <h3>Title: {title}</h3>
                        <span>Description: {description}</span> <br></br>
                        <span>Price: ${Number(price)}</span>
                        <p>Quantity: {quantity}</p>
                    </div>
                );
            })}
        </div>
        <PayButton user={user} cartItems={card} />
    </div>
  );
};

export default Cart;