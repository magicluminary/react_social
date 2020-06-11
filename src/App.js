import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer";
import Profile from "./components/Profile/profile";


const App = () => {
  return (
      <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Footer />
      </div>
  );
}

export default App;
