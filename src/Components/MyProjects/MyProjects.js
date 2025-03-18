import React, { useEffect, useState } from "react";
import Projects from "../Projects/Projects";
import Fade from "react-reveal/Fade";
import Loading from "../Loading/Loading";

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://shuvo-here-server-222.onrender.com/project")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    return (
        <div className="container mt-5">
            <Fade top>
                <div
                    className="p-5 rounded shadow-lg"
                    style={{
                        backgroundImage: `url('https://img.freepik.com/free-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=2000')`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                >
                    <h1 className="text-primary text-center mb-4">My Projects</h1>
                    {loading ? (
                        <Loading />
                    ) : (
                        <div className="row g-4">
                            {projects.map((project) => (
                                <Projects key={project._id} project={project} />
                            ))}
                        </div>
                    )}
                </div>
            </Fade>
        </div>
    );
};

export default MyProjects;
