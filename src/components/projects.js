import React from 'react';
import '../App.css';
import { withTranslation } from 'react-i18next';

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
        link: "https://readingstats.netlify.app/",
        code: "https://github.com/OumaimaTiguint/reading-stats",
        title: "Reading Stats",
        img: 'pictures/stats.png',
        tech: "HTML | CSS | Javascript | React | Chart.js | Material UI"
    },
    { 
        link: "https://mock-bookstore.netlify.app/",
        code: "https://github.com/OumaimaTiguint/bookstore",
        title: "Bookstore",
        img: 'pictures/bookstore.png',
        tech: 'HTML | CSS | Javascript | React | Redux | Bootstrap '
    },
    { 
        link: "https://github.com/OumaimaTiguint/mern-exercise-tracker",
        code: "https://github.com/OumaimaTiguint/mern-exercise-tracker",
        title: "Exercise Tracker",
        img: 'pictures/tracker.png',
        tech: 'HTML | CSS | Javascript | React | MongoDB | Express | Node'
    }
    ]
    render() {
        const { t } = this.props;
        return (
            <div id="projects">
                <h2 className="title">{t('Projects')}</h2>
                <div className="projects container">
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
                                        {t('Live')}
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

export default withTranslation()(Projects);