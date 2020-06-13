import React from "react";
import c from './Friends.module.css';
import Friend from "./Friend/Friend";
import Message from "../Dialogs/Message/Message";

const Friends = (props) => {
    let friends = props.state.friends.map(m => <Friend state={m}/>);

    return (
        <div className={c.friends}>
            <div>Friends</div>
            {friends}
        </div>
    )
}
export default Friends;