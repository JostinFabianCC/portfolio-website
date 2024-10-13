import {useState} from 'react';
import {useTranslation} from 'react-i18next';

const useFormValidation = (initialState) => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = t('contact.error.name');
        }

        if (!formData.email.trim()) {
            errors.email = t('contact.error.email');
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = t('contact.error.emailFormat');
        }

        if (!formData.message.trim()) {
            errors.message = t('contact.error.message');
        }

        return errors;
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return {
        formData,
        formErrors,
        handleChange,
        validateForm,
        setFormErrors,
        setFormData,
    };
};

export default useFormValidation;
