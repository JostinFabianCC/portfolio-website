const submitForm = (formData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (formData.name && formData.email && formData.message) {
                console.log('Form data submitted:', formData);
                resolve('success');
            } else {
                reject('error');
            }
        }, 1000);
    });
};

export default submitForm;
