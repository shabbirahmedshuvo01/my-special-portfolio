import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url('https://i.pinimg.com/550x/94/fb/9e/94fb9e94f0db7e3d429df2d9c64527d2.jpg')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        }}>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <br />
            <Contact></Contact>
            <br />
        </div >
    );
};

export default Home;