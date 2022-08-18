import { useContext } from "react";
import { MyBookingsContext } from "../../context/MyBookingsContext";
import { HeaderPage } from "../Header/HeaderPage";
import { Footer } from "../Footer/Footer";
import { BookingItem } from "./BookingItem";
import { Loading } from "../Loading/Loading";

export const MyBookings = () => {
    const { myBookings, isLoading } = useContext(MyBookingsContext);

    if (isLoading) {
        return (
            <>
                <HeaderPage pageInfo={{ name: "My Bookings", subName: "courses/myBookings" }} />
                <Loading />
            </>
        );
    }

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
                    <h1 className="mb-4">You have no bookings yet.</h1>
                </div>
            }

            <Footer />
        </>
    );
}