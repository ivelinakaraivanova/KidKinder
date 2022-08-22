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
                        <NavLink to="/" className="nav-item nav-link" activeClassName="active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link" activeClassName="active">About</NavLink>
                        <NavLink to="/courses" className="nav-item nav-link" activeClassName="active">Courses</NavLink>
                        <NavLink to="/teachers" className="nav-item nav-link" activeClassName="active">Teachers</NavLink>
                        {user.username
                            ?
                            <div id="user">
                                {user.position === 'teacher'
                                    ?
                                    <NavLink to="/courses/myCourses" className="nav-item nav-link" activeClassName="active">My Courses</NavLink>
                                    :
                                    <NavLink to="/courses/myBookings" className="nav-item nav-link" activeClassName="active">My Bookings</NavLink>
                                }
                                <NavLink to="/profile" className="nav-item nav-link" activeClassName="active">My Profile</NavLink>
                                <NavLink to="/logout" className="nav-item nav-link" activeClassName="active">Logout</NavLink>
                            </div>
                            :
                            <div id="guest">
                                <NavLink to="/login" className="nav-item nav-link" activeClassName="active">Login</NavLink>
                                <NavLink to="/register" className="nav-item nav-link" activeClassName="active">Register</NavLink>
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