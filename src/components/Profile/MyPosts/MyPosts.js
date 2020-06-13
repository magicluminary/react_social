import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post message={p.name} likes={p.likesCount} />);

    return ( <div className={c.posts}>
            <div>
                <h3>My posts</h3>
                <div className={c.addPost}>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                {postsElement}
            </div>
        </div>)
}
export default MyPosts;