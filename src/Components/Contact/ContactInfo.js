import React from 'react';

const ContactInfo = () => {
    return (
        <div className=' text-center mx-auto text-white border' style={{
            height: '500px', width: '1340px',
            backgroundImage: `url('https://media.istockphoto.com/photos/dark-texture-background-of-black-fabric-picture-id185005145?b=1&k=20&m=185005145&s=170667a&w=0&h=beCS8mYpHIM4b3EnKxMToYC-xDcvNGFEYD5jMwjTWGY=')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className='my-5'>
                <h3>Name : <span className='text-warning'>Shabbir Ahmed Shuvo</span></h3>
                <h4>Qualification : <span className='text-warning'>Diploma In Computer Science</span></h4>
                <h4>Institution : <span className='text-warning'>Mymensingh Polytechnic Institute</span></h4>
                <p>Language : <strong className='text-warning'>Bangla And English</strong></p>
                <div className='App p-2' style={{ color: 'red' }}>
                    <a style={{ color: '#FFFFFF' }} href="https://www.facebook.com/shuvo006Shabbir"><i className="fa fa-facebook fa-lg px-2" aria-hidden="true"></i></a>
                    <a style={{ color: '#FFFFFF' }} href="https://www.instagram.com/dreamless_boy_shuvo/"><i className="fa fa-instagram fa-lg px-2"></i></a>
                    <a style={{ color: '#FFFFFF' }} href="https://www.linkedin.com/in/shabbir-ahmed-shuvo/?locale=en_US"><i className="fa fa-linkedin fa-lg px-2"></i></a>
                    <a style={{ color: '#FFFFFF' }} href="https://github.com/shabbirahmedshuvo01"><i className="fa fa-github fa-lg"></i></a>
                    <a style={{ color: '#FFFFFF' }} href="/addData"><span className='px-2'>.</span></a>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;