import React from "react";
import c from './profile.module.css';


const Profile = () => {
    return <div className={c.content}>
        <div><img src='https://sf.co.ua/13/07/wallpaper-2941179.jpg'/></div>
        <div className={c.ava}><img src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/></div>
        <div>
            My posts
        </div>
        <div className={c.posts}>
            <div>
                New posts
                <div className={c.item}>Post 1</div>
                <div className={c.item}>Post 2</div>
            </div>
        </div>
    </div>
}
export default Profile;