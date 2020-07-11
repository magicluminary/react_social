import React from "react";
import c from './profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return <div className={c.container}>
        <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                     savePhoto={props.savePhoto} saveProfile={props.saveProfile} isSaved={props.isSaved}/>
        <MyPostsContainer store={props.store}/>
    </div>
}
export default Profile;