import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderPage } from "../Header/HeaderPage";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";
import { Footer } from "../Footer/Footer";

export const Login = () => {
    const navigate = useNavigate();
    const { userLogin } = useContext(AuthContext);
    const [error, setError] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        const { username, password } = Object.fromEntries(new FormData(e.target));

        authService.login(username, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(err => {
                setError(err);
            });
    };
    
    return (
        <>
            <HeaderPage pageInfo={{ name: "Login", subName: "login" }} />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="card border-0">
                                <div className="card-header bg-secondary text-center p-4">
                                    <h1 className="text-white m-0">Login</h1>
                                </div>
                                {error
                                    ? <div className="alert alert-danger mb-0 bigger-allert-font-size text-center" role="alert">
                                        Unsuccessful login. {error.message}
                                    </div>
                                    : ""}
                                <div className="card-body rounded-bottom bg-primary p-5">
                                    <form onSubmit={onSubmit}>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                className="form-control border-0 p-4"
                                                placeholder="Username"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="form-control border-0 p-4"
                                                placeholder="Password"
                                                required="required"
                                            />
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-secondary btn-block bigger-font-size border-0 py-3"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <p className="bigger-font-size text-white p-custom" align="center">
                                        If you don't have registration,{" "}
                                    </p>
                                    <Link
                                        to="/register"
                                        align="center"
                                        className="nav-item nav-link text-white bigger-font-size"
                                    >
                                        <strong>click here</strong>!
                                    </Link>
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