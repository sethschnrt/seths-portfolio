import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'email') {
            const validEmail = /\S+@\S+\.\S+/.test(value);
            setErrors({
                ...errors,
                email: !validEmail
            });
        }
    }

    const handleBlur = (event) => {
        const { name, value } = event.target;
        setErrors({
            ...errors,
            [name]: value.trim() === ""
        });
    }

    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form id="contact-form" className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} required />
                    {errors.name && <div className="error-message">Name is required.</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} required />
                    {errors.email && <div className="error-message">Invalid email address.</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} onBlur={handleBlur} required></textarea>
                    {errors.message && <div className="error-message">Message is required.</div>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;