import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);

    let messagesElements = props.state.messages.map(m => <Message state={m}/>);


    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;