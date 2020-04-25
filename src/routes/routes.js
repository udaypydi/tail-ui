import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Loader from 'uielements/loader/loader.component';
import ROUTES_CONFIG from './config';

function CustomRoute({ route, component }) {
    return (
        <Route path={route}>
            <Suspense fallback={<Loader />}>
                {component}
            </Suspense>
        </Route>
    );
}

export default function RoutesManager() {
    return (
        <Router>
            <Switch>
                {
                    ROUTES_CONFIG.map(({path, component, id }) => (
                        <CustomRoute route={path} component={component} key={id} />
                    ))
                }
            </Switch>
        </Router>
    )
}