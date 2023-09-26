import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = window.scrollY;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return (
        <div className={`fixed bottom-6 right-6 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={scrollToTop}
                    aria-label='Back to top'
                    className='p-4 rounded-full focus:outline-none'>
                <IoIosArrowDropupCircle className='text-3xl' />
            </button>
        </div>
    );
}

export default BackToTop;
