import React, {useState} from "react";
import c from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/ava.jpg";
import ProfileDataForm from "./ProfileDataForm";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import {Redirect} from "react-router-dom";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if(!props.profile){
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
            .then(() => {
            setEditMode(false);
        })
        // console.log(props.isSaved)
        // if(props.isSaved){
        //     setEditMode(false);
        // }
    }
    return (
        <div className={c.post}>
            <div className={c.userdesc}>
                <div className={c.ava}>
                    <img alt="rge" src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                {editMode
                    ? <ProfileDataFormReduxForm profile={props.profile} onSubmit={onSubmit} isSaved={props.isSaved}/>
                    : <ProfileData goToEditMode={() => setEditMode(true)} profile={props.profile} isOwner={props.isOwner}/> }
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    )
}
const ProfileData = (props) => {
    return <div className={c.descriptions}>
        {props.isOwner && <div><button onClick={props.goToEditMode}>edit</button></div>}
        <div className={c.description}><b>Name:</b>{props.profile.fullName}</div>
        <div className={c.description}><b>About me:</b> {props.profile.aboutMe}</div>
        <div><b>Looking for a job:</b>{props.profile.lookingForAjob} {props.profile.lookingForAjob ? 'yes' : 'no'}</div>
        {/*{props.profile.lookingForAjob &&*/}
        <div><b>My skills:</b> {props.profile.lookingForAjobDescription}</div>
        {/*}*/}
        <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}</div>
    </div>
}


const Contact = ({contactTitle,contactValue}) => {
    return <div className={c.contact}><b>{contactTitle}:</b>{contactValue}</div>
}

export default ProfileInfo;