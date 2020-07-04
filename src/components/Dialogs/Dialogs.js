import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from './Dialogs.module.css';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validator/validators";
import {Textarea} from "../common/FormsControls/FormsControls";



const Dialogs = (props) => {

    let state = props.dialogesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} avatar={d.avatar}/>);
    let messagesElements = state.messages.map(m => <Message state={m} key={m.id}/>);

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

let maxLength20 = maxLengthCreator(20);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newMessageBody" placeholder="enter message" validate={[required, maxLength20]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default Dialogs;