import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/ava.jpg";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
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
                          <img className="avatar" src={u.photos.small != null ? u.photos.small : userPhoto}/>
                      </span>
                        {u.followed
                            ? <button onClick={() => {props.follow(u.id)}}>Unfollow</button>
                            : <button onClick={() => {props.unfollow(u.id)}}>Follow {u.followed}</button>}

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