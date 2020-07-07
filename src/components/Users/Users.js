import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {getFollowingInProgress} from "../../redux/user-selectors";
import {follow, unfollow} from "../../redux/users-reducer";

let Users = ({currentPage,totalUsersCount,pageSize, onPageChanged, ...props}) => {
    return (
        <div className={styles.users}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            {
                props.users.map(u =>
                    <User user={u} followingInProgress={props.followingInProgress} key={u.id} unfollow={props.unfollow} follow={props.follow}/>
                )
            }
        </div>
    )
}

export default Users;