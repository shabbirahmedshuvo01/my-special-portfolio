import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-image" style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/abstract-bokeh-lights-background_1409-1235.jpg?w=2000')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-3" href="#">Hi!!!</a>

                    {/* Toggle button for mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white fw-semibold" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
