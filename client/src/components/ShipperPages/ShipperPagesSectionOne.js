import React, { Component } from 'react';

class ShipperPagesSectionOne extends Component {
      render() {
            return (
                  <section className="restaurant-section1 pt-5 pb-5">
                        <div className="container">
                              <div className="row">
                                    <div className="col-md-6 col-sm-12 offset-md-3">
                                          <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                      <div className="restaurant-section1-text pt-5">
                                                            <h2>Choose when to work</h2>
                                                            <p className="mt-3"> You’ll be self-employed and free to work to your own availability. The Deliveroo rider app
                                    makes it easy to plan ahead.
                                </p>
                                                      </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                      <img className="img-fluid restaurant-section1-img" src="https://ow.roocdn.com/assets/images/rider_onboarding/device-f9c0f8e4f37ebea4a372ade1a2da2304.jpg"
                                                            alt="" />
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      }
}

export default ShipperPagesSectionOne;