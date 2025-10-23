import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className="page">

            <div className="page-content">
                <div className="container">
                    <div class="row mt-5">
                        
                        <div class="col-md-5">
                            <h4>Get in touch with me</h4>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="contactName" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactName"
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="contactEmail" className="form-label">Your email address:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="contactEmail"
                                        aria-describedby="emailHelp"
                                    />
                                </div>
                                {/*  put subject message here */}
                                <div className="form-group mb-3">
                                    <label htmlFor="contactSubject" className="form-label">Subject:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="contactSubject"
                                    />
                                </div>
                                {/*  put full message here */}
                                <div className="form-group mb-3">
                                    <label htmlFor="message" className="form-label">Message:</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div class="col-md-5">
                            <h4>My resume</h4>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact