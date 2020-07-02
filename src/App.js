import React from 'react';
import './App.css';
import Navbar from "./components/Sidebar/Navbar/navbar";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Sidebar/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <div className="sidebar">
                    <Navbar/>
                    {/*<Friends state={props.store.getState().sidebar}/>*/}
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer  />} />
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer  />}   />
                    <Route path='/users'
                           render={() => <UsersContainer />} />
                    <Route path='/login'
                           render={() => <LoginPage />} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
