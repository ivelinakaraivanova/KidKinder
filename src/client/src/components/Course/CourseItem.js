import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as authService from "../../services/authService";

export const CourseItem = ({course}) => {
    const [data, setData] = useState({});

    useEffect(() => {
        authService.getUserById(course.ownerId)
            .then(result => {
                setData({teacherName: `${result.firstName} ${result.lastName}`});
            });
    }, []);

    return (

        <div className="col-lg-4 mb-5">
            <div className="card border-0 bg-light shadow-sm pb-2">
                <img className="card-img-top mb-2" src={course.imageUrl} alt="Course pic" />
                <div className="card-body text-center">
                    <h4 className="card-title">{course.title}</h4>
                    <h6 className="card-subtitle">Teacher: {data.teacherName}</h6>
                </div>
                <div className="card-footer bg-transparent py-4 px-5">
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Age of Kids</strong>
                        </div>
                        <div className="col-6 py-1">{course.ageGroup} Years</div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Class Date</strong>
                        </div>
                        <div className="col-6 py-1">{course.startDate}</div>
                    </div>
                    <div className="row">
                        <div className="col-6 py-1 text-right border-right">
                            <strong>Class Time</strong>
                        </div>
                        <div className="col-6 py-1">{course.startTime} - {course.endTime}</div>
                    </div>
                </div>
                <Link to={`/courses/${course.objectId}`} className="btn btn-primary px-4 mx-auto mb-4">
                    Details
                </Link>
            </div>
        </div>
    );
}