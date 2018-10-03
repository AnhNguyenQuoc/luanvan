import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
      render() {
            return (
                  <header className="header" style={{
                        backgroundImage: "none"
                  }}>
                        <div className="header-bar" >
                              <nav className="navbar navbar-expand-lg navbar-light">
                                    <Link to='/' className='navbar-brand logo'>Logo</Link>
                                    <span className="only-show-mobile">
                                          <a href="/">
                                                <i className="fas fa-user"></i>
                                          </a>
                                    </span>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                          <ul className="navbar-nav ml-auto">
                                                <li className="nav-item second-header">
                                                      <a className="nav-link" href="/">Call us now: +84 080000000</a>
                                                </li>
                                          </ul>
                                    </div>
                              </nav>
                        </div>
                  </header>
            );
      }
}

export default Header;