import React, { useState } from 'react';
import Button from './Button';
import { headerData } from '../data/headerData';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <nav className="p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-pink-300 text-2xl font-bold">Portfolio</div>
                    <button className="md:hidden text-gray-700 hover:text-gray-900" onClick={toggleNavVisibility}>
                        {isNavVisible ? (
                            <svg className="w-6 h-6"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        ) : (
                            <svg className="w-6 h-6"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        )}
                    </button>
                    <ul className={`${isNavVisible ? 'absolute top-12 left-0 w-full flex flex-col items-center justify-center bg-gray-5 py-1-5 px-1 border rounded' 
                    : 'hidden md:flex space-x-4 md:space-x-6'}`}>
                        <li>
                            <Link smooth to='/#home' className="hover:text-gray-700">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link smooth to='/#about' className="hover:text-gray-700">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="/#skills" className="hover:text-gray-700">
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="/#experience" className="hover:text-gray-700">
                                Experience
                            </Link>
                        </li>
                        <li>
                            <Link smooth to="/#education" className="hover:text-gray-700">
                                Education
                            </Link>
                        </li>
                        {/*
                        <li>
                            <Link to="/projects" className="hover:text-gray-700"> 
                                Projects
                            </Link>
                        </li>
                        */}
                        
                        <li>
                            <Link smooth to="/#contact" className="hover:text-gray-700"> 
                                Contact
                            </Link>
                        </li>
                        <div className="hidden md:block">
                            {headerData.resumePdf && (
                                <a href={headerData.resumePdf}
                                   download="resume"
                                   target="_blank"
                                   rel="noreferrer">
                                    <Button>Download CV</Button>
                                </a>
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

