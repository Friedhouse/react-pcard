import Header from '../Features/Header';
import MainFeatures from '../Features/MainFeatures';
import About from '../Features/About';
import Comments from '../Features/Comments';
import React from 'react'
import Navigation from '../Features/Navbar';

const HomePage = () => {
    return (
        <div>
            <Navigation />
            <Header />
            <hr />
            <MainFeatures />
            <hr />
            <About />
            <hr />
            <Comments />
        </div>
    )
}

export default HomePage;