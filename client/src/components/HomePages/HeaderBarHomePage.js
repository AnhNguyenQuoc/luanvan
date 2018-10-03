import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderBarHomePage extends Component {
      render() {
            return (
                  <div className="header-bar">
                        <nav className="navbar navbar-expand-lg navbar-light">
                              <Link to='/' className='navbar-brand logo'>Logo</Link>
                              <span className="only-show-mobile">
                                    <a href="/">
                                          <i className="fas fa-user"></i>
                                    </a>
                              </span>
                              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <ul className="navbar-nav ml-auto">
                                          <li className="nav-item first-header">
                                                <Link to='/shipper' className='nav-link'>
                                                      <i className="fas fa-bicycle">Trở thành Shipper</i>
                                                </Link>
                                          </li>
                                          <li className="nav-item second-header">
                                                <a className="nav-link" href="/">Đăng nhập</a>
                                          </li>
                                    </ul>
                              </div>
                        </nav>
                  </div>
            );
      }
}

export default HeaderBarHomePage;