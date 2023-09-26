import React from 'react';
import { aboutData } from '../data/aboutData';

function About() {
    return (
        <div className='relative' id="about">
            <div className="hidden md:block line-styling absolute top-8 left-1/2 transform -translate-x-1/2 h-8 w-11/12 md:w-4/5">
                <div className='style-line w-full h-1 rounded-md bg-violet-200'></div>
            </div>
            <div className="mx-auto sm:max-w-screen-sm md:max-w-screen-md flex flex-col md:flex-row items-center justify-center md:py-16">
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className='text-violet-400 text-4xl font-bold mb-10'>{aboutData.title}</h2>
                    <p className='opacity-80 text-1.25xl'>
                        {aboutData.description1}<br /><br />{aboutData.description2}
                    </p>
                </div>
                <div className="about-img hidden md:block md:w-1/2 mt-8 md:mt-0">
                    <img src={aboutData.image}
                         alt=""
                         className="w-60 md:w-96 rounded-lg"/>
                </div>
            </div>
        </div>
    );
}

export default About;
