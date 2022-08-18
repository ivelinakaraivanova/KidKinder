import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { HeaderPage } from "../Header/HeaderPage";
import { AuthContext } from "../../context/AuthContext";
import * as userService from '../../services/userService';
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";

export const EditProfile = () => {
    const navigate = useNavigate();
    const { user, userEdit } = useContext(AuthContext);

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        userService.getUserById(user.objectId)
            .then((currentUserData) => {
                setData(currentUserData);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username').trim();
        const email = formData.get('email').trim();
        const firstName = formData.get('first-name').trim();
        const lastName = formData.get('last-name').trim();
        const imageUrl = formData.get('image-url').trim();

        userService.editUser(data.objectId, username, email, firstName, lastName, imageUrl)
            .then(() => {
                userEdit(username, email, firstName, lastName, imageUrl);
                navigate('/profile');
            });
    }

    if (isLoading) {
        return (
            <>
                <HeaderPage pageInfo={{ name: "Edit Profile", subName: "profile/edit" }} />
                <Loading />
            </>
        );
    }

    return (
        <>
            <HeaderPage pageInfo={{ name: "Edit Profile", subName: "profile/edit" }} />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-9">
                            <div className="card border-0">
                                <div className="card-header bg-secondary text-center p-4">
                                    <h1 className="text-white m-0">Edit Profile</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary">
                                    <form onSubmit={onSubmit}>
                                        <div className="input-info">
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="username" className="text-white">
                                                    Username:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Username"
                                                    required="required"
                                                    defaultValue={data.username}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="email" className="text-white">
                                                    Email:
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Your Email"
                                                    required="required"
                                                    defaultValue={data.email}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="first-name" className="text-white">
                                                    First Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    name="first-name"
                                                    className="form-control border-0 p-4"
                                                    placeholder="First Name"
                                                    required="required"
                                                    defaultValue={data.firstName}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="last-name" className="text-white">
                                                    Last Name:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    name="last-name"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Last Name"
                                                    required="required"
                                                    defaultValue={data.lastName}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="image-url" className="text-white">
                                                    Your Image:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="image-url"
                                                    name="image-url"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Image Url"
                                                    defaultValue={data.imageUrl}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="position" className="text-white">
                                                    You Are a:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="position"
                                                    name="position"
                                                    className="form-control border-0 p-4"
                                                    disabled
                                                    defaultValue={data.position}
                                                />
                                            </div>
                                        </div>
                                        <div id="edit-profile-btn">
                                            <button
                                                className="btn btn-secondary mt-1 mr-2 py-3 px-5"
                                                type="submit"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                className="btn btn-secondary mt-1 py-3 px-5"
                                                type="submit"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}