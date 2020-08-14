import React from 'react';
import c from './header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={c.header}>
        {/*<img src='https://image.shutterstock.com/image-vector/dots-letter-c-logo-design-260nw-551769190.jpg'/>*/}
        <NavLink className={c.logo} to='/'>SN</NavLink>
        <div className={c.loginblock}>
            {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to='/login'>Login</NavLink>}
        </div>
    </header>
}

export default Header;