import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, ...rest }) {
    const isAuth = useSelector(state => state.isAuth);
    console.log(isAuth, "protectedRoute");
    return (
        <Route
            {...rest}
            render={props => {
                return (isAuth ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                prevpatchname: props.location.pathname
                            }}
                        />
                    ))
            }}
        />
    );
}

export default ProtectedRoute;