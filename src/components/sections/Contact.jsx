import React, {useState} from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import submitForm from '../../utils/submitForm';
import {useTranslation} from 'react-i18next';

const Contact = () => {
    const {t} = useTranslation();

    const {
        formData,
        formErrors,
        handleChange,
        validateForm,
        setFormErrors,
        setFormData,
    } = useFormValidation({
        name: '',
        email: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setIsSubmitting(true);

        try {
            await submitForm(formData);
            setFormStatus('success');
            setFormErrors({});
            setFormData({name: '', email: '', message: ''});
        } catch (error) {
            setFormStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-12 px-4 bg-gray-100 text-gray-900">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{t('contact.heading')}</h2>
                <p className="mb-8">{t('contact.description')}</p>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="text-left">
                        <label htmlFor="name" className="block mb-1 font-medium">
                            {t('contact.form.name')}
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.form.name')}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.name ? 'border-red-500' : ''}`}
                            aria-invalid={formErrors.name ? 'true' : 'false'}
                            aria-describedby={formErrors.name ? 'name-error' : null}
                        />
                        {formErrors.name && (
                            <p id="name-error" className="text-red-500 mt-1" role="alert">
                                {formErrors.name}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label htmlFor="email" className="block mb-1 font-medium">
                            {t('contact.form.email')}
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.form.email')}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.email ? 'border-red-500' : ''}`}
                            aria-invalid={formErrors.email ? 'true' : 'false'}
                            aria-describedby={formErrors.email ? 'email-error' : null}
                        />
                        {formErrors.email && (
                            <p id="email-error" className="text-red-500 mt-1" role="alert">
                                {formErrors.email}
                            </p>
                        )}
                    </div>

                    <div className="text-left">
                        <label htmlFor="message" className="block mb-1 font-medium">
                            {t('contact.form.message')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t('contact.form.message')}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${formErrors.message ? 'border-red-500' : ''}`}
                            rows="5"
                            aria-invalid={formErrors.message ? 'true' : 'false'}
                            aria-describedby={formErrors.message ? 'message-error' : null}
                        />
                        {formErrors.message && (
                            <p id="message-error" className="text-red-500 mt-1" role="alert">
                                {formErrors.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={`w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        aria-label={t('contact.form.submit')}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                    </button>
                </form>

                {formStatus === 'success' && (
                    <p className="mt-4 text-green-500" role="status">
                        {t('contact.successMessage')}
                    </p>
                )}
                {formStatus === 'error' && (
                    <p className="mt-4 text-red-500" role="alert">
                        {t('contact.errorMessage')}
                    </p>
                )}
            </div>
        </section>
    );
};

export default Contact;
