import React, { Component } from 'react';
import HomePages from './pages/HomePages/HomePages';
import ShipperPages from './pages/ShipperPages/ShipperPages';
import routes from './routes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


class App extends Component {

      showContentMenus = (routes) => {
            var result = null;
            if (routes.length > 0) {
                  result = routes.map((route, index) => {
                        return (
                              <Route key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                              />
                        )
                  })
            }
            return <Switch>{result}</Switch>;
      }

      render() {
            return (
                  <Router>
                        {
                              this.showContentMenus(routes)
                        }
                  </Router>

            );
      }
}

export default App;
