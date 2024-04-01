import React from 'react';
import Card from '../Card';
import items from '../../../data/menu.json'
import "./Section.css"

const Section = ({title}) => {
  return (
    <>
    <div class="section-container">
        <div class="section-title">
          <h3>{title}</h3>
        </div>

        <div class="section-cards">
          {items.map((item) => {
            return <Card title={item.title} price={item.price} description={item.description} />
          })}
        </div>
      </div>

    </>
  );
};

export default Section;