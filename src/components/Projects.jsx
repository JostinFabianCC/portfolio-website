// src/components/Projects.jsx
import React from 'react';
import {loadImage} from '../utils/loadImage';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const projects = [
        {
            id: 1,
            image: loadImage('../assets/images/projects/project-1.png'),
            title: 'Project 1',
            description: 'Description of project 1...'
        },
        {
            id: 2,
            image: loadImage('../assets/images/projects/project-2.png'),
            title: 'Project 2',
            description: 'Description of project 2...'
        }
    ];

    return (
        <section id="projects" className="py-16 bg-gray-50 text-center">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        imageSrc={project.image}
                        title={project.title}
                        description={project.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;
