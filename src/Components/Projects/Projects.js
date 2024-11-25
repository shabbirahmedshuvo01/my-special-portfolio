import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = ({ project }) => {
  const { _id, name, description, link, img } = project;

  const navigate = useNavigate();
  const navigateToDetails = (id) => {
    navigate(`porject/${id}`);
  };

  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4">
      <div
        className="card shadow-lg rounded-3"
        style={{
          width: "18rem",
          height: "auto",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <img
          className="card-img-top rounded-top"
          src={img}
          alt=""
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5
            className="card-title text-left text-dark"
            style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }}
          >
            {name}
          </h5>
          <p
            className="card-text fw-normal mt-3"
            style={{ fontSize: "14px", color: "#6c757d" }}
          >
            {description}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center p-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-sm rounded-pill px-4 py-2 live-site-btn"
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
