import React from 'react';
import {useTranslation} from 'react-i18next';

const Header = () => {
    const {t} = useTranslation();

    return (
        <header className="relative w-full h-96 bg-gray-100">
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                    src="https://placehold.co/1600x400"
                    alt={t('header.imageAlt')}
                    className="w-full h-full object-cover"
                />
            </div>
            <div
                className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
                <h1 className="text-5xl font-bold mb-4">{t('header.greeting')}</h1>
                <p className="text-xl">{t('header.description')}</p>
            </div>
        </header>
    );
};

export default Header;