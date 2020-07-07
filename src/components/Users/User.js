import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpg";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

let User = ({user, followingInProgress, unfollow, follow}) => {
    let u = user;
    return (
        <div className={styles.user} key={u.id}>

                      <span>
                          <NavLink to={'/profile/' + u.id}>
                              <img className="avatar" src={u.photos.small != null ? u.photos.small : userPhoto}/>
                          </NavLink>
                      </span>
            {u.followed
                ? <button disabled={followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                              unfollow(u.id)
                          }}>Unfollow </button>
                : <button disabled={followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                              follow(u.id)
                          }}>Follow</button>}
            <span>
                              <span>{u.name}</span>
                              <span>{u.status}</span>
                        </span>
            <span>
                            <span>{"u.location.city"}</span>,
                            <span>{"u.location.country"}</span>
                        </span>
        </div>
    )
}

export default User;