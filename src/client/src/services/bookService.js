import * as request from "./requester";

const baseUrl = 'https://parseapi.back4app.com/classes/Booking';

export const getAll = async () => (await request.get(baseUrl)).results;

// export const getOne = (courseId) => request.get(`${baseUrl}/${courseId}`);

export const create = (bookData) => request.post(baseUrl, bookData);

// export const edit = (courseId, courseData) => request.put(`${baseUrl}/${courseId}`, courseData);

export const del = (bookingId) => request.del(`${baseUrl}/${bookingId}`);
