import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';
import ThemeSwitcher from './ThemeSwitcher.jsx';

const NAV_LINKS = [
    {href: '#about', labelKey: 'navbar.about'},
    {href: '#projects', labelKey: 'navbar.projects'},
    {href: '#experience', labelKey: 'navbar.experience'},
    {href: '#contact', labelKey: 'navbar.contact'}
];

const NavLink = ({href, label}) => (
    <a
        href={href}
        className="hover:text-blue-400 transition-colors duration-300"
        aria-label={label}
    >
        {label}
    </a>
);

const NavigationLinks = () => {
    const {t} = useTranslation();
    return (
        <ul className="hidden md:flex space-x-6">
            {NAV_LINKS.map((link) => (
                <li key={link.href}>
                    <NavLink href={link.href} label={t(link.labelKey)}/>
                </li>
            ))}
        </ul>
    );
};

const Navbar = () => {
    const {t} = useTranslation();

    return (
        <nav
            className="sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-900 dark:bg-gray-800 text-white shadow-lg"
            aria-label={t('navbar.navigation')}
        >
            <NavigationLinks/>

            <div className="flex items-center space-x-4">
                <ThemeSwitcher/>
                <LanguageSwitcher/>
                <HamburgerMenu/>
            </div>
        </nav>
    );
};

export default Navbar;
