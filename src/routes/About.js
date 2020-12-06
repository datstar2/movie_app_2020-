import React from 'react'
import './About.css'

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>Freedom is th freedom to say that twoplus two make four. If that is granted, all else follows.

            </span>
            <span>- George Orwell, 1984</span>
        </div>
    );
}

export default About
