import React, { Component } from 'react';

class Section4 extends Component {
      render() {
            return (
                  <section className="menu4 mb-5">
                        <div className="container">
                              <div className="row mb-5">
                                    <div className="col-md-6 col-sm-12 text-menu2 mt-5">
                                          Work with DeliverFoo
                                    </div>
                              </div>
                              <div className="row">
                                    <div className=" col-sm-12 col-md-6 mb-2">
                                          <div className="card mx-auto" style={{ width: '100%' }}>
                                                <img className="card-img-top" src="/image/deliveryman.jpg" alt="deliveryman" />
                                                <div className="card-body">
                                                      <h4 className="card-title">Shipper</h4>
                                                      <p className="card-text">Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and
                                discounts.
                                                      </p>
                                                      <a href="/" className="btn">Shipper with us</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 mb-2">
                                          <div className="card mx-auto" style={{ width: '100%' }}>
                                                <img className="card-img-top" src="/image/restaurant.jpg" alt="restaurant" />
                                                <div className="card-body">
                                                      <h4 className="card-title">Restaurants</h4>
                                                      <p className="card-text">Partner with Deliveroo and reach more customers than ever. We handle delivery, so you can focus
                                on the food.
                                                      </p>
                                                      <a href="/" className="btn">Partner with us</a>
                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </section>
            );
      }
}

export default Section4;