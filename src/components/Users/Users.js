import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/api";
import {toggleFollowingProgress} from "../../redux/users-reducer";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.users}>
            <div className={styles.pages}>
                {pages.map(p => {
                        let page = props.currentPage === p ? styles.selectedPage : '';
                        return <span className={styles.page + ' ' + page}
                                     onClick={(e) => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    }
                )}
            </div>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                props.users.map(u =>
                    <div className={styles.user} key={u.id}>

                      <span>
                          <NavLink to={'/profile/'+u.id}>
                              <img className="avatar" src={u.photos.small != null ? u.photos.small : userPhoto}/>
                          </NavLink>
                      </span>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id=>id===u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>Unfollow </button>
                            : <button disabled={props.followingInProgress.some(id=>id===u.id)}
                                onClick={() => {props.follow(u.id)}}>Follow</button>}
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
        </div>
    )
}

export default Users;