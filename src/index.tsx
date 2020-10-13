import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Button from '@material-ui/core/Button';

const Public = () => <h1>Public</h1>;
const Private = () => <h1>Private</h1>
const Login = () => <h1>Login</h1>

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/protected">Protected</Link>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Public />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/protected">
                    <Private />
                </Route>
            </Switch>
        </Router>

    );
}

ReactDOM.render(<App />, document.getElementById('root'))