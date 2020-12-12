/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import block from 'bem-css-modules'
import style from "./HamburgerButton.module.scss"
const b = block(style)

export default ({ handleClick }) => {
    return (
        <GiHamburgerMenu onClick={() => handleClick()} className={b()}></GiHamburgerMenu>
    );
}
