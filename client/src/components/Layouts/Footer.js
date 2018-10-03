import React, { Component } from 'react';

class Footer extends Component {
      render() {
            return (
                  <footer className="footer">
                        <div className="container">
                              <div className="row mt-5">
                                    <div className="col-sm-12 col-md-4 mb-2 mt-3">
                                          <div className="footer-body">
                                                <h3>Discover DeliveFoo</h3>
                                                <ul>
                                                      <li>
                                                            <a href="/">About us</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Newsroom</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Foodscene blog</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Engineering blog</a>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 mb-2 mt-3">
                                          <div className="footer-body">
                                                <h3>Legal</h3>
                                                <ul>
                                                      <li>
                                                            <a href="/">Terms and conditions</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Privacy</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Cookies</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Modern Slavery Statement</a>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <div className="col-sm-12 col-md-4 mb-2 mt-3">
                                          <div className="footer-body">
                                                <h3>Help</h3>
                                                <ul>
                                                      <li>
                                                            <a href="/">Contact</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">FAQ</a>
                                                      </li>
                                                      <li>
                                                            <a href="/">Site map</a>
                                                      </li>
                                                </ul>
                                          </div>
                                    </div>
                                    <nav className="text-footer">
                                          <div className="mb-3">© 2018 DeliveFoo</div>
                                    </nav>
                              </div>

                        </div>
                  </footer>
            );
      }
}

export default Footer;