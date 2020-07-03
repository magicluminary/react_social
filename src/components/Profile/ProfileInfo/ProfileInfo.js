import React from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div className={c.post}>
                {/*<div><img alt="er" src='https://sf.co.ua/13/07/wallpaper-2941179.jpg' /></div>*/}
            <div className={c.userdesc}>
                <div className={c.ava}><img alt="rge" src={props.profile.photos.large}/></div>

                <div><div className={c.description}>{props.profile.fullName}</div><div className={c.description}>{props.profile.aboutMe}</div></div>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>{props.profile.lookingForAJob}</div>
            <div>{props.profile.lookingForAJobDescription}</div>
        </div>
    )
}
export default ProfileInfo;