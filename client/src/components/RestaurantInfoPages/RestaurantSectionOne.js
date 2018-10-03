import React, { Component } from 'react';

class RestaurantSectionOne extends Component {
      render() {
            return (
                  <section className="restaurant-section1 pt-5 pb-5">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-6 col-sm-12 offset-md-3">
                                          <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                      <div className="restaurant-section1-text pt-5">
                                                            <h2>Join the world’s best-loved eateries</h2>
                                                            <p className="mt-3"> Your food will fit right in, alongside great restaurants and takeaways offering tasty dishes
                                    on DeliveFoo.
                                </p>
                                                      </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                      <img className="img-fluid restaurant-section1-img" src="asset/image/section1-restaurant.jpg" alt="" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      }
}

export default RestaurantSectionOne;