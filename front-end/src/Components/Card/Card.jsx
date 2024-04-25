import React from 'react';
import Modal from '../../pages/Modal'
import "./Card.css"

const Card = ({ title, description, price, }) => {
  
  return (
    <>
      <div className='card-container'>
        <div className='card-container-inner'>
          <div className='card-content'>
            <div className="title">
              <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary" overflow="truncate" className="titleStyle">{title}</h3>
            </div>
            <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary" overflow="truncate" className="exStyle">
              {description}
            </span>

            <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice" className="costStyle">${price}</span>
          </div>
          <div className="card-add">
            <div className='card-wrapper'>
              <span className="add-to-cart">Add</span>
            </div>
          </div>
        </div>

        <img src={`/itemimg/${title.toLowerCase().replace(/\s+/g, '-')}.jpeg`} alt="" className="card-image"/>
      </div>
    </>
  );
};

export default Card;