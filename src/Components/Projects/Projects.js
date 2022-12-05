import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = ({ project }) => {
    const { _id, name, description, link, img } = project;

    const navigate = useNavigate();
    const navigateToDetails = id => {
        navigate(`porject/${id}`);
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "16rem", height: "25rem" }}>
                <img className="card-img-top" src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className='btn-group'>
                    <a href={link} className="btn btn-primary btn-sm" >Live site</a>
                    <button onClick={() => navigateToDetails(_id)} className="btn btn-success btn-sm">Explore More</button>
                </div>
            </div>
        </div >
    );
};

export default Projects;