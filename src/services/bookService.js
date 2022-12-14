import * as request from "./requester";

const baseUrl = 'https://parseapi.back4app.com/classes/Booking';

export const getAll = async () => (await request.get(baseUrl)).results;

export const getByUser = async (userId) => (await request.get(baseUrl)).results.filter(b => b.userId === userId);

export const create = (bookData) => request.post(baseUrl, bookData);

export const del = (bookingId) => request.del(`${baseUrl}/${bookingId}`);
