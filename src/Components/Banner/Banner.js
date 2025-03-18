import React from 'react';
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';
import './Banner.css';
import shuvo from '../../images/banner/shuvo.jpg';
import resume from '../../images/pdf/my-resume-v3.pdf';

const Banner = () => {
    return (
        <div
            className="text-white py-5"
            style={{
                backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Section */}
                    <Slide left>
                        <div className="col-lg-6 text-center text-lg-start mb-4">
                            <h2 className="fw-bold">Shabbir Ahmed Shuvo</h2>
                            <p className="mt-3 mx-auto">
                                I am a web developer specializing in JavaScript with experience in React.js, Node.js, and MongoDB.
                                I build websites and web applications with modern technologies. Check out my work or get in touch!
                            </p>

                            <RubberBand>
                                <a href={resume} className="btn btn-primary btn-lg mt-3" download>
                                    Download Resume
                                </a>
                            </RubberBand>
                        </div>
                    </Slide>

                    {/* Image Section */}
                    <Slide right>
                        <div className="col-lg-6 text-center">
                            <img src={shuvo} alt="Shabbir Ahmed Shuvo" className="img-fluid rounded-circle shadow-lg" width="300" />
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Banner;
