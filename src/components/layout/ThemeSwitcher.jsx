import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSun, faMoon} from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors duration-300"
            aria-label="Toggle Dark Mode"
        >
            {isDarkMode ? (
                <FontAwesomeIcon icon={faSun} className="text-yellow-500 w-6 h-6"/>
            ) : (
                <FontAwesomeIcon icon={faMoon} className="text-blue-500 w-6 h-6"/>
            )}
        </button>
    );
};

export default ThemeSwitcher;