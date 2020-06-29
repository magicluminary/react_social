import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(response => {
                if(response.data.resultCose === 0){
                    let {id,email,login} = response.data.data;
                    this.props.setAuthUserData(id,email,login)
                }
            })

    }

    render() {
        return <Header {...this.props}/>
    }
}
const mathStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mathStateToProps,{setAuthUserData})(HeaderContainer);