import React from 'react';
import { Route, Redirect } from 'react-router';
import Signin from './Signin';
import Signup from './Signup';

const PrivateRoute = ({me, component: Component, ...rest}) => {
    return (
        <Route {...rest} render={(props)=>(
            me ? <Component {...props} />
            : <> <Signin/> <Signup/> </>
        )}/>
    );
};

export default PrivateRoute;