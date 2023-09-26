import React from 'react';
import Marquee from 'react-fast-marquee';
import { skillsData } from '../data/skillsData';
import { skillsImage } from '../utils/skillsImage';

function Skills() {
    return (
        <div className='skills flex flex-col items-center justify-start min-h-60vh p-2.5 md:p-2' id="skills">
            <div className='skillsHeader flex items-center justify-center'>
                <h1 className='text-violet-400 text-4xl font-bold text-center'>Skills</h1>
            </div>
            <div className='skillsContainer flex items-center justify-center w-full mt-5 p-2 md:p-1.5'>
                <div className='skill--scroll w-full mx-2 md:mx-0'>
                    <Marquee gradient={true}
                             speed={80}
                             pauseOnHover={true}
                             pauseOnClick={true}
                             delay={0}
                             play={true}
                             direction="left">
                        {skillsData.map((skill, id) => (
                            <div className='bg-gray-100 shadow-md rounded-lg w-32 h-32 m-1.5 flex flex-col items-center justify-center p-2 transition-transform duration-300 ease-in-out hover:scale-115'
                                 key={id}>
                                <img src={skillsImage(skill)}
                                     alt={skill}
                                     className='h-24 w-24 pointer-events-none'/>
                                <h3 className='font-BigShouldersText font-medium text-22px text-center mt-1'>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
}

export default Skills;

