import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
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
                <Post message="What's up" likes='15'/>
                <Post message="It's my first post" likes='10'/>
            </div>
        </div>)
}
export default MyPosts;