import React from 'react';
import shuvo from '../../images/banner/shuvo.jpg';

const Banner = () => {
    return (
        <div>
            <div className='d-flex align-items-center p-5 mt-5 bg-success p-2 text-dark bg-opacity-10 justify-content-evenly'>
                <div>
                    <h2>Dr.Freddie Highmore</h2>
                    <br />
                    <p>Let the young know they will never find a more interesting, more instructive book than the patient himself. <br /> True health care reform cannot happen in Washington. It has to happen in our kitchens, <br /> in our homes, in our communities. All health care is personal</p>
                </div>
                <div>
                    <img src={shuvo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;