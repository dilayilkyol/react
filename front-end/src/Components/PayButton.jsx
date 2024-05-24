import axios from "axios";
export const url = "http://localhost:4000/api";

const PayButton = ({ user, cartItems }) => {
 
  const handleCheckout = () => {
    axios
      .post(`${url}/stripe/create-checkout-session`, {
        cartItems,
        userId: user._id,
      })
      .then((response) => {
        if (response.data.url) {
          window.location.href = response.data.url;
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <button className="checkout-button" onClick={handleCheckout}>
      Check out
    </button>
    </>
  );
};

export default PayButton;