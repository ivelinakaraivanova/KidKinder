import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export const Navbar = () => {
    const { user } = useContext(AuthContext);

    return (

        <div className="container-fluid bg-light position-relative shadow">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5">
                <Link
                    to="/"
                    className="navbar-brand font-weight-bold text-secondary"
                    style={{ fontSize: 50 }}
                >
                    <i className="flaticon-043-teddy-bear" />
                    <span className="text-primary">KidKinder</span>
                </Link>
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
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/courses" className="nav-item nav-link">Courses</Link>
                        <Link to="/teachers" className="nav-item nav-link">Teachers</Link>
                        {user.username
                            ?
                            <div id="user">
                                {user.position === 'teacher'
                                    ?
                                    <Link to="/courses/myCourses" className="nav-item nav-link">My Courses</Link>
                                    :
                                    <Link to="/courses/myBookings" className="nav-item nav-link">My Bookings</Link>
                                }
                                <Link to="/profile" className="nav-item nav-link">My Profile</Link>
                                <Link to="/logout" className="nav-item nav-link">Logout</Link>
                            </div>
                            :
                            <div id="guest">
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