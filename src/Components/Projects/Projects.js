import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ project }) => {
  const { _id, name, description, link, img } = project;
  const navigate = useNavigate();

  const navigateToDetails = (id) => {
    navigate(`/project/${id}`);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
      <div
        className="card shadow-lg rounded-3 w-100"
        style={{
          maxWidth: "350px",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          className="card-img-top rounded-top"
          src={img}
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text text-muted" style={{ fontSize: "14px" }}>
            {description}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center p-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm rounded-pill px-4 py-2"
          >
            Live Site
          </a>
          <button
            onClick={() => navigateToDetails(_id)}
            className="btn btn-success btn-sm rounded-pill px-4 py-2"
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
