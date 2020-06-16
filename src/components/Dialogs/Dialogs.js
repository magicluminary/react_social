import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from './Dialogs.module.css';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
    let state = props.store.getState().dialogesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    let messagesElements = state.messages.map(m => <Message state={m}/>);

    let newMessageBody = state.newMessageBody;

    let newMessage = React.createRef();

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) =>{
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea placeholder='enter message' value={newMessageBody} onChange={onNewMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;