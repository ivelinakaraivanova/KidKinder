import { useContext, useEffect, useState } from "react";
import { HeaderPage } from "../Header/HeaderPage";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";

export const Profile = () => {
    const { user } = useContext(AuthContext);

    const [data, setData] = useState({}); //objectId, imageUrl, username, email, firstName, lastName, position});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        authService.getUserById(user.objectId)
            .then((currentUserData) => {
                setData(currentUserData);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
            })
    }, []);

    if (isLoading) {
        return (
            <>
                <HeaderPage pageInfo={{ name: "Course Details", subName: `courses/${data.objectId}` }} />
                <Loading />
            </>
        );
    }

    return (
        <>
            <HeaderPage pageInfo={{ name: "Course Details", subName: `courses/${data.objectId}` }} />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-around">
                        <div className="col-lg-4 border">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src={data.imageUrl || "./img/blank-profile-picture.png"}
                                alt="My pic here"
                            />
                        </div>
                        <div className="col-lg-6">
                            <p className="section-title pr-5">
                                <span className="pr-2">Profile Details</span>
                            </p>
                            <h1 className="mb-4">My Profile</h1>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-12">
                                    <ul className="list-inline m-0 bigger-font-size">
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-angle-right text-primary mr-3" />
                                            <strong>Username: </strong> {data.username}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-angle-right text-primary mr-3" />
                                            <strong>Email:</strong> {data.email}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-angle-right text-primary mr-3" />
                                            <strong>First name:</strong> {data.firstName}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-angle-right text-primary mr-3" />
                                            <strong>Last name:</strong> {data.lastName}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-angle-right text-primary mr-3" />
                                            <strong>I am a:</strong> {data.position}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <Link to="/profile/edit" className="btn btn-primary mt-2 py-2 px-4">
                                    Edit
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}