import React from 'react';
import {useTranslation} from 'react-i18next';

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };


    return (
        <div className="flex space-x-4 mt-4">
            <button
                onClick={() => changeLanguage('en')}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                English
            </button>
            <button
                onClick={() => changeLanguage('es')}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
                Español
            </button>
            <button
                onClick={() => changeLanguage('ca')}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
                Català
            </button>
        </div>
    );
};

export default LanguageSwitcher;
