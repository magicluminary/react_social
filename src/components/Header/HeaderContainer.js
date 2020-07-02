import React from 'react';
import Header from "./Header";
import {getAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props}/>
    }
}
const mathStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mathStateToProps,{getAuthUserData})(HeaderContainer);