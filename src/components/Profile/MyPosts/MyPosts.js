import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.name} likes={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }

    return ( <div className={c.posts}>
            <div>
                <h3>My posts</h3>
                <AddMessageFormRedux onSubmit={onAddPost}/>
                {postsElement}
            </div>
        </div>)
}

let maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) =>{
    return (
        <form className={c.addPost} onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostBody" placeholder="enter post" validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'postAddMessageForm'})(AddNewPostForm)

export default MyPosts;