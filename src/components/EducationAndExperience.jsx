import React from 'react';
import EduCard from './EduCard';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';

function EducationAndExperience() {
    return (
        <div className='mx-auto flex flex-col md:flex-row'>
            {/* Experience Section */}
            <div className='w-full md:w-1/2 p-4 md:p-8'>
                <h1 className='text-violet-400 text-4xl font-bold text-center font-primary mb-8'>Experience</h1>
                <div className="w-full flex flex-col items-center md:items-end justify-center" id="experience">
                    {experienceData.map((exp) => (
                        <EduCard
                            key={exp.id}
                            id={exp.id}
                            startYear={exp.startYear}
                            endYear={exp.endYear}
                            degree={exp.jobtitle}
                            school={exp.company}
                            image={exp.image}
                        />
                    ))}
                </div>
            </div>

            {/* Education Section */}
            <div className='w-full md:w-1/2 p-4 md:p-8'>
                <h1 className='text-violet-400 text-4xl font-bold text-center font-primary mb-8'>Education</h1>
                <div className="w-full flex flex-col items-center md:items-end justify-center" id="education">
                    {educationData.map((ed) => (
                        <EduCard
                            key={ed.id}
                            id={ed.id}
                            startYear={ed.startYear}
                            endYear={ed.endYear}
                            degree={ed.course}
                            school={ed.institution}
                            image={ed.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EducationAndExperience;
