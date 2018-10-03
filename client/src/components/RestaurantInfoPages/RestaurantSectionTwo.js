import React, { Component } from 'react';

class RestaurantSectionTwo extends Component {
      render() {
            return (
                  <section className="restaurant-section2 pt-5 pb-5">
                        <div className="container">
                              <div className="row pb-5">
                                    <div className="col-md-7 col-sm-12 offset-md-3">
                                          <h2 className="restaurant-section2-title">
                                                Earn your benefit
                    </h2>
                                    </div>
                              </div>
                              <div className="row">
                                    <div className="col-md-7 col-sm-12 offset-md-3">
                                          <div className="row">
                                                <div className="col-md-7 col-sm-12 mb-3">
                                                      <img className="img-fluid restaurant-section2-img" src="asset/image/restaurant-section2.jpg" alt="" />
                                                </div>
                                                <div className="col-md-5 col-sm-12">
                                                      <div className="row restaurant-section2-item p-2">
                                                            <div className="restaurant-section2-item-image">
                                                                  <img src="https://deliveroo-restaurants.cdn.prismic.io/deliveroo-restaurants/dd980a8ee704159c5c81f4b8d05f81c649260716_apply-icon1.png"
                                                                        alt="" />
                                                            </div>
                                                            <div className="restaurant-section2-item-text">
                                                                  <h2>Friendly, familiar riders</h2>
                                                                  <p>If you need it, riders will go above and beyond to get your food to hungry customers.</p>
                                                            </div>
                                                      </div>
                                                      <div className="row restaurant-section2-item mt-2 p-2">
                                                            <div className="restaurant-section2-item-image">
                                                                  <img src="https://deliveroo-restaurants.cdn.prismic.io/deliveroo-restaurants/61fed218b1a0cb1ae867184d7a8fedbe734c5641_apply-icon2.png"
                                                                        alt="" />
                                                            </div>
                                                            <div className="restaurant-section2-item-text">
                                                                  <h2>Easy ordering</h2>
                                                                  <p>Seasonally, monthly, daily – whatever you have on the menu, we’ll make sure it’s clear
                                        and easy to order from.</p>
                                                            </div>
                                                      </div>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      }
}

export default RestaurantSectionTwo;