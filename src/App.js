import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Sidebar/Navbar/navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Sidebar/Friends/Friends";

import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized)
            return <Preloader />

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className="sidebar">
                    <Navbar/>
                    {/*<Friends state={props.store.getState().sidebar}/>*/}
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/users'
                           render={withSuspense(UsersContainer)}/>
                    <Route path='/login'
                           render={() => <LoginPage/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mathStateToProps = (state) => ({
    initialized: state.app.initialized
});

let AppContainer = compose(
    withRouter,
    connect(mathStateToProps, {initializeApp})
)(App);

let SocialApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
}

export default SocialApp;