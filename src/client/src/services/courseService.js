import * as request from "./requester";

const baseUrl = 'https://parseapi.back4app.com/classes/Course';

export const getAll = async () => (await request.get(baseUrl)).results; // TODO: filter by owner

export const getOne = (courseId) => request.get(`${baseUrl}/${courseId}`);

export const create = (courseData) => request.post(baseUrl, courseData);

export const edit = (courseId, courseData) => request.put(`${baseUrl}/${courseId}`, courseData);

export const del = (courseId) => request.del(`${baseUrl}/${courseId}`);

export const addBookedSeats = async (courseId, addedBookedSeatsCount) => {
    const course = await getOne(courseId);
    await edit(courseId, {bookedSeatsCount: course.bookedSeatsCount+addedBookedSeatsCount});
}