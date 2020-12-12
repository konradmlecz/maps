/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import block from 'bem-css-modules'
import style from "./AddButton.module.scss"
import { AiFillPlusCircle } from 'react-icons/ai';
import { NavLink } from "react-router-dom";



const b = block(style)

export default () => {
    return (
        <NavLink
            to={{ pathname: "/add" }}>
            <AiFillPlusCircle className={b()}></AiFillPlusCircle>
        </NavLink>
    );
}
