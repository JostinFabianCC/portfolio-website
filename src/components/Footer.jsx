import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="py-8 bg-gray-900 text-white text-center">
            <p>{t('footer.text')}</p>

            <div className="flex justify-center space-x-6 mt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="h-6 w-6 hover:text-blue-400"/>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 hover:text-blue-400"/>
                </a>
            </div>
            <div className="mt-4">
                <LanguageSwitcher/>
            </div>
        </footer>
    );
};

export default Footer;
