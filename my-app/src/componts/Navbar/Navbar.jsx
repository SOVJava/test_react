import React from 'react';
import css from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <NavLink to="/profile/me">Profile</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={css.item}>
                <NavLink to="/users">Search users</NavLink>
            </div>
            <div className={css.item}>
                <a href="/news">News</a>
            </div>
            <div className={css.item}>
                <a href="/music">Music</a>
            </div>
            <div className={css.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;