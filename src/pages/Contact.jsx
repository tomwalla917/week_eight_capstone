import { useState } from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    const [formData, setFormData] = useState({
        contactName: '',
        contactEmail: '',
        contactSubject: '',
        contactMessage: ''
    });
    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    //email verif fx
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));

        // Clear error when user starts typing
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
    };
    //validate form data
    const validateForm = () => {
        const newErrors = {};
        if (!formData.contactName.trim()) {
            newErrors.contactName = 'name is required';
        }
        if (!formData.contactEmail.trim()) {
            newErrors.contactEmail = 'email is required';
        }
        else if (!validateEmail(formData.contactEmail)) {
            newErrors.contactEmail = 'enter a valid email';
        }
        if (!formData.contactSubject.trim()) {
            newErrors.contactSubject = 'subject is required';
        }
        if (!formData.contactMessage.trim()) {
            newErrors.contactMessage = 'message is required';
        }

        return newErrors;
    };

    //handl submissions
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // submit data if valid form
        console.log('Form submitted:', formData);
        setSubmitStatus('success');

        // Clear form
        setFormData({
            contactName: '',
            contactEmail: '',
            contactSubject: '',
            contactMessage: ''
        });

        // Reset success message after 3 seconds
        setTimeout(() => setSubmitStatus(''), 3000);
    };

    return (
        <div className="page">

            <div className="page-content">
                <div className="container">
                    <div className="row mt-5">

                        <div className="col-md-5">
                            <h4>Get in touch with me</h4>

                            <div className="col-md-12">
                                {submitStatus === 'success' && (
                                    <div className="alert alert-success" role="alert">
                                        Message sent </div>
                                )}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group mb-3">
                                    <label htmlFor="contactName" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.contactName ? 'is-invalid' : ''}`}
                                        id="contactName"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    {errors.contactName && (
                                        <div className="invalid-feedback">
                                            {errors.contactName}
                                        </div>
                                    )}
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="contactEmail" className="form-label">Your email address:</label>
                                    <input
                                        type="email"
                                        className={`form-control ${errors.contactEmail ? 'is-invalid' : ''}`}
                                        id="contactEmail"
                                        value={formData.email}
                                        onChange={handleChange}
                                        aria-describedby="emailHelp"
                                    />
                                    {errors.contactEmail && (
                                        <div className="invalid-feedback">
                                            {errors.contactEmail}
                                        </div>
                                    )}
                                </div>
                                {/*  put subject message here */}
                                <div className="form-group mb-3">
                                    <label htmlFor="contactSubject" className="form-label">Subject:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${errors.contactSubject ? 'is-invalid' : ''}`}
                                        id="contactSubject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                    {errors.contactSubject && (
                                        <div className="invalid-feedback">
                                            {errors.contactSubject}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="message" className="form-label">Message:</label>
                                    <textarea
                                        className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                        id="contactMessage"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                    ></textarea>
                                    {errors.message && (
                                        <div className="invalid-feedback">
                                            {errors.message}
                                        </div>
                                    )}
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col-md-7">
                            <h4>My resume</h4>
                            <div className="resumeBox">
                                <h6>Thomas Wallace</h6>
                                <p>Full stack software developer</p>
                                <div className="resumeContact">
                                    <p>✉️ email@gmail.com</p>
                                    <p>📞 888-888-8888</p>
                                    <p>https://github.com/tomwalla917</p>
                                </div>
                                <p className="resumeHeader">Skills</p>
                                <div className="resumeContact">
                                    <p>C#</p>
                                    <p>HTML</p>
                                    <p>CSS</p>
                                    <p>JavaScript</p>
                                    <p>SQL</p>
                                    <p>React</p>
                                    <p>TypeScript</p>
                                </div>
                                <p className="resumeHeader">Experience</p>
                                <div class="resumeExp">
                                    <div className="jobEntry">
                                        <p>Job history 1</p>
                                        <p>role and functions</p>
                                    </div>
                                </div>
                                <div class="resumeExp">
                                    <div className="jobEntry">
                                        <p>Job history 2</p>
                                        <p>role and functions</p>
                                    </div>
                                </div>
                                <div class="resumeExp">
                                    <div className="jobEntry">
                                        <p>Job history 3</p>
                                        <p>role and functions</p>
                                    </div>
                                </div>

                                <p className="resumeHeader">Education</p>
                                <p>Education content</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact