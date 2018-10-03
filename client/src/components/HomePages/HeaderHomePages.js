import React, { Component } from 'react';
import HeaderBarHomePage from './HeaderBarHomePage';
import ContainerBackground from './ContainerBackground';

class HeaderHomePages extends Component {
      render() {
            return (
                  <header className="header" style={{ backgroundColor: '#5DC1BF' }}>
                        <HeaderBarHomePage />
                        <ContainerBackground />
                  </header>
            );
      }
}

export default HeaderHomePages;