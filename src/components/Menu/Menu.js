import React, { useState } from 'react';
import block from 'bem-css-modules'
import style from "./Menu.module.scss"
import { MENU_TEXT } from "data/text.constant"
import { AiOutlineClose } from 'react-icons/ai';
import Background from "./Background"
import HamburgerButton from "./HamburgerButton"
import { NavLink, withRouter } from "react-router-dom";
import { useSelector } from 'react-redux';
import useAuth from 'utils/useAuth';
const b = block(style)

export default withRouter(function Nav(props) {
    const [toggleMenu, setToggleMenu] = useState(false)
    const isAuth = useSelector(state => state.isAuth)
    const { handleLogOut } = useAuth()
    const handleClick = (logOut = false) => {
        setToggleMenu(!toggleMenu)
        if (logOut) {
            handleLogOut()
        }
    }
    return (
        <>
            <HamburgerButton handleClick={handleClick}></HamburgerButton>
            <div className={b(null, { open: toggleMenu })} >
                <AiOutlineClose className={b("close")} onClick={() => handleClick()} ></AiOutlineClose>
                <ul className={b('ul', { open: toggleMenu })}>
                    <NavLink
                        className={b('li')}
                        to={{ pathname: "/" }}
                        onClick={() => handleClick()}>
                        {MENU_TEXT.map}
                    </NavLink>

                    {
                        isAuth ? <NavLink
                            className={b('li')}
                            to={{ pathname: "/add" }}
                            onClick={() => handleClick()}>
                            {MENU_TEXT.add}
                        </NavLink> : null
                    }

                    {
                        isAuth ? <NavLink
                            className={b('li')}
                            to={{ pathname: "/logout" }}
                            onClick={() => handleClick(true)}>
                            {MENU_TEXT.logout}
                        </NavLink> :
                            <NavLink
                                className={b('li')}
                                to={{ pathname: "/login" }}
                                onClick={() => handleClick()}>
                                {MENU_TEXT.login}
                            </NavLink>


                    }

                    <NavLink
                        className={b('li')}
                        to={{ pathname: "/policy" }}
                        onClick={() => handleClick()}
                    >
                        {MENU_TEXT.policy}
                    </NavLink>
                    <NavLink
                        className={b('li')}
                        to={{ pathname: "/rules" }}
                        onClick={() => handleClick()}
                    >
                        {MENU_TEXT.rules}
                    </NavLink>
                </ul>
            </div>
            <Background toggleMenu={toggleMenu} onclick={() => handleClick()}></Background>
        </>
    );
});


