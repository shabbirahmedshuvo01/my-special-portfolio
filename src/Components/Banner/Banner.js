import React from 'react';
import './Banner.css'
import shuvo from '../../images/banner/shuvo.jpg';
import rsm from '../../images/pdf/My Resume.pdf';

const Banner = () => {
    return (
        <div>
            <div className='d-flex align-items-center p-5 mt-5 bg-success p-2 text-dark bg-opacity-10 justify-content-evenly work'>
                <div className='App'>
                    <h2 className='font-weight-bold'>Shabbir Ahmed Shuvo</h2>
                    <p className='mt-3 mx-auto'>I am a web developer . building websites and web applications. I specialize in JavaScript and have professional experience working with reactJs, nodejs and mongodb. I also done some project by reactJs, . Take a look at my work or get in touch</p>
                    <br />
                    <a href={rsm} className='btn btn-primary btn-lg' download={rsm} >Download Resume</a>
                </div>
                <div>
                    <img src={shuvo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;