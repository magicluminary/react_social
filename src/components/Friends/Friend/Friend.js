import React from "react";
import c from './../Friends.module.css';
import {NavLink} from "react-router-dom";

const Friend = (props) => {
    return (
        <div className={c.friend}>
            <NavLink to=''>
                <img className="avatar" src={props.state.avatar}/>
                <span>{props.state.name}</span>
            </NavLink>
        </div>
    )
}
export default Friend;