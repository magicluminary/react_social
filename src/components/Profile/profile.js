import React from "react";
import c from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";


const Profile = (props) => {
    return <div className={c.container}>
        <ProfileInfo />
       <MyPosts posts={props.state.posts}
                dispatch={props.dispatch}
                // newPostText={props.state.newPostText}
                // updateNewPostText = {props.updateNewPostText}
       />
    </div>
}
export default Profile;