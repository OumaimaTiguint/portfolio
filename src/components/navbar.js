import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faListAlt, faCode, faAt } from '@fortawesome/fontawesome-free-solid';
import { faGithub, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

class About extends React.Component {

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="#intro"><FontAwesomeIcon icon={faHome} />
                        Home
                    </a>
                    <a href="#about"><FontAwesomeIcon icon={faAddressCard} /> 
                        About
                    </a>
                    <a href="#skills"><FontAwesomeIcon icon={faListAlt} /> 
                        Skills
                    </a>
                    <a href="#projects"><FontAwesomeIcon icon={faCode} />
                        Projects
                    </a>
                    
                    <div className="bottom">
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/OumaimaTiguint">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/oumaima-tiguint-8608b7185/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="mailto:webmaster@example.com">
                            <FontAwesomeIcon icon={faAt} />
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/OTiguint">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default About;