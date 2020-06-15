import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Sidebar/Navbar/navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Sidebar/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className="sidebar">
                    <Navbar/>
                    <Friends state={props.state.sidebar}/>
                </div>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch} />}  />
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
