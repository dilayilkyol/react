import axios from "axios";
import {useSelector} from "react-redux";
import {url} from "../slices/api"

const PayButton = () => {

    const handleCheckOut = () => {}

    return (
        <>
        <div onClick={() => handleCheckOut()}, className={'addToCart'}><span>Add to Cart</span></div>
        </>
    );
}

export default PayButton;