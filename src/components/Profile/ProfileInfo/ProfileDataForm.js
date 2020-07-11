import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import c from "./ProfileInfo.module.css";
import styles from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit} className={c.descriptions + ' ' + c.edit}>
        <div><button onClick={() => {}}>save</button></div>
        {error && <div className={styles.formSummaryError}>{error}</div>}
        <div className={c.description}>
            <b>Name:</b>
            {createField("Full name", "fullName",[], Input)}
        </div>
        <div className={c.description}>
            <b>About me:</b>
            {createField("About me", "aboutMe",[], Textarea)}
        </div>
        <div className={c.description}>
            <b>Looking for a job:</b>
            {profile.lookingForAjob ? 'yes' : 'no'}
            {createField("", "lookingForAJob",[], Input, {type: "checkbox"})}
        </div>
        <div className={c.description}>
            <b>My skills:</b>
            {createField("My skills", "lookingForAJobDescription",[], Textarea)}
        </div>
        <div className={c.contacts}><b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={c.contact + ' ' + c.description}>
                <b>{key}:</b>
                {createField(key, "contacts." + key,[], Input)}
            </div>
        })}</div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;