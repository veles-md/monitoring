import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { PublicLayout } from './layouts/public'

import { AuthRoute } from './components/PrivateRoute';

const Dashboard = () => <h1>Dashboard </h1>


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={PublicLayout} />
                <AuthRoute path="/dashboard" Component={Dashboard} />
            </Switch>
        </Router>

    );
}

ReactDOM.render(<App />, document.getElementById('root'))