import React from 'react';
import './projects.css';

class Projects extends React.Component {
    projects= [
    {
        link: "https://iss-location.netlify.app/",
        code: "https://github.com/OumaimaTiguint/ISS-location",
        title: "ISS Location",
        img: 'pictures/iss.png',
        tech: 'HTML | CSS | Javascript | Leaflet | wheretheiss.at API'
    },
    { 
        link: "https://mock-bookstore.netlify.app/",
        code: "https://github.com/OumaimaTiguint/bookstore",
        title: "Bookstore",
        img: 'pictures/bookstore.png',
        tech: 'HTML | CSS | Javascript | React | Redux | Bootstrap '
    }, 
    { 
        link: "https://mock-salon.netlify.app/",
        code: "https://github.com/OumaimaTiguint/mock-salon",
        title: "Hair Salon",
        img: 'pictures/salon.png',
        tech: "HTML | CSS | Javascript | React"
    },
    { 
        link: "https://qizz.netlify.app/",
        code: "https://github.com/OumaimaTiguint/React-quiz",
        title: "Quizz",
        img: 'pictures/quizz.png',
        tech: 'HTML | CSS | Javascript | React '
    }
    ]
    render() {
        return (
            <div id="projects">
                <h2 className="title">Projects</h2>
                <div className="projects">
                    { 
                        this.projects.map(project => 
                            <div className="project" key={project.title}>
                                <div className="one-side">
                                    <img alt={project.title} src={project.img}></img>
                                </div>
                                <div className="other-side">
                                    <h3>{project.title} </h3>
                                    <p>{project.tech}</p>
                                    <a
                                        className="code" 
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Code
                                    </a>
                                    <a
                                        className="link"  
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live
                                    </a>
                            
                                </div>
                                
                             </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Projects;