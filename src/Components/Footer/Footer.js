import React from 'react';

const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className='bg-dark text-white align-items-center' style={{ height: '100px' }}>
            <p className='App'>All Credit or copyright © deserve by Shuvo {year}</p>
        </div>
    );
};

export default Footer;