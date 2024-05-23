import React, {useState} from 'react';
import "./Card.css"
import ModalComponent from '../../pages/Modal';

const Card = ({ title, description, price, addToCart }) => {

  const[isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  
  return (
    <>
      <div className='card-container' onClick={toggleModal}>
        <div className='card-container-inner'>
          <div className='card-content'>
            <div className="title">
              <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary" overflow="truncate" className="titleStyle">{title}</h3>
            </div>
            <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary" overflow="truncate" className="description-style">
              {description}
            </span>

            <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice" className="cost-style">${price}</span>
          </div>
          <div className="card-add">
            <div className='card-wrapper'>
              <span className="add-to-cart">Add</span>
            </div>
          </div>
        </div>

        <img src={`/itemimg/${title.toLowerCase().replace(/\s+/g, '-')}.jpeg`} alt="" className="card-image"/>
      </div>
      <ModalComponent modalIsOpen={isOpen} closeModal={toggleModal}>
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
        <img className={'modalImg'} src={`/itemimg/${title.toLowerCase().replace(/\s+/g, '-')}-modal.jpeg`} alt=""/>
        <div className={'addToCart'} onClick={() => addToCart({title:title, description:description, quantity:1, price:Number(price)})}><span>Add to Cart</span></div>
      </div>
      </ModalComponent>
    </>
  );
};

export default Card;