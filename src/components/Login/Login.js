import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validator/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
                {createField("Login","email",[required],Input)}
                {/*<Field placeholder={"Login"} name={"email"} component={Input} validate={[required]}/>*/}
            <div><Field placeholder={"Password"} name={"password"} type={"password"} component={Input} validate={[required]}/></div>
            <div><Field component={"input"} name={"rememberMe"} type={"checkbox"}/>remember me</div>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div><button>Login</button></div>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email,formData.password,formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps,{login})(Login);