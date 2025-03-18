import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs
            .sendForm("service_aw8dcfm", "template_od2ekb8", event.target, "4rjlS9y1cer7zxOdj")
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Mail Sent Successfully!");

                    // Clear the form after sending the email
                    setFormData({ name: "", subject: "", email: "", description: "", reply_to: "" });
                },
                (error) => {
                    console.error(error.text);
                    alert("Error sending mail. Please try again.");
                }
            );

        // Reset the form fields manually (in case of not using controlled components)
        event.target.reset();
    };



    return (
        <div
            className="container mt-5 p-4 rounded shadow-lg"
            style={{
                maxWidth: "600px",
                backgroundImage: `url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <h2 className="text-center text-dark">Contact Me</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="name">Your Name</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-floating mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        value={formData.description}
                        onChange={handleChange}
                        style={{ height: "120px" }}
                        required
                    />
                    <label htmlFor="description">Message</label>
                </div>

                {/* New reply_to field */}
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        name="reply_to"  // This will correspond to the Reply-To field in the template
                        className="form-control"
                        placeholder="Your Email"
                        value={formData.reply_to}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="reply_to">Your Email (Reply-To)</label>
                </div>

                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Send Mail
                    </button>
                </div>
            </form>

        </div>
    );
};

export default Contact;