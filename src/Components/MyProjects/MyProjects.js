import React, { useEffect, useState } from 'react';
import Projects from '../Projects/Projects';
import Fade from 'react-reveal/Fade';
import pic1 from '../../images/projects/image1 (2).jpg';
import pic2 from '../../images/projects/image2.jpg';
import pic3 from '../../images/projects/image3.jpg';

const MyProjects = () => {

    // const projects = [
    //     { id: 1, name: 'Tools manufacturer', description: "* The project have tools guide  *and add items  * payment system", link: `https://final-project-2bb92.web.app/`, img: pic1 },
    //     { id: 2, name: 'Warehouse', description: "* The book dealers page. *Add items and remove. *authentication added.", link: `https://eleven-assignment-work.web.app/`, img: pic2 },
    //     { id: 3, name: 'Single man Service', description: "* A man service provide here,* Booking System.  * responsive", link: `https://my-dev-project63.web.app/`, img: pic3 },
    // ];

    const [projects, setProjects] = useState([]);


    useEffect(() => {
        fetch('https://shuvo-here-server.onrender.com/project')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    return (
        <div className="container mt-5">
            <Fade top>
                <div className="row text-dark" style={{
                    marginTop: '50px', backgroundImage: `url('https://img.freepik.com/free-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                    <h1 className='text-primary text-center mt-5'> My projects</h1>
                    {
                        projects.map(project => <Projects key={project._id} project={project} ></Projects>)
                    }
                </div>
            </Fade>
        </div>
    );
};

export default MyProjects;