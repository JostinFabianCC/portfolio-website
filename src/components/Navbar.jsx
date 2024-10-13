import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const {t} = useTranslation();

    return (
        <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
            <ul className="flex space-x-6">
                <li><a href="#about" className="hover:text-blue-400">{t('navbar.about')}</a></li>
                <li><a href="#projects" className="hover:text-blue-400">{t('navbar.projects')}</a></li>
                <li><a href="#experience" className="hover:text-blue-400">{t('navbar.experience')}</a></li>
            </ul>
            <LanguageSwitcher/>
        </nav>
    );
};

export default Navbar;