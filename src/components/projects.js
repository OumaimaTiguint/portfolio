import React from 'react';
import './projects.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/fontawesome-free-solid';

class Projects extends React.Component {
    projects= [
    { 
        link: "https://mock-salon.netlify.app/",
        code: "https://github.com/OumaimaTiguint/mock-salon",
        title: "Hair Salon",
        img: 'pictures/salon.png'
    }, 
    { 
        link: "https://mock-bookstore.netlify.app/",
        code: "https://github.com/OumaimaTiguint/bookstore",
        title: "Bookstore",
        img: 'pictures/bookstore.png'
    }, 
    { 
        link: "https://qizz.netlify.app/",
        code: "https://github.com/OumaimaTiguint/React-quiz",
        title: "Quizz",
        img: 'pictures/quizz.png'
    },
    {
        link: "https://iss-location.netlify.app/",
        code: "https://github.com/OumaimaTiguint/ISS-location",
        title: "ISS Location",
        img: 'pictures/iss.png'
    }
    ]
    render() {
        return (
            <div id="projects">
                <div className="line"></div>
                <h2 className="title">Projects</h2>
                <div className="projects">
                    { 
                        this.projects.map(project => 
                            <Popup trigger={
                                <div className="project" key={project.title}>
                                    <h3>{project.title} </h3>
                                    <button className="code" onClick={()=> window.open(project.code, "_blank")}>
                                        <FontAwesomeIcon icon={faCode} />
                                    </button>
                                    <button className="link"  onClick={()=> window.open(project.link, "_blank")}>Check out the site</button>
                                </div>
                            } position="right center">
                                <div className="popup">
                                    <img alt={project.title} src={project.img}></img>
                                </div>
                            </Popup>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Projects;