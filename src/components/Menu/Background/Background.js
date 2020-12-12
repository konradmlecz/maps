/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import block from 'bem-css-modules'
import style from "./Background.module.scss"
const b = block(style)

export default ({ toggleMenu, onclick }) => {

    return (
        <div className={b(null, { open: toggleMenu })} onClick={onclick}></div>
    );
}
