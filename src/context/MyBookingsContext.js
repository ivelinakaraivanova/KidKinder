import { createContext, useEffect, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import * as courseService from '../services/courseService';
import * as bookService from '../services/bookService';
import * as userService from "../services/userService";

export const MyBookingsContext = createContext();

export const MyBookingsProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [myBookings, setMyBookings] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        (async () => {
            try {
                const myBookings = await bookService.getByUser(user.objectId);
                let myExtendedBookings = [];

                for (let booking of myBookings) {
                    const course = await courseService.getOne(booking.courseId);
                    const teacher = await userService.getUserById(course.ownerId);
                    const extendedBooking = {
                        ...booking,
                        courseId: course.objectId,
                        courseImageUrl: course.imageUrl,
                        courseTitle: course.title,
                        courseAgeGroup: course.ageGroup,
                        courseStartDate: course.startDate,
                        courseStartTime: course.startTime,
                        courseEndTime: course.endTime,
                        teacherName: `${teacher.firstName} ${teacher.lastName}`,
                    }
                    myExtendedBookings.push(extendedBooking);
                }

                setMyBookings(myExtendedBookings);
                setIsLoading(false);
            } catch (err) {
                setError(err);
            }
        })();
    }, []);

    const unbook = async (bookingId, courseId) => {
        await courseService.addBookedSeats(courseId, -1);
        await bookService.del(bookingId);
        setMyBookings(myBookings.filter(b => b.objectId !== bookingId));
    };

    return (
        <MyBookingsContext.Provider value={{ myBookings, unbook, isLoading }}>
            {children}
        </MyBookingsContext.Provider>
    );
};
