import React, { Component } from 'react';

class RestaurantBackground extends Component {
      render() {
            return (
                  <section className="background-restaurant">
                        <div className="container-fluid">
                              <div className="row background-restaurant-background justify-content-center align-items-center">
                                    <div className="col-12 background-restaurant-text">
                                          <div className="text-center">
                                                <h2>Your restaurant’s food, delivered</h2>
                                                <p>Your restaurant’s food, delivered We help restaurants and takeaways like yours serve hungry customers
                                far and wide. Ready to team up and grow your business? Let’s go!
                            </p>
                                                <button className="btn">
                                                      <a href="./signup-restaurant.html">Apply now</a>
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      }
}

export default RestaurantBackground;