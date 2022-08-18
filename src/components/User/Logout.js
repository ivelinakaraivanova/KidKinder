import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import * as authService from "../../services/authService";

export const Logout = () => {
    const navigate = useNavigate();
    const { user, userLogout } = useContext(AuthContext);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        authService.logout(user.accessToken)
            .then(() => {
                userLogout();
                navigate('/');
            })
            .catch(err => {
                setError(err);
                navigate('/');
            });
    });

    return null;
}
