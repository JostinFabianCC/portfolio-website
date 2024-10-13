import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const {t} = useTranslation();

    return (
        <nav
            className="sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-900 text-white shadow-lg"
            aria-label={t('navbar.navigation')} // Accesibilidad
        >
            <ul className="flex space-x-6">
                <li>
                    <a
                        href="#about"
                        className="hover:text-blue-400 transition-colors duration-300"
                        aria-label={t('navbar.about')}
                    >
                        {t('navbar.about')}
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="hover:text-blue-400 transition-colors duration-300"
                        aria-label={t('navbar.projects')}
                    >
                        {t('navbar.projects')}
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        className="hover:text-blue-400 transition-colors duration-300"
                        aria-label={t('navbar.experience')}
                    >
                        {t('navbar.experience')}
                    </a>
                </li>
                <li>
                    <a
                        href="#contact"
                        className="hover:text-blue-400 transition-colors duration-300"
                        aria-label={t('navbar.contact')}
                    >
                        {t('navbar.contact')}
                    </a>
                </li>
            </ul>
            <LanguageSwitcher/>
        </nav>
    );
};

export default Navbar;
