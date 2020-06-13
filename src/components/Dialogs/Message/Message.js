import React from "react";
import c from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Message = (props) => {
 let owner = props.state.owner ? c.owner : '';

 return(
     <div className={c.message}>
         <div className={owner}>
            <img className="avatar" src={props.state.avatar}/>
            <div className={c.message_content}> <span>{props.state.name}</span></div>
         </div>
     </div>
 )
}

export default Message;