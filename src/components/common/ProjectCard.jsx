import React from 'react';

const ProjectCard = ({imageSrc, title, description}) => {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-auto"
                onError={(e) => (e.target.src = 'https://placehold.co/600x400')} // Usa placeholder si hay un error en la carga
            />
            <h3 className="text-xl font-semibold mt-4">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default ProjectCard;
