import React from 'react';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Profile from "./components/profile";


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
