import Header from '../Features/Header';
import MainFeatures from '../Features/MainFeatures';
import About from '../Features/About';
import Comments from '../Features/Comments';
import React from 'react'

const HomePage = () => {
    return (
        <div>
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