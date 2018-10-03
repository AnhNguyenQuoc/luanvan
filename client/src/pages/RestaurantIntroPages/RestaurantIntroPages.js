import React, { Component } from 'react';
import Header from '../../components/Layouts/Header';
import Footer from '../../components/Layouts/Footer';
import RestaurantSectionOne from '../../components/RestaurantInfoPages/RestaurantSectionOne';
import RestaurantSectionTwo from '../../components/RestaurantInfoPages/RestaurantSectionTwo';
import RestaurantSectionThree from '../../components/RestaurantInfoPages/RestaurantSectionThree';
import RestaurantBackground from '../../components/RestaurantInfoPages/RestaurantBackground';
import '../../styles/css/header.css';
import '../../styles/css/restaurant.css';
import '../../styles/css/mobile.css';
import '../../styles/css/footer.css';

class RestaurantIntroPages extends Component {
      render() {
            return (
                  <div>
                        <Header />
                        <RestaurantBackground />
                        <RestaurantSectionOne />
                        <RestaurantSectionTwo />
                        <RestaurantSectionThree />
                        <Footer />
                  </div>
            );
      }
}

export default RestaurantIntroPages;