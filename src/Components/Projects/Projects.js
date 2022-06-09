import React from 'react';

const Projects = ({ project }) => {
    const { id, name, description, link, img } = project;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <a href={link} className='btn btn-primary btn-lg'>Live site</a>
            </div>
        </div >
    );
};

export default Projects;