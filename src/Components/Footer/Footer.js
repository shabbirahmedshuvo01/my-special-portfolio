import React from 'react';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className='bg-dark text-white' style={{ height: '100px' }}>

            <div className='App p-2'>
                <a href="https://www.facebook.com/shuvo006Shabbir"><i className="fa fa-facebook px-2" aria-hidden="true"></i></a>
                <a href="https://www.instagram.com/dreamless_boy_shuvo/"><i className="fa fa-instagram px-2"></i></a>
                <a href="https://www.linkedin.com/in/shabbir-ahmed-shuvo/?locale=en_US"><i className="fa fa-linkedin px-2"></i></a>
                <a href="https://github.com/shabbirahmedshuvo01"><i class="fa fa-github"></i></a>
            </div>

            <p className='App p-3'>All Credit or copyright © deserve by Shuvo {year}</p>
        </div>
    );
};

export default Footer;