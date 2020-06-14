import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.name} likes={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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