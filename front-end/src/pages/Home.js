import "../styles.css"
import React, { useState } from 'react';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>

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
            <img src="/contentimg/desert.jpeg" alt="" className="content-img" />
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

      <div class="genel">
        <div class="lunch-title">
          <h3>Lunch</h3>
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
                              overflow="truncate" class="titleStyle">Chicken Caesar Salad</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            Romaine lettuce, chicken, French bread, parmesan cheese, anchovies, yogurt then
                            a few more food staples like garlic, olive oil, mayonnaise</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$15.50</span>
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
                              overflow="truncate" class="titleStyle">Fried Chicken Salad</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            Jalapeno, coleslaw, butter lettuce, garlic aioli, fried chicken</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$15.50</span>
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
                              overflow="truncate" class="titleStyle">Burger Menu</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            lettuce, tomato, garlic mayonnaise, barbecue meatballs with french fries</span>
                        </div>
                        <div class="inlineChild">
                          <div class="stackStyle">
                            <div data-test-id="formatted-dynamic-string" class="inlineChild">
                              <span class="cost">
                                <div class="inlineChild-etc">
                                  <span overflow="truncate" display="block" data-anchor-id="StoreMenuItemPrice"
                                    class="costStyle">$14.50</span>
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
                              overflow="truncate" class="titleStyle">Chicken Burger Menu</h3>
                          </div>
                        </div>
                        <div class="stackStyle">
                          <span display="block" data-telemetry-id="storeMenuItem.subtitle" color="TextTertiary"
                            overflow="truncate" class="exStyle">
                            lettuce, tomato, garlic mayonnaise, fried chicken with french fries</span>
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

          </div>
        </div>
      </div>


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
      </div>

      <div class="bABA-DW" id="zindex1"></div>
      <div class="bABA-DW" id="zindex2" ></div>
      <div class="bABA-DW" id="zindex3" >
        <div class="fillScreen">
          <div class="fillScreen" id="opacity1">
            <div class="overlayPos">
              <div class="overlayContainer">
                <div class="overlayContent"></div>
                <div kind="OVERLAY/DARK" class="overlayLayer"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="fillScreen" id="modalFillScreen">
          <div data-prism-focus-guard="true" tabindex="0" id="dataPrism"></div>
          <div tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="ModalContent" data-anchor-id="ItemModal" class="modalContainer">
            <span tabindex="-1" data-prism-modal-initial-focus="" id="ModalContent-1-Title" aria-hidden="false" class="VisuallyHiddenText">Chicken Caesar Salad</span>
            <div class="ModalCloseButtonContainer">
              <button size="16" shape="Circle" kind="BUTTON/PLAIN" aria-label="Close Caesar Salad" type="button" class="StyledButtonRoot">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="StyledInlineSvg">
                  <path d="M17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711C19.0976 6.31658 19.0976 
                  5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 
                  6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071Z"
                    fill="currentColor"></path>
                </svg>
              </button>
            </div>
            <div class="ModalContentContainer">
              <div data-testid="itemHeader" class="styledInset">
                <div class="dhXlc">
                  <h2 overflow="normal" display="block" class="gNWMJn">
                    <span>Chicken Caesar Salad</span>
                  </h2>
                </div>
                <div class="Stack__StyledStack">
                  <div class="iAOYpG"></div>
                </div>
                <span overflow="normal" display="block" data-testid="nestedItemHeader_subtitle" class="modalExp">
                  Romaine lettuce, chicken, French bread, parmesan cheese, anchovies,
                  yogurt then a few more food staples like garlic, olive oil, mayonnaise</span>
              </div>
              <div class="modalContent">
                <div>
                  <div>
                    <div data-anchor-id="menuItemModalBody">
                      <div data-anchor-id="menuItemModalBody">
                        <div data-test-id="itemBody">
                          <div class="stackChildren"></div>
                          <div class="gxDQcB">
                            <div class="modalimg">
                              <div class="itemBodyImage">
                                <div class="ebsaPM">
                                  <div data-testid="optimizedImageModal">
                                    <img src="/contentimg/salad.jpeg" alt="" className="modal-img1" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div role="group" aria-labelledby="optionList_ChickenCaesar" class="optionListSalad">
                            <div tabindex="-1" data-scroll-selector="7204932365" class="optionAdd">
                              <div class="stackChildrenOption">
                                <h3 display="block" class="optionAddTitle">EXTRA</h3>
                                <div class="optionInlineChild">
                                  <div class="optionInlineChild liPaHq">
                                    <span display="block" color="TextTertiary" class="optionalStyled">(Optional)</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="extraIng"></div>
                            <div class="extraIng"></div>
                            <div class="extraIng"></div>
                          </div>
                          <div role="group" aria-labelledby="optionList_ChickenCaesar" class="optionListSalad">
                            <div class="togleContainer">
                              <div class="inlineChildTogle">
                                <div size="24" class="inputContainer">
                                  <div>
                                    <input
                                      class="ToggleInput"
                                      type="checkbox"
                                      id="extra"
                                      name="extra"
                                      value="isChecked"
                                      checked={isChecked}
                                      onChange={handleOnChange}
                                    /> Parmesan Cheese
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-test-id="itemCarousels"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

