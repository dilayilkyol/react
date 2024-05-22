import axios from "axios";
import {useSelector} from "react-redux";
import {url} from "../slices/api"

const PayButton = () => {

    const handleCheckOut = () => {}

    return (
        <>
        <button onClick={() => handleCheckOut()}>Check Out</button>
        </>
    );
}

export default PayButton;