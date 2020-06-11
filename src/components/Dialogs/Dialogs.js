import React from "react";
import c from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
          <div className={c.dialog + ' ' + c.active}>
              <NavLink to={path}>{props.name}</NavLink>
          </div>
    )
}

const Message = (props) => {
 return(
     <div className={c.message}>{props.message}</div>
 )
}

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogItem name="Dima" id="1"/>
                <DialogItem name="Sasha" id="2"/>
                <DialogItem name="Sveta" id="3"/>
                <DialogItem name="Shura" id="4"/>
            </div>
            <div className={c.messages}>
                <Message message="Hi" />
                <Message message="How are you" />
                <Message message="Fine" />
                <Message message="reura" />
                <Message message="Yo" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;