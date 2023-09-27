import React from 'react';
import { headerData } from '../data/headerData';
import { socialsData } from '../data/socialsData';
import Button from './Button';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Landing() {
    return (
        <div className='h-[90vh] items-center justify-center' id="home">
            <div className='flex items-center justify-center h-full relative'>
                <div className='flex-2 h-1/2 my-auto flex md:flex-col flex-row items-end justify-center'>
                    <div className='hidden md:block content-center justify-center items-center'>
                        <img src={headerData.image} 
                             alt="" 
                             className='absolute w-64 h-64 object-cover rounded-full z-10 border-4 border-violet-300' />
                        {/* Fading Circles */}
                        <div className='absolute w-70 h-70 rounded-full bg-pink-300 opacity-50 animate-fading-circles'></div>
                        <div className='absolute w-96 h-96 rounded-full bg-pink-300 opacity-30 animate-fading-circles'></div>
                        <div className='absolute w-112 h-112 rounded-full bg-pink-300 opacity-10 animate-fading-circles'></div>
                    </div>
                    <div className='hidden md:flex flex-initial h-full items-end justify-start'>
                        <div className="lcl-content m-6 w-full flex items-center justify-start">
                            {socialsData.linkedIn && (
                                <a href={socialsData.linkedIn} target="_blank" rel="noreferrer">
                                    <FaLinkedin className='landing-social text-3xl mx-4 transform transition-transform hover:scale-125' aria-label="LinkedIn" />
                                </a>
                            )}
                            {socialsData.github && (
                                <a href={socialsData.github} target="_blank" rel="noreferrer">
                                    <FaGithub className='landing-social text-3xl mx-4 transform transition-transform hover:scale-125' aria-label="GitHub" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
                
                <div className='flex-2 h-full flex flex-col items-end justify-center'>
                    <div className='lcr-content w-full md:w-1/2'>
                        <h6 className="font-medium text-2xl mb-3 opacity-80 font-cutiveMono">
                            {headerData.title}
                        </h6>
                        <h1 className="font-extrabold text-6xl leading-110% text-violet-300 font-headlandOne">
                            {headerData.name}
                        </h1>
                        <p className="mt-4 font-medium text-xl opacity-70 font-cutive">
                            {headerData.desciption}
                        </p>
                        <div className="mt-5 block md:hidden">
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf}
                                   download="resume"
                                   target="_blank"
                                   rel="noreferrer">
                                    <Button>Download CV</Button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;