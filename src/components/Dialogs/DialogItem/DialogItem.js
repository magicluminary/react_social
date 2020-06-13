import React from "react";
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={c.dialog + ' ' + c.active}>
            <NavLink to=''>
                <img className="avatar" src={props.avatar}/>
                <span>{props.name}</span>
            </NavLink>
        </div>
    )
}

export default Friend;