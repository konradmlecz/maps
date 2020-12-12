/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import block from 'bem-css-modules'
import style from "./RouteWraper.module.scss"

const b = block(style)

export default ({ children }) => {
    return (
        <div className={b()}>
            {children}
        </div>
    );
}
