import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyBookingsContext } from "../../context/MyBookingsContext";
import * as authService from "../../services/authService";
import * as bookService from '../../services/bookService';

export const BookingItem = ({ booking }) => {
    const { unbook } = useContext(MyBookingsContext);
    const navigate = useNavigate();
    // const [data, setData] = useState({});

    const onDelete = async () => {
        const confirmation = window.confirm('Are you shure you want to unbook this course?');

        if (confirmation) {
            await unbook(booking.objectId, booking.courseId);
        }
    }

    return (

        <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={booking.courseImageUrl || "./img/blank-course-picture.jpg"} alt="Course pic" />
                <div className="card-body text-center">
                    <h4 className="card-title">{booking.courseTitle}</h4>
                    <h6 className="card-subtitle">Teacher: {booking.teacherName}</h6>
                </div>
                <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Age of Kids</strong>
                        </div>
                        <div className="col-6 py-1">{booking.courseAgeGroup} Years</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Class Date</strong>
                        </div>
                        <div className="col-6 py-1">{booking.courseStartDate}</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Class Time</strong>
                        </div>
                        <div className="col-6 py-1">{booking.courseStartTime} - {booking.courseEndTime}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Child Name</strong>
                        </div>
                        <div className="col-6 py-1">{booking.childName}</div>
                    </div>
                </div>
                <Link to="" className="btn btn-primary mt-2 py-2 px-4" onClick={onDelete}>Unbook</Link>
            </div>
        </div>
    );
}