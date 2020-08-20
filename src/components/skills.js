import React from 'react';
import './skills.css';


class Skills extends React.Component {
    
    skills1 = ['JavaScript', 'Python', 'HTML', 'CSS/SCSS', 'Git', 'TypeScript']
    skills2 = ['React', 'Angular', 'JQuery', 'Node', 'Express', 'Ionic']

    render() {
        return (
            <div className="skills" id="skills">
                <div className="line"></div>
                <h2 className="title">Skills</h2>
                <div className="skill-divs-row1">
                    { 
                        this.skills1.map(skill => 
                        <div className="skill" key={skill}> 
                            <p>{skill}</p>
                        </div>)
                    }
                </div>
                <div className="skill-divs-row2">
                    { 
                        this.skills2.map(skill => 
                        <div className="skill" key={skill}> 
                            <p>{skill}</p>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default Skills;