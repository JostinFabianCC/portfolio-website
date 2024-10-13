import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

// Componente para enlaces de redes sociales
const SocialLink = ({href, icon, label}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-white hover:text-blue-400 transition-colors duration-300"
    >
        <FontAwesomeIcon icon={icon} className="h-6 w-6"/>
    </a>
);

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="py-8 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Texto del footer */}
                <div className="text-center">
                    <p className="text-sm md:text-base">{t('footer.text')}</p>
                </div>

                {/* Íconos de redes sociales */}
                <div className="flex justify-center space-x-6 mt-6">
                    <SocialLink
                        href="https://github.com"
                        icon={faGithub}
                        label="GitHub"
                    />
                    <SocialLink
                        href="https://linkedin.com"
                        icon={faLinkedin}
                        label="LinkedIn"
                    />
                </div>

                {/* Cambiador de idioma */}
                <div className="mt-6 flex justify-center">
                    <LanguageSwitcher/>
                </div>

                {/* Derechos de autor */}
                <div className="mt-8 text-center text-sm opacity-75">
                    <p>&copy; {new Date().getFullYear()} Your Name. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
