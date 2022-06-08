import React from 'react';
import Projects from '../Projects/Projects';

const MyProjects = () => {

    const projects = [
        { id: 1, name: 'Tools manufacturer', description: "* The project have tools guide  *and add items  * payment system", link: `https://final-project-2bb92.web.app/` },
        { id: 2, name: 'Warehouse', description: "* The book dealers page. *Add items and remove. *authentication added.", link: `https://eleven-assignment-work.web.app/` },
        { id: 3, name: 'Single man Service', description: "* A man service provide here,* Booking System.  * responsive", link: `https://my-dev-project63.web.app/` },
    ];

    return (
        <div className="container mt-5">
            <div className="row text-dark">
                <h1 className='text-primary text-center mt-5'> My projects</h1>
                {
                    projects.map(project => <Projects key={project.id} project={project} ></Projects>)
                }
            </div>
        </div>
    );
};

export default MyProjects;