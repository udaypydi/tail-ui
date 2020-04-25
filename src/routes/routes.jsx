import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Sidebar from 'src/routes/sidebar';
import ROUTES_CONFIG from './config';

function CustomRoute({ route, component }) {
  return (
    <Route exact path={route}>
      {withRouter(component)}
    </Route>
  );
}

export default function RoutesManager() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        {
            ROUTES_CONFIG.map((route) => CustomRoute(route))
        }
      </Switch>
    </Router>
  );
}


CustomRoute.propTypes = {
  route: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
};
