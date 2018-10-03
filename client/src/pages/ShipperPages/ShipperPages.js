import React, { Component } from 'react';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';
import ShipperPagesBackground from '../../components/ShipperPages/ShipperPagesBackground';
import ShipperPagesSectionOne from '../../components/ShipperPages/ShipperPagesSectionOne';
import ShipperPagesSectionTwo from '../../components/ShipperPages/ShipperPagesSectionTwo';
import ShipperPagesSectionThree from '../../components/ShipperPages/ShipperPagesSectionThree';
import '../../styles/css/header.css';
import '../../styles/css/rider.css';
import '../../styles/css/mobile.css';
import '../../styles/css/footer.css';

class ShipperPages extends Component {
      render() {
            return (
                  <div>
                        <Header />
                        <ShipperPagesBackground />
                        <ShipperPagesSectionOne />
                        <ShipperPagesSectionTwo />
                        <ShipperPagesSectionThree />
                        <Footer />
                  </div>
            );
      }
}

export default ShipperPages;

