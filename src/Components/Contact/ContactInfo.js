import React from 'react';

const ContactInfo = () => {
    return (
        <div className="container text-center text-white border p-4 rounded bg-dark">
            <div className="my-4">
                <h3 className="fw-bold">
                    Name: <span className="text-warning">Shabbir Ahmed Shuvo</span>
                </h3>
                <h4>
                    Qualification: <span className="text-warning">Diploma in Computer Science and Technology</span>
                </h4>
                <h4>
                    Ongoing: <span className="text-warning">Preparing for BSc in CSE at Dhaka International University</span>
                </h4>
                <h4>
                    Institution: <span className="text-warning">Mymensingh Polytechnic Institute</span>
                </h4>
                <p className="fs-5">
                    Languages: <strong className="text-warning">Bangla & English</strong>
                </p>

                {/* Social Media Links */}
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="https://www.facebook.com/shuvo006Shabbir" target="_blank" rel="noopener noreferrer"
                        className="text-white fs-3 hover-fb">
                        <i className="fa fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/dreamless_boy_shuvo/" target="_blank" rel="noopener noreferrer"
                        className="text-white fs-3 hover-insta">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shabbir-ahmed-shuvo/?locale=en_US" target="_blank" rel="noopener noreferrer"
                        className="text-white fs-3 hover-linkedin">
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/shabbirahmedshuvo01" target="_blank" rel="noopener noreferrer"
                        className="text-white fs-3 hover-github">
                        <i className="fa fa-github"></i>
                    </a>
                </div>
            </div>

            {/* Custom CSS for Hover Effects */}
            <style>
                {`
                    .hover-fb:hover { color: #1877F2; }
                    .hover-insta:hover { color: #E1306C; }
                    .hover-linkedin:hover { color: #0077B5; }
                    .hover-github:hover { color: #888; }
                `}
            </style>
        </div>
    );
};

export default ContactInfo;
