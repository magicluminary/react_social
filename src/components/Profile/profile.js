import React from "react";
import c from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={c.container}>
        <ProfileInfo profile={props.profile} />
        <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile;