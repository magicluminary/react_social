import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.name} likes={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return ( <div className={c.posts}>
            <div>
                <h3>My posts</h3>
                <div className={c.addPost}>
                    <div>
                        <textarea ref={newPostElement} value={props.newPostText}  onChange={onPostChange} />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                {postsElement}
            </div>
        </div>)
}
export default MyPosts;