// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher.jsx';

const App = () => {
    const {t} = useTranslation();

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <LanguageSwitcher/>
        </div>
    );
};

export default App;
