import "../styles.css"
import Modal from './Modal';

import React, { useState } from 'react';
import Section from "../Components/Card/Section/Section";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOther1Click = () => {
    setIsModalOpen(true);
  };


  return (
    <>
      {/* büyük resim ve konum  */}
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
      <br></br>

      <span className="discover">
        Discover new tastes
      </span>

      {/* menü */}
      <div class="container content">
        <div class="row firstRow">
          <div class="col-md-auto" id="col1">
            <img src="/contentimg/lunch.jpeg" alt="" className="content-img" />
            <button className="button">
              Lunch
            </button>
          </div>

          <div class="col-md-auto" >
            <img src="/contentimg/dinner.jpeg" alt="" className="content-img" />
            <button className="button">
              Dinner
            </button>
          </div>

          <div class="col-md-auto" id="col3">
            <img src="/contentimg/dessert.jpeg" alt="" className="content-img" />
            <button className="button">
              Desert
            </button>
          </div>

          <div class="col-md-auto" id="col4">
            <img src="/contentimg/drink.jpeg" alt="" className="content-img" />
            <button className="button">
              Drinks
            </button>
          </div>

        </div>
      </div>

      {/* lunch part */}
      {['Lunch','Dinner','Dessert', 'Drink'].map((title) => {
        return <Section title={title} />
      })}

      

      {/* 
      <div class="genel">
        <div class="lunch-title">
          <h3>Dinner</h3>
        </div>

        <div class="one">
          <div class="part1">

            <div class="other1">
              <div class="firstboxDot ">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Lasagna</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            dried sheets of pasta layered with rich meat ragú, ricotta and mozzarella</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$20.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other2">
              <div class="firstboxDot" >
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Pizza Margarita</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            Tomato, mozzarella, basil, olive oil and salt</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$12.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other3">
              <div class="firstboxDot">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Salmon</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            Honey and soy sauce</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$19.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other4">
              <div class="firstboxDot">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Steak</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            with rice</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$20.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div class="genel">
        <div class="lunch-title">
          <h3>Desert</h3>
        </div>

        <div class="one">
          <div class="part1">

            <div class="other1">
              <div class="firstboxDot ">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Cheesecake-slice</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$4.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other2">
              <div class="firstboxDot" >
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Brownie</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$4.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other3">
              <div class="firstboxDot">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Chocolate Cookie</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$4.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other4">
              <div class="firstboxDot">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Magnolia</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            strawberry</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$5.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="genel">
        <div class="lunch-title">
          <h3>Drink</h3>
        </div>

        <div class="one">
          <div class="part1">

            <div class="other1">
              <div class="firstboxDot ">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Coffee</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$5.00</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other2">
              <div class="firstboxDot" >
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Coke</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$2.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other3">
              <div class="firstboxDot">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Iced Tea</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$4.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="other4">
              <div class="firstboxDot">
                <div class="firstbox">
                  <div data-anchor-id="menuItem" data-item-id="1" class="firstItem">
                    <div aria-label="Chicken Seacer Salad" role="button" tabindex="0" class="saladbox"></div>
                    <div class="sc62-0">
                      <div data-test-id="GenericItemCard" class="itemCard">
                        <div class="stackStyle">
                          <div class="title">
                            <h3 display="block" data-telemetry-id="storeMenuItem.title" color="TextPrimary"
                              overflow="truncate" class="titleStyle">Water</h3>
                          </div>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$1.50</span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="sc62-9">
                      <button shape="Pill" size="12" kind="BUTTON/PLAIN" aria-label="Add item to cart"
                        data-testid="quick-add-button" type="button" class="buttonStyle">
                        <span kind="BUTTON/PLAIN" class="insetStyle">
                          <span class="inlineChildAdd">
                            <span class="mainContent">
                              <span overflow="truncate" display="block" class="textElement">
                                <div class="textDiv">
                                  <span overflow="normal" display="block" class="textElementStyle">Add</span>
                                </div>
                              </span>
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div class="fd2">
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}


    </>
  );

}

