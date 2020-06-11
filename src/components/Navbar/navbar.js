import React from "react";
import c from './navbar.module.css';

const Navbar = () => {
    return <nav className={c.nav}>
        <div><a className={`${c.item} ${c.active}`}>Profile</a></div>
        <div><a className={c.item}>Messages</a></div>
        <div><a className={c.item}>News</a></div>
        <div><a className={c.item}>Music</a></div>
        <div><a className={c.item}>Settings</a></div>
    </nav>
}
export default Navbar;