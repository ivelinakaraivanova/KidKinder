import * as request from "./requester";

const baseUrl = 'https://parseapi.back4app.com/';

export const login = (username, password) =>
    request.post(`${baseUrl}login`, { username, password }, 1);

export const logout = async (accessToken) => {
    try {
        const response = await fetch(`${baseUrl}logout`, {
            mode: "cors",
            headers: {
                'X-Parse-Session-Token': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}

export const register = (username, email, firstName, lastName, password, imageUrl, position) =>
    request.post(`${baseUrl}users`, {
        username,
        email,
        firstName,
        lastName,
        password,
        imageUrl,
        position
    }, 2);


// export const getCurrentUser = () => request.get(`${baseUrl}users/me`)

// todo: userService

export const getUserById = (userId) => request.get(`${baseUrl}users/${userId}`);

export const editUser = (userId, username, email, firstName, lastName,imageUrl) => 
    request.put(`${baseUrl}users/${userId}`, {username, email, firstName, lastName,imageUrl});
