import React from 'react';
import HomePages from './pages/HomePages/HomePages';
import ShipperPages from './pages/ShipperPages/ShipperPages';
import { Redirect } from 'react-router-dom';
import RestaurantIntroPages from './pages/RestaurantIntroPages/RestaurantIntroPages';


const routes = [
      {
            path: "/",
            exact: true,
            main: () => <HomePages />
      },
      {
            path: "/shipper",
            exact: false,
            main: () => <ShipperPages />
      },
      {
            path: "/restaurant",
            exact: false,
            main: () => <RestaurantIntroPages />
      },
      {
            path: "",
            exact: false,
            main: () => <Redirect to='/' />
      }
]


export default routes;