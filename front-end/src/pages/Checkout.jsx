import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PayButton from "../Components/PayButton"

const Cart = ({addToCart, card}) => {
  // const cart = useSelector((state) => state.cart);
  // const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();


  return (
    <div>
        <h1>Shopping Cart</h1>
        <div>
            {card.map(({title, description, quantity}) => { 
                return (
                    <div>
                        <h3>title:{title}</h3>
                        <span>description:{description}</span>
                        <p>quantity:{quantity}</p>
                    </div>
                );
            })}
        </div>
        <PayButton cartItems={card} />
    </div>
  );
};

export default Cart;