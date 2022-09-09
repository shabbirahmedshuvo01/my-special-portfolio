import React from 'react';
import Slide from 'react-reveal/Slide';
import RubberBand from 'react-reveal/RubberBand';
import './Banner.css'
import shuvo from '../../images/banner/shuvo.jpg';
import resume from '../../images/pdf/my-resume.docx (1).pdf';

const Banner = () => {
    return (
        <div style={{
            backgroundImage: `url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <div className='d-flex align-items-center p-5 p-2 text-white justify-content-evenly work'>
                <Slide left>
                    <div className='App'>
                        <h2 className='font-weight-bold'>Shabbir Ahmed Shuvo</h2>
                        <p className='mt-3 mx-auto'>I am a web developer . building websites and web applications. I specialize in JavaScript and have professional experience working with reactJs, nodejs and mongodb. I also done some project by reactJs, . Take a look at my work or get in touch</p>
                        <br />


                        <RubberBand>
                            <a href={resume} className='btn btn-primary btn-lg' download={resume} >Download Resume</a>
                        </RubberBand>
                    </div>
                </Slide>

                <Slide right>
                    <div>
                        <img src={shuvo} alt="" />
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Banner;