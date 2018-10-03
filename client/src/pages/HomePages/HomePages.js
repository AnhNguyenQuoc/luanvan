import React, { Component } from 'react';
import HeaderHomePages from '../../components/HomePages/HeaderHomePages';
import Footer from '../../components/Layouts/Footer';
import Section1 from '../../components/HomePages/Section1';
import Section2 from '../../components/HomePages/Section2';
import Section3 from '../../components/HomePages/Section3';
import Section4 from '../../components/HomePages/Section4';
import '../../styles/css/custom.css';
import '../../styles/css/mobile.css';
import '../../styles/css/footer.css';

class HomePages extends Component {
      render() {
            return (
                  <div>
                        <HeaderHomePages />
                        <Section1 />
                        <Section2 />
                        <Section3 />
                        <Section4 />
                        <Footer />
                  </div>
            );
      }
}

export default HomePages;