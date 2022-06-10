import React from 'react';

const ContactInfo = () => {
    return (
        <div className=' text-center mt-5 border' style={{ height: "400px", width: "450px" }}>
            <h3>Name : <span className='text-warning'>Shabbir Ahmed Shuvo</span></h3>
            <h4>Qualification : <span className='text-warning'>Diploma In Computer Science</span></h4>
            <h4>Institution : <span className='text-warning'>Mymensingh Polytechnic Institute</span></h4>
            <p>Language : <strong className='text-warning'>Bangla And English</strong></p>
            <div className='App p-2' style={{ color: 'red' }}>
                <a style={{ color: '#FFFFFF' }} href="https://www.facebook.com/shuvo006Shabbir"><i className="fa fa-facebook fa-lg px-2" aria-hidden="true"></i></a>
                <a style={{ color: '#FFFFFF' }} href="https://www.instagram.com/dreamless_boy_shuvo/"><i className="fa fa-instagram fa-lg px-2"></i></a>
                <a style={{ color: '#FFFFFF' }} href="https://www.linkedin.com/in/shabbir-ahmed-shuvo/?locale=en_US"><i className="fa fa-linkedin fa-lg px-2"></i></a>
                <a style={{ color: '#FFFFFF' }} href="https://github.com/shabbirahmedshuvo01"><i class="fa fa-github fa-lg"></i></a>
            </div>
        </div>
    );
};

export default ContactInfo;