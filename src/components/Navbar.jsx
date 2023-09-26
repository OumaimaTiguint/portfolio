import React, { useState } from 'react';
import Button from './Button';
import { headerData } from '../data/headerData';

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
                    <button
                        className="md:hidden text-gray-700 hover:text-gray-900"
                        onClick={toggleNavVisibility}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <ul
                        className={`${
                            isNavVisible ? 'block' : 'hidden'
                        } md:flex space-x-4 md:space-x-6`}
                    >
                        <li>
                            <a href="/#home" className="hover:text-gray-700">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/#about" className="hover:text-gray-700">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/#skills" className="hover:text-gray-700">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#experience"
                                className="hover:text-gray-700"
                            >
                                Experience
                            </a>
                        </li>
                        <li>
                            <a
                                href="/#education"
                                className="hover:text-gray-700"
                            >
                                Education
                            </a>
                        </li>
                        {/*
                        <li>
                            <a href="#" className="hover:text-gray-700">
                                Projects
                            </a>
                        </li>
                        */}
                        
                        <li>
                            <a
                                href="/#contact"
                                className="hover:text-gray-700"
                            >
                                Contact
                            </a>
                        </li>
                        {headerData.resumePdf && (
                            <a
                                href={headerData.resumePdf}
                                download="resume"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button>Download CV</Button>
                            </a>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
