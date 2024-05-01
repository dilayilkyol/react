import React from 'react';
import './Meal.css';
import mealData from '../../data/meal';



const Meal = ({ onMealSelect }) => {
  return (
    <div className="meal-container">
      <div className="meal-container-inner">
        {mealData.map((mealItem, index) => (
          <div className="meal-content" key={index}>
            <img
              src={`/contentimg/${mealItem.meal.toLowerCase().replace(/\s+/g, '-')}.jpeg`}
              alt=""
              className="content-img"
            />
            <button className="meal-button" onClick={() => onMealSelect(mealItem.meal)}>
              {mealItem.meal}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meal;
