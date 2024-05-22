import React, { useEffect, useState } from 'react';
import Card from '../Card';
import "./Section.css";
import axios from 'axios'

const Section = ({ title }) => {
  const  [products, setProducts] = useState([])
  useEffect(()=> {
    

// Make a request for a user with a given ID
axios.get('http://localhost:4000/products')
  .then(function (response) {
    // handle success
    
    setProducts(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

  },[])
 

  return (
    <div className="section-container">
      <div className="section-title">
        <h3>{title}</h3>
      </div>

      <div className="section-cards">
        {products.filter(product => product.type == title).map((item, index) => (
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
