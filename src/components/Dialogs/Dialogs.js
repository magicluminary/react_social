import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from './Dialogs.module.css';


const Dialogs = (props) => {

    let state = props.dialogesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>);
    let messagesElements = state.messages.map(m => <Message state={m} key={m.id}/>);

    let newMessageBody = state.newMessageBody;

    let newMessage = React.createRef();

    let onSendMessageClick = () =>{
        props.sendMessage();
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.updateNewMessage(body)
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea ref={newMessage} placeholder='enter message' value={newMessageBody} onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;