import React from 'react';

const Projects = ({ project }) => {
    const { id, name, description, link } = project;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div class="card text-bg-light mb-3" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{description}</p>
                    <a href={link} className='btn btn-primary btn-lg'>Live site</a>
                </div>
            </div>
        </div >
    );
};

export default Projects;