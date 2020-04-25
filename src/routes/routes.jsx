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

function CustomRoute({ route, component, showSidebar }) {
  const Component = withRouter(component);
  const margin = showSidebar ? 'ml-64' : 'ml-0';
  return (
    <Route exact path={route}>
      <div>
        {
          showSidebar && <Sidebar />
        }
        <div className={margin}>
          <Component />
        </div>
      </div>
    </Route>
  );
}

export default function RoutesManager() {
  return (
    <Router>
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
  showSidebar: PropTypes.bool,
};

CustomRoute.defaultProps = {
  showSidebar: false,
};
