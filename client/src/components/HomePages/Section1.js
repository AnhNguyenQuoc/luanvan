import React, { Component } from 'react';

class Section1 extends Component {
      render() {
            return (
                  <section className="menu mb-5">
                        <div className="container mt-5">
                              <div className="row">
                                    <div className="col-md-5 col-sm-12">
                                          <h1>Có gì trong menu?</h1>
                                    </div>
                              </div>
                        </div>
                        <div className="container mt-5 main-menu">
                              <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                          <div className='img1'>
                                                <img src='/asset/image/menu1.jpg' className='img-fluid' alt="" />
                                                <span className='center-text-img'>Thức ăn nhanh</span>
                                          </div>
                                          <div className='text-below'>
                                                <h5>Pure indulgence that can turn an ordinary day into an unforgettable one. Comfort food its very best.</h5>
                                                <span>
                                                      <a href="/">Xem thêm thức ăn nhanh →</a>
                                                </span>
                                          </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                          <div className='img1'>
                                                <img src='/asset/image/menu3.jpg' className='img-fluid' alt="" />
                                                <span className='center-text-img'>Thức ăn Việt</span>
                                          </div>
                                          <div className='text-below'>
                                                <h5>Pure indulgence that can turn an ordinary day into an unforgettable one. Comfort food its very best.</h5>
                                                <span>
                                                      <a href="/">Xem thêm thức ăn Việt →</a>
                                                </span>
                                          </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                          <div className='img1'>
                                                <img src='/asset/image/menu2.jpg' className='img-fluid' alt="" />
                                                <span className='center-text-img'>Trà sữa</span>
                                          </div>
                                          <div className='text-below'>
                                                <h5>Pure indulgence that can turn an ordinary day into an unforgettable one. Comfort food its very best.</h5>
                                                <span>
                                                      <a href="/">Xem thêm trà sữa →</a>
                                                </span>
                                          </div>
                                    </div>
                              </div>
                              <div className="row mt-5">
                                    <div className="col-md-6 col-sm-12">
                                          <div className="img2">
                                                <img src='/asset/image/menu4.jpeg' className="img-fluid" alt="food" />
                                                <span className='center-text-img2'>Bánh ngọt</span>
                                          </div>
                                          <div className='text-below'>
                                                <h5>Pure indulgence that can turn an ordinary day into an unforgettable one. Comfort food its very best.</h5>
                                                <span>
                                                      <a href="/">Xem thêm bánh ngọt →</a>
                                                </span>
                                          </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                          <div className="img2">
                                                <img src='/asset/image/menu5.jpg' className="img-fluid" alt="food" />
                                                <span className='center-text-img2'>Lẩu</span>
                                          </div>
                                          <div className='text-below'>
                                                <h5>Pure indulgence that can turn an ordinary day into an unforgettable one. Comfort food its very best.</h5>
                                                <span>
                                                      <a href="/">Xem thêm lẩu →</a>
                                                </span>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      }
}

export default Section1;