import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (

        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <a
                    href="index.html"
                    className="navbar-brand font-weight-bold text-secondary"
                    style={{ fontSize: 50 }}
                >
                    <i className="flaticon-043-teddy-bear" />
                    <span className="text-primary">KidKinder</span>
                </a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                >

                    <div className="navbar-nav font-weight-bold mx-auto py-0">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <a href="about.html" className="nav-item nav-link">
                            About
                        </a>
                        <Link to="/courses" className="nav-item nav-link">Courses</Link>
                        <a href="team.html" className="nav-item nav-link">
                            Teachers
                        </a>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                        {user.username
                            ? <div id="user">
                                {user.position === 'teacher'
                                    ?
                                    <Link to="/create" className="nav-item nav-link">Create Course</Link>
                                    : ''
                                }
                                <Link to="/profile" className="nav-item nav-link">My Profile</Link>
                                <Link to="/logout" className="nav-item nav-link">Logout</Link>
                            </div>
                            : <div id="guest">
                                <Link to="/login" className="nav-item nav-link">Login</Link>
                                <Link to="/register" className="nav-item nav-link">Register</Link>
                            </div>
                        }
                    </div>
                    {user.username &&
                        <span>
                            Hello, {user.username}
                        </span>
                    }
                </div>
            </nav>
        </div>

    );
}