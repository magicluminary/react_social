import React from "react";
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={c.post}>
                <div><img alt="er" src='https://sf.co.ua/13/07/wallpaper-2941179.jpg'/></div>
                <div className={c.ava}><img alt="rge" src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/></div>
                <div className={c.description}>eg</div>
        </div>
    )
}
export default ProfileInfo;