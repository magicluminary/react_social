import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava.jpg";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className={c.post}>
            <div className={c.userdesc}>
                <div className={c.ava}><img alt="rge" src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/></div>
                <div><div className={c.description}>{props.profile.fullName}</div><div className={c.description}>{props.profile.aboutMe}</div></div>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}
export default ProfileInfo;