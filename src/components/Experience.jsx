// src/components/Experience.jsx
import React from 'react';
import {useTranslation} from 'react-i18next';

const Experience = () => {
    const {t} = useTranslation();

    const experiences = t('experience.list', {returnObjects: true});

    return (
        <section id="experience" className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-8">{t('experience.title')}</h2>
            <div className="max-w-6xl mx-auto">
                {experiences.map((exp, index) => (
                    <div key={index} className="bg-white shadow-lg p-6 mb-8 rounded-lg">
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                        <p className="text-lg text-blue-600">{exp.role}</p>
                        <p className="text-gray-500">{exp.date}</p>
                        <p className="mt-4 text-gray-600">{exp.description}</p>
                        <h4 className="mt-6 text-lg font-semibold">{t('experienceDetail.responsibilities')}</h4>
                        <p className="text-gray-600">{exp.responsibilities}</p>
                        <h4 className="mt-4 text-lg font-semibold">{t('experienceDetail.technologies')}</h4>
                        <p className="text-gray-600">{exp.technologies}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
