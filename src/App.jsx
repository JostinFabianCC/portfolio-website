// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

const App = () => {
    const {t} = useTranslation();

    return (<div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600">{t('welcome')}</h1>
            <div className="mt-6">
                <LanguageSwitcher/>
            </div>
        </div>);
};

export default App;
