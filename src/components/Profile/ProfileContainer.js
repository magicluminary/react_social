import React from "react";
import c from './profile.module.css';
import Profile from "./profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId)
            userId = 2;
        this.props.getUserProfile(userId)
    }
    render() {
        if(!this.props.isAuth)
            return <Redirect to="/login" />

        return <div className={c.container}>
            <Profile {...this.props} profile={this.props.profile}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent);