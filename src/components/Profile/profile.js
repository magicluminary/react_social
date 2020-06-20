import React from "react";
import c from './profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={c.container}>
        <ProfileInfo />
       <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile;