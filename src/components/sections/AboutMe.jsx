import React from 'react';
import {useTranslation} from 'react-i18next';

const AboutMe = () => {
    const {t} = useTranslation();

    return (
        <section id="about" className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t('about.description')}</p>
        </section>
    );
};

export default AboutMe;
