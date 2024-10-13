import React, { useState } from 'react';
import useFormValidation from '../../hooks/useFormValidation';
import submitForm from '../../utils/submitForm';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    // Hook personalizado para manejar el estado del formulario y la validación
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

    const [formStatus, setFormStatus] = useState(null); // 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        try {
            await submitForm(formData);
            setFormStatus('success');
            setFormErrors({});
            setFormData({ name: '', email: '', message: '' }); // Reset form
        } catch (error) {
            setFormStatus('error');
        }
    };

    return (
        <section className="py-12 px-4 bg-gray-100 text-gray-900">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">{t('contact.heading')}</h2>
                <p className="mb-8">{t('contact.description')}</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.form.name')}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        {formErrors.name && <p className="text-red-500 mt-1">{formErrors.name}</p>}
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.form.email')}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                        {formErrors.email && <p className="text-red-500 mt-1">{formErrors.email}</p>}
                    </div>
                    <div>
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
                required
            />
                        {formErrors.message && <p className="text-red-500 mt-1">{formErrors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        {t('contact.form.submit')}
                    </button>
                </form>

                {formStatus === 'success' && (
                    <p className="mt-4 text-green-500">{t('contact.successMessage')}</p>
                )}
                {formStatus === 'error' && (
                    <p className="mt-4 text-red-500">{t('contact.errorMessage')}</p>
                )}
            </div>
        </section>
    );
};

export default Contact;