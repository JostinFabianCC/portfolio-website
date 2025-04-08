import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons';

const LANGUAGES = [
    { code: 'en', labelKey: 'language.english', icon: faGlobe },
    { code: 'es', labelKey: 'language.spanish', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg' },
    { code: 'ca', labelKey: 'language.catalan', iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg' }
];

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen((prevState) => !prevState);

    const closeDropdown = () => setIsOpen(false);

    const changeLanguage = (code) => {
        i18n.changeLanguage(code);
        setIsOpen(false);
    };

    const currentLanguage = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0];

    // Close dropdown if click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                {currentLanguage.icon ? (
                    <FontAwesomeIcon icon={currentLanguage.icon} className="w-5 h-5 mr-2" aria-hidden="true" />
                ) : (
                    <img src={currentLanguage.iconSrc} alt={`${t(currentLanguage.labelKey)} flag`} className="w-5 h-5 mr-2" />
                )}
                <span className="hidden md:inline">{t(currentLanguage.labelKey)}</span>
                <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-56 bg-white rounded-md shadow-lg z-10 animate-fadeIn">
                    <ul className="py-1">
                        {LANGUAGES.map((lang) => (
                            <li key={lang.code}>
                                <button
                                    onClick={() => changeLanguage(lang.code)}
                                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                                    aria-label={`Switch to ${t(lang.labelKey)}`}
                                >
                                    {lang.icon ? (
                                        <FontAwesomeIcon icon={lang.icon} className="w-5 h-5 mr-2" aria-hidden="true" />
                                    ) : (
                                        <img src={lang.iconSrc} alt={`${t(lang.labelKey)} flag`} className="w-5 h-5 mr-2" />
                                    )}
                                    <span>{t(lang.labelKey)}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
