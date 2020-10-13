import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

type Props = {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?: boolean;
}

export const AuthRoute = ({ Component, path, exact = false }: Props): JSX.Element => {
    const isAuth = true;
    return (
        <Route exact={exact} path={path} render={(props: RouteComponentProps) => {
            return isAuth ? <Component {...props} /> : <Redirect to={'/login'} />
        }} />
    )
}