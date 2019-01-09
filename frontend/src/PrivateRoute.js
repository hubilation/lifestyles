import React from 'react';
import { Route, Redirect } from 'react-router';
import Signin from './Signin';

const PrivateRoute = ({me, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            me ? <Component {...props} />
            : <Signin/>
        )}/>
    );
};

export default PrivateRoute;