import React from "react";
import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // const users = [
        //     {
        //         id: 1,
        //         photos: {
        //             small: 'https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
        //         },
        //         followed: true,
        //         name: 'Dmitry',
        //         status: 'Im a boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        //         id: 2,
        //         photos: {
        //             small: 'https://png.pngtree.com/png-clipart/20190920/original/pngtree-cute-chubby-little-dinosaur-png-image_4625217.jpg',
        //         },
        //         followed: false,
        //         name: 'Sasja',
        //         status: 'Im a boss too',
        //         location: {city: 'Moscow', country: 'Russia'}
        //     }
        // ]
        // this.props.setUsers(users)
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }

    onPageChanged = (p) => {
        this.props.getUsers(p,this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return{
//         follow: (userId) => {
//             dispatch(followAC(userId));
//             console.log('ergerg')
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//             console.log('yjjtyj')
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (count) =>{
//             dispatch(setTotalUsersCountAC(count));
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }


export default connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}
)(UsersContainer);