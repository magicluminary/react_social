import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";



const Dialogs = (props) => {

    let state = props.dialogesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>);
    let messagesElements = state.messages.map(m => <Message state={m} key={m.id}/>);

    let newMessageBody = state.newMessageBody;

    let newMessage = React.createRef();

    // let onSendMessageClick = () =>{
    //     props.sendMessage();
    // }
    // let onNewMessageChange = (e) =>{
    //     let body = e.target.value;
    //     props.updateNewMessage(body)
    // }
    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }

    if(!props.isAuth)
        return <Redirect to={"/login"} />

    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="enter message"/>
                {/*<textarea ref={newMessage}  value={newMessageBody} onChange={onNewMessageChange}></textarea>*/}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;