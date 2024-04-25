import React from 'react';
import Card from '../Card';
import { lunchItems, dinnerItems, dessertItems, drinkItems } from '../../../data/menu.js';
import "./Section.css";


const Section = ({ title }) => {
  let items;

  switch (title) {
    case 'Lunch':
      items = lunchItems;
      break;
    case 'Dinner':
      items = dinnerItems;
      break;
    case 'Dessert':
      items = dessertItems;
      break;
    case 'Drink':
      items = drinkItems;
      break;
    default:
      items = [];
  }

  return (
    <div className="section-container">
      <div className="section-title">
        <h3>{title}</h3>
      </div>

      <div className="section-cards">
        {items.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            price={item.price}
            description={item.description}
            image={`/itemimg/${item.title.toLowerCase().replace(/\s+/g, '-')}.jpeg`}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
