import React from "react";
import c from './navbar.module.css';
import {NavLink} from "react-router-dom";
import profileSvg from './../../../assets/images/profile.svg';
import usersSvg from './../../../assets/images/users.svg';
import messagesSvg from './../../../assets/images/messages.svg';
import musicSvg from './../../../assets/images/music.svg';
import settingsSvg from './../../../assets/images/settings.svg';

const Navbar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink to='/profile' activeClassName={c.activeLink}><img src={profileSvg} />Profile</NavLink>
            </div>
            <div className={`${c.item} ${c.active}`}>
                <NavLink to='/dialogs' activeClassName={c.activeLink}><img src={messagesSvg} />Messages</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/users' activeClassName={c.activeLink}><img src={usersSvg} />Users</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/music' activeClassName={c.activeLink}><img src={musicSvg} />Music</NavLink>
            </div>
            <div className={c.item}>
                <NavLink to='/settings' activeClassName={c.activeLink}><img src={settingsSvg} />Settings</NavLink>
            </div>
        </nav>
    )
}
export default Navbar;