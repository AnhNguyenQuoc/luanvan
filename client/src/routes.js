import React from 'react';
import HomePages from './pages/HomePages/HomePages';


const routes = [
      {
            to: '/',
            exact: true,
            main: () => <HomePages />
      }
]


export default routes;