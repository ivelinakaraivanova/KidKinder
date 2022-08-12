import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
            <div className="row justify-content-between pt-5">
                <div className="col-lg-4 col-md-6 mb-5">
                    <Link
                        to="/"
                        className="navbar-brand font-weight-bold text-primary m-0 mb-4 p-0"
                        // style={{ fontSize: 40, lineHeight: 40 }}
                    >
                        <i className="flaticon-043-teddy-bear" />
                        <span className="text-white">KidKinder</span>
                    </Link>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi gravida
                        dolor a est fermentum, id convallis sem efficitur. Nam in ultrices
                        felis. Sed fermentum consectetur arcu quis semper. Mauris accumsan urna
                        posuere orci imperdiet, sed mattis lacus dapibus. Donec iaculis ante
                        sodales nibh pulvinar sodales.
                    </p>
                    <div className="d-flex justify-content-start mt-4">
                        <a
                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                            style={{ width: 38, height: 38 }}
                            href="#"
                        >
                            <i className="fab fa-twitter" />
                        </a>
                        <a
                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                            style={{ width: 38, height: 38 }}
                            href="#"
                        >
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a
                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                            style={{ width: 38, height: 38 }}
                            href="#"
                        >
                            <i className="fab fa-linkedin-in" />
                        </a>
                        <a
                            className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                            style={{ width: 38, height: 38 }}
                            href="#"
                        >
                            <i className="fab fa-instagram" />
                        </a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-5">
                    <h3 className="text-primary mb-4">Get In Touch</h3>
                    <div className="d-flex">
                        <h4 className="fa fa-map-marker-alt text-primary" />
                        <div className="pl-3">
                            <h5 className="text-white">Address</h5>
                            <p>123 Street, New York, USA</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <h4 className="fa fa-envelope text-primary" />
                        <div className="pl-3">
                            <h5 className="text-white">Email</h5>
                            <p>info@example.com</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <h4 className="fa fa-phone-alt text-primary" />
                        <div className="pl-3">
                            <h5 className="text-white">Phone</h5>
                            <p>+012 345 67890</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 mb-5">
                    <h3 className="text-primary mb-4">Quick Links</h3>
                    <div className="d-flex flex-column justify-content-start">
                        <Link className="text-white mb-2" to="/">
                            <i className="fa fa-angle-right mr-2" />
                            Home
                        </Link>
                        <Link className="text-white mb-2" to="/about">
                            <i className="fa fa-angle-right mr-2" />
                            About Us
                        </Link>
                        <Link className="text-white mb-2" to="/courses">
                            <i className="fa fa-angle-right mr-2" />
                            Our Courses
                        </Link>
                        <Link className="text-white mb-2" to="/teachers">
                            <i className="fa fa-angle-right mr-2" />
                            Our Teachers
                        </Link>
                        <Link className="text-white" to="/contact">
                            <i className="fa fa-angle-right mr-2" />
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5">
                    <h3 className="text-primary mb-4">Photo Gallery</h3>
                    <div className="row g-2 pt-2">
                        <div className="col-4">
                            <img
                                className="img-fluid rounded bg-light p-1 mt-1"
                                src="img/portfolio-1.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-4">
                            <img
                                className="img-fluid rounded bg-light p-1 mt-1"
                                src="img/portfolio-2.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-4">
                            <img
                                className="img-fluid rounded bg-light p-1 mt-1"
                                src="img/portfolio-3.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-4">
                            <img
                                className="img-fluid rounded bg-light p-1 mt-1"
                                src="img/portfolio-4.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-4">
                            <img
                                className="img-fluid rounded bg-light p-1 mt-1"
                                src="img/portfolio-5.jpg"
                                alt=""
                            />
                        </div>
                        <div className="col-4">
                            <img
                                className="img-fluid rounded bg-light p-1 mt-1"
                                src="img/portfolio-6.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid pt-5"
                    style={{ borderTop: "1px solid rgba(23, 162, 184, .2)" }}
                >
                    <p className="m-0 text-center text-white">
                        ©{" "}
                        <Link className="text-primary font-weight-bold" to="/">
                            KidKinder
                        </Link>
                        . All Rights Reserved. Designed by
                        <Link
                            className="text-primary font-weight-bold"
                            to="https://htmlcodex.com"
                        >
                            HTML Codex
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}