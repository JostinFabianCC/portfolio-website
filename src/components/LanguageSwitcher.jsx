import React from 'react';
import {useTranslation} from 'react-i18next';

const LANGUAGES = [
    {code: 'en', labelKey: 'language.english', colorClass: 'bg-blue-500 hover:bg-blue-600'},
    {code: 'es', labelKey: 'language.spanish', colorClass: 'bg-green-500 hover:bg-green-600'},
    {code: 'ca', labelKey: 'language.catalan', colorClass: 'bg-red-500 hover:bg-red-600'}
];

const LanguageButton = ({code, label, colorClass, onClick}) => (
    <button
        onClick={() => onClick(code)}
        className={`px-4 py-2 text-white rounded transition-colors ${colorClass}`}
    >
        {label}
    </button>
);

const LanguageSwitcher = () => {
    const {t, i18n} = useTranslation();

    const handleChangeLanguage = (languageCode) => {
        i18n.changeLanguage(languageCode);
    };

    return (
        <div className="flex space-x-4 mt-4">
            {LANGUAGES.map((lang) => (
                <LanguageButton
                    key={lang.code}
                    code={lang.code}
                    label={t(lang.labelKey)}
                    colorClass={lang.colorClass}
                    onClick={handleChangeLanguage}
                />
            ))}
        </div>
    );
};

export default LanguageSwitcher;
