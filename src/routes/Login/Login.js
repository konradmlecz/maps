/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom"
import block from 'bem-css-modules'
import style from "./Login.module.scss"
import { ROUTE_LOGIN_TEXT } from "data/text.constant"
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import useAuth from 'utils/useAuth';
import { useSelector } from 'react-redux';
const b = block(style)




export default () => {
    const isAuth = useSelector(state => state.isAuth)
    const { handleLogIn } = useAuth()

    return (
        <div className={b()}>
            { !isAuth || <Redirect to={{ pathname: "/" }} />}
            <h1 className={b("h1")}>
                {ROUTE_LOGIN_TEXT.h1}
            </h1>
            <p className={b("p")}>
                {ROUTE_LOGIN_TEXT.p1}
            </p>
            <FacebookLogin
                appId="146225643483574"
                fields="name,email,picture"
                render={renderProps => (
                    <button className={b("button")} onClick={renderProps.onClick}><AiFillFacebook className={b("icon")}></AiFillFacebook><p className={b("text")}>{ROUTE_LOGIN_TEXT.facebook}</p></button>
                )}
                callback={(res) => handleLogIn(res)}
            />
            {/* <GoogleLogin
                className={b("button")}
                clientId="1"
                disabled={true}
                onSuccess={() => { }}
                onFailure={() => { }}
                render={renderProps => (
                    <button className={b("button")} onClick={renderProps.onClick} disabled={renderProps.disabled}>  <FcGoogle className={b("icon")}></FcGoogle >   <p className={b("text")}>{ROUTE_LOGIN_TEXT.google}</p></button>
                )}
                cookiePolicy={'single_host_origin'}
            /> */}
            <p className={b("p")}>
                {ROUTE_LOGIN_TEXT.p2}
            </p>
        </div>
    );
}
