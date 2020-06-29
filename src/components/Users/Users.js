import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {withCredentials:true,
                                        headers:{
                                            "API-KEY":"538a19b8-b072-4138-840a-88d1384280f9"
                                        }
                                    })
                                .then(response => {
                                    if(response.data.resultCode == 0){
                                        props.unfollow(u.id)
                                    }
                                })
                            }}>Unfollow </button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                    headers:{
                                        "API-KEY":"538a19b8-b072-4138-840a-88d1384280f9"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode == 0){
                                            props.follow(u.id)
                                        }
                                    })
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
        </div>
    )
}

export default Users;