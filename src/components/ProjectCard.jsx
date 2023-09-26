import React from 'react';

const ProjectCard = ({name, description, image}) => {
    return (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card md:columns-2">
            <img className="w-full h-full object-cover rounded-xl" 
                 src={image} 
                 alt={description} />
            <div className="group-hover:flex flex-col max-h-[94%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
                <div className="flex justify-between items-center gap-2">
                    <div className="flex items-center gap-2">
                        <p className="text-white text-sm">{name}</p>
                    </div>
                </div>
                <p className="text-white text-md overflow-y-auto prompt mt-5">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;