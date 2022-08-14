import { useState, useEffect, useContext } from "react";
import { MyBookingsContext, MyBookingsProvider } from "../../context/MyBookingsContext";
import { HeaderPage } from "../Header/HeaderPage";
import * as bookService from '../../services/bookService';
import { Footer } from "../Footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import * as courseService from '../../services/courseService';
import { BookingItem } from "./BookingItem";
import * as authService from "../../services/authService";

export const MyBookings = () => {
    // const { user } = useContext(AuthContext);
    const { myBookings } = useContext(MyBookingsContext);

    return (
        <>
            <HeaderPage pageInfo={{ name: "My Bookings", subName: "courses/myBookings" }} />

            {myBookings.length > 0
                ?
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5">
                                <span className="px-2">My Bookings</span>
                            </p>
                            <h1 className="mb-4">My Bookings</h1>
                        </div>
                        <div className="row">
                            {myBookings.map(booking => <BookingItem key={booking.objectId} booking={booking} />)}
                        </div>
                    </div>
                </div>
                :
                <div className="text-center pb-2">
                    <h1 className="mb-4">There are no bookings available.</h1>
                </div>
            }

            <Footer />
        </>
    );
}