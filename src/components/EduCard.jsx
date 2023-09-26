import React from 'react';

const EduCard = ({id, startYear, endYear, degree, school, image}) => {
    return (
        <div key={id} className="bg-gray-100 rounded-lg shadow-md p-4 flex items-center m-2 w-4/5 mx-auto hover:bg-pink-200 hover:scale-110">
            <img src={image} alt={school} className="w-8 h-8 mr-4" />
            <div>
                <p className="text-gray-700 text-sm mb-2">{startYear}-{endYear}</p>
                <p className="text-black font-semibold text-lg mb-2">{degree}</p>
                <p className="text-gray-700 text-sm">{school}</p>
            </div>
        </div>
    );
};

export default EduCard;
