import { Link } from 'react-router-dom';

export const Navbar = () => {
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
                        <a href="index.html" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About
                        </a>
                        <a href="class.html" className="nav-item nav-link">
                            Classes
                        </a>
                        <a href="team.html" className="nav-item nav-link">
                            Teachers
                        </a>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                        <a href="create.html" className="nav-item nav-link">
                            Create Class
                        </a>
                        <a href="profile.html" className="nav-item nav-link">
                            My Profile
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Logout
                        </a>
                        <Link to="/login" className="nav-item nav-link">Login</Link>
                        <Link to="/register" className="nav-item nav-link">Register</Link>
                    </div>
                    <span>
                        Hello, {"{"}user.username{"}"}
                    </span>
                </div>
            </nav>
        </div>

    );
}