import * as request from "./requester";

const baseUrl = 'https://parseapi.back4app.com/classes/Course';

export const getAll = async () => (await request.get(baseUrl)).results;

export const getOne = (courseId) => request.get(`${baseUrl}/${courseId}`);

export const create = (courseData) => request.post(baseUrl, courseData);

export const edit = (courseId, courseData) => request.put(`${baseUrl}/${courseId}`, courseData);

export const del = (courseId) => request.del(`${baseUrl}/${courseId}`);