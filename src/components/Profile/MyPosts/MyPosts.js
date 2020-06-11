import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
    return ( <div className={c.posts}>
            <div>
                New posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <Post message="What's up" likes='15'/>
                <Post message="It's my first post" likes='10'/>
            </div>
        </div>)
}
export default MyPosts;