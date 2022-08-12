import { Footer } from "../Footer/Footer";
import { HeaderPage } from "../Header/HeaderPage";

export const Contact = () => {
    return (
        <>
            <HeaderPage pageInfo={{ name: "Contact Us", subName: "Contact Us" }} />

            {/* <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center pb-2">
                        <p className="section-title px-5">
                            <span className="px-2">Get In Touch</span>
                        </p>
                        <h1 className="mb-4">Contact Us</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 mb-5">
                            <div className="d-flex">
                                <i
                                    className="fa fa-map-marker-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="pl-3">
                                    <h5>Address</h5>
                                    <p>123 Street, New York, USA</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i
                                    className="fa fa-envelope d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="pl-3">
                                    <h5>Email</h5>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i
                                    className="fa fa-phone-alt d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="pl-3">
                                    <h5>Phone</h5>
                                    <p>+012 345 67890</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <i
                                    className="far fa-clock d-inline-flex align-items-center justify-content-center bg-primary text-secondary rounded-circle"
                                    style={{ width: 45, height: 45 }}
                                />
                                <div className="pl-3">
                                    <h5>Opening Hours</h5>
                                    <strong>Sunday - Friday:</strong>
                                    <p className="m-0">08:00 AM - 05:00 PM </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Footer />
        </>
    );
}