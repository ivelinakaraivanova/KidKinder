import * as request from "./requester";

const baseUrl = 'https://parseapi.back4app.com/users';

export const getUserById = (userId) => request.get(`${baseUrl}/${userId}`);

export const getAllUsers = async () => (await request.get(`${baseUrl}`)).results;

export const getAllTeachers = async () => (await request.get(`${baseUrl}`)).results.filter(t => t.position === 'teacher');

export const editUser = (userId, username, email, firstName, lastName, imageUrl) =>
    request.put(`${baseUrl}/${userId}`, { username, email, firstName, lastName, imageUrl });
