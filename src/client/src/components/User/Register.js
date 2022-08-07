import { useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";

export const Register = () => {
    const navigate = useNavigate();
    // const {userLogin} = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const username = formData.get('username');
        const email = formData.get('email');
        const firstName = formData.get('first-name');
        const lastName = formData.get('last-name');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');
        const imageUrl = formData.get('image-url');
        const position = formData.get('position');

        if (confirmPassword !== password) {
            return;
        };

        authService.register(username, email, firstName, lastName, password, confirmPassword, imageUrl, position)
        .then(authData => {
            // userLogin(authData);
            navigate('/');
        });
    }

    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-9">
                        <div className="card border-0">
                            <div className="card-header bg-secondary text-center p-4">
                                <h1 className="text-white m-0">Register</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-primary">
                                <form  onSubmit={onSubmit}>
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
                                            />
                                        </div>
                                        <div className="form-group form-group-cell">
                                            <label htmlFor="password" className="text-white">
                                                Password:
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                name="password"
                                                className="form-control border-0 p-4"
                                                placeholder="Enter Password"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group form-group-cell">
                                            <label htmlFor="confirm-password" className="text-white">
                                                Confirm Password:
                                            </label>
                                            <input
                                                type="password"
                                                id="confirm-password"
                                                name="confirm-password"
                                                className="form-control border-0 p-4"
                                                placeholder="Confirm Passowrd"
                                                required="required"
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
                                            />
                                        </div>
                                        <div className="form-group form-group-cell">
                                            <label htmlFor="position" className="text-white">
                                                You are a:
                                            </label>
                                            <select
                                                id="position"
                                                name="position"
                                                className="custom-select border-0 px-4"
                                                style={{ height: 47 }}
                                            >
                                                <option value="parent">Parent</option>
                                                <option value="teacher">Teacher</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-secondary btn-block bigger-font-size border-0 py-3"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}