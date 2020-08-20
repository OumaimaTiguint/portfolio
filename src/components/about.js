import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/fontawesome-free-solid';

class About extends React.Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="line"></div>
                <h2 className="title">About Me</h2>
                <div className="grid">
                    <div className="pic"></div>
                    <p className="text">My name is Oumaima Tiguint I'm a 21 year old Front End Developer based in Kenitra, Morocco. I describe myself as a passionate developer who loves to learn a ton of new stuff and grow as a developer. </p>
                    <a 
                        className="btn" 
                        href="/Oumaima-Tiguint-CV.pdf"
                        download>
                        <FontAwesomeIcon icon={faArrowDown} />
                        Download CV
                    </a>
                </div>
                
            </div>
        )
    }
}

export default About;