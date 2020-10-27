import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { PublicLayout } from './layouts/public'
import { Dashboard } from './layouts/dashboard';

import { AuthRoute } from './components/PrivateRoute';

const store = configureStore();


function App() {
    return (
        <Provider store={store}>
            <Router>
                <CssBaseline />
                <Switch>
                    <Route exact path="/" component={PublicLayout} />
                    <AuthRoute path="/dashboard" Component={Dashboard} />
                </Switch>
            </Router>
        </Provider>

    );
}

ReactDOM.render(<App />, document.getElementById('root'))