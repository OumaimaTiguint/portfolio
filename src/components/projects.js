import React from 'react';
import { withTranslation } from 'react-i18next';
import '../styles/projects.css';
import '../App.css';

class Projects extends React.Component {
    projects= [
    {
        link: "https://iss-location.netlify.app/",
        code: "https://github.com/OumaimaTiguint/ISS-location",
        title: "ISS Location",
        img: 'pictures/iss.jpg',
        desc: 'This is a simple project showing where the International Space Station is in real time.',
        tech: 'HTML | CSS | Javascript | Leaflet | wheretheiss.at API'
    },
    { 
        link: "https://readingstats.netlify.app/",
        code: "https://github.com/OumaimaTiguint/reading-stats",
        title: "Reading Stats",
        img: 'pictures/stats.jpg',
        desc: 'This is a project that shows the books I read each year (starting from 2020) and some statistics about how my reading went.',        tech: "HTML | CSS | Javascript | React | Chart.js | Material UI"
    },
    { 
        link: "https://tattoo-artist.netlify.app/",
        code: "https://github.com/OumaimaTiguint/tattoo-artist",
        title: "Tattoo Artist",
        img: 'pictures/tattoo.jpg',
        desc: 'This is a project to showcase the work of a fake tattoo artist.',        
        tech: "Angular"
    },
    { 
        link: "https://e-lear.netlify.app/",
        code: "https://github.com/OumaimaTiguint/Elear",
        title: "Language Learning",
        img: 'pictures/elear.jpg',
        desc: 'This is a landing page for a fake language learning website.',        
        tech: "Angular"
    },
    ]
    render() {
        const { t } = this.props;
        return (
            <div className="projects">
                <h2 className="title">{t('Projects')}</h2>
                <hr/>
                <div className="cards">
                { 
                    this.projects.map((project, key) => 
                    <div className="flip-card" key={key}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={project.img} alt={project.title} style={{width:'300px',height:'300px'}}/>
                            </div>
                            <div className="flip-card-back">
                                <h1>{project.title}</h1> 
                                <p><strong>{project.tech}</strong></p> 
                                <p>{project.desc}</p>
                                <div className="btns">
                                    <a rel="noopener noreferrer" href={project.link} target="_blank">Demo</a>
                                    <a rel="noopener noreferrer" href={project.code} target="_blank">Code</a>
                                </div>
                            </div>
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