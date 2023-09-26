import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="bg-pink-200 border border-black shadow-md py-2 px-4 rounded-lg hover:bg-pink-300 hover:border-pink-500 hover:shadow-lg focus:outline-none focus:border-pink-500 focus:ring focus:ring-pink-200">
            {children}
        </button>
    );
};

export default Button;
