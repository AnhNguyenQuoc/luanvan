import React, { Component } from 'react';
import HomePages from './pages/HomePages/HomePages';
import routes from './routes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class App extends Component {


      showRoutes = (routes) => {
            var result = null;
            if (routes.length > 0) {
                  result = routes.map((route, index) => {
                        return (
                              <Route to={route.to} exact={route.exact} component={route.main} key={index} />
                        )
                  })
            }
            return result;
      }

      render() {
            return (
                  <Router>
                        <Switch>
                              <HomePages />


                              {
                                    this.showRoutes(routes)
                              }
                        </Switch>



                  </Router>
            );
      }
}

export default App;
