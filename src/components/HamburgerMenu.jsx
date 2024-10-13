import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const HamburgerMenu = () => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
                aria-label={t('navbar.toggleMenu')}
                aria-expanded={isOpen ? 'true' : 'false'}
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                    />
                </svg>
            </button>

            {isOpen && (
                <div
                    className="absolute top-16 left-0 w-full bg-gray-800 bg-opacity-90 p-6 rounded-b-lg shadow-lg transform transition-transform duration-300 ease-in-out"
                >
                    <ul className="flex flex-col space-y-4 text-center">
                        <li>
                            <a
                                href="#about"
                                className="block text-white hover:text-blue-400 transition-colors duration-300"
                                onClick={closeMenu}
                                aria-label={t('navbar.about')}
                            >
                                {t('navbar.about')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="block text-white hover:text-blue-400 transition-colors duration-300"
                                onClick={closeMenu}
                                aria-label={t('navbar.projects')}
                            >
                                {t('navbar.projects')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#experience"
                                className="block text-white hover:text-blue-400 transition-colors duration-300"
                                onClick={closeMenu}
                                aria-label={t('navbar.experience')}
                            >
                                {t('navbar.experience')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block text-white hover:text-blue-400 transition-colors duration-300"
                                onClick={closeMenu}
                                aria-label={t('navbar.contact')}
                            >
                                {t('navbar.contact')}
                            </a>
                        </li>
                    </ul>

                    <div className="mt-6">
                        <LanguageSwitcher isMobile={true}/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;