import "../styles.css"
import React from 'react';
import Section from "../Components/Card/Section/Section";
import Meal from "../Components/Meal/Meal";

export default function Home() {
  

  return (
    <>
      {/* big img and location  */}
      <div className="edge">
        <header>

          <div>
            <img src="/images/main-img.jpeg" alt="" class="center" />
          </div>

          <div className="info">

            <div className="title">
              <h2>Site Name</h2>
            </div>

            <span className="location">
              8370 N 4th St, Los Angeles, CA 59930, USA
            </span>

            <span className="location">
              Open Hours: 8.00 AM - 8.00 PM
            </span>

          </div>

        </header>
      </div>

      <br></br>

      <span className="discover">
        Discover new tastes
      </span>

      {/* menü */}
      <Meal />

      {['Lunch','Dinner','Dessert', 'Drink'].map((title) => {
        return <Section title={title} />
      })}

    </>
  );

}

