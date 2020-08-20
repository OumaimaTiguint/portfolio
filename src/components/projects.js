import React from 'react';
import './projects.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/fontawesome-free-solid';

class Projects extends React.Component {
    projects= [
    { 
        code: "https://github.com/OumaimaTiguint/Global-and-Hemispheric-Monthly-Means",
        title: "Global and Hemispheric temperatures"
    }, 
    { 
        code: "https://github.com/OumaimaTiguint/ISS-location",
        title: "ISS Location"
    }, 
    { 
        code: "https://github.com/OumaimaTiguint/React-quiz",
        title: "Quizz"
    },
    { 
        code: "https://github.com/OumaimaTiguint/flappy-bird-ball-",
        title: "Flappy bird"
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
                        <div className="project" key={project.title}>
                            <h3>{project.title} </h3>
                            <button className="code" onClick={()=> window.open(project.code, "_blank")}>
                                <FontAwesomeIcon icon={faCode} />
                            </button>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default Projects;