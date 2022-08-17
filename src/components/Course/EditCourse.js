import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderPage } from "../Header/HeaderPage";
import * as courseService from '../../services/courseService';
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";

export const EditCourse = () => {
    const navigate = useNavigate();
    const { courseId } = useParams();
    const [currentCourse, setCurrentCourse] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        courseService.getOne(courseId)
            .then(courseData => {
                setCurrentCourse(courseData);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const title = formData.get('title');
        const imageUrl = formData.get('course-image');
        const description = formData.get('description');
        const ageGroup = formData.get('age-group');
        const seats = Number(formData.get('seats'));
        const tuitionFee = Number(formData.get('tuition-fee'));
        const startDate = formData.get('start-date');
        const startTime = formData.get('start-time');
        const endTime = formData.get('end-time');

        const courseData = { title, imageUrl, description, ageGroup, seats, tuitionFee, startDate, startTime, endTime };

        courseService.edit(courseId, courseData)
            .then(() => {
                navigate(`/courses/${courseId}`);
            });
    }

    if (isLoading) {
        return (
            <>
                <HeaderPage pageInfo={{ name: "Our courses", subName: 'courses' }} />
                <Loading />
            </>
        );
    }

    return (
        <>
            <HeaderPage pageInfo={{ name: "Edit Course", subName: `courses/edit/${currentCourse.objectId}` }} />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-9">
                            <div className="card border-0">
                                <div className="card-header bg-secondary text-center p-4">
                                    <h1 className="text-white m-0">Edit Course</h1>
                                </div>
                                <div className="card-body rounded-bottom bg-primary">
                                    <form onSubmit={onSubmit}>
                                        <div className="input-info">
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="title" className="text-white">
                                                    Title
                                                </label>
                                                <input
                                                    type="text"
                                                    id="title"
                                                    name="title"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Class title"
                                                    required="required"
                                                    defaultValue={currentCourse.title}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="course-image" className="text-white">
                                                    Course Image
                                                </label>
                                                <input
                                                    type="text"
                                                    id="course-image"
                                                    name="course-image"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Course Image Url"
                                                    // required="required"
                                                    defaultValue={currentCourse.imageUrl}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="description" className="text-white">
                                                    Description
                                                </label>
                                                <textarea
                                                    type="text"
                                                    id="description"
                                                    name="description"
                                                    rows={4}
                                                    cols={40}
                                                    className="form-control border-0 p-4"
                                                    placeholder="Course Description"
                                                    required="required"
                                                    defaultValue={currentCourse.description}
                                                />
                                            </div>
                                            <div className="form-group-double-cell">
                                                <div className="form-group form-group-cell two-rows">
                                                    <label htmlFor="age-group" className="text-white">
                                                        Age Group
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="age-group"
                                                        name="age-group"
                                                        className="form-control border-0 p-4"
                                                        placeholder="Age Group"
                                                        required="required"
                                                        defaultValue={currentCourse.ageGroup}
                                                    />
                                                </div>
                                                <div className="form-group form-group-cell two-rows">
                                                    <label htmlFor="seats" className="text-white">
                                                        Total Seats
                                                    </label>
                                                    <input
                                                        type="number"
                                                        id="seats"
                                                        name="seats"
                                                        className="form-control border-0 p-4"
                                                        placeholder="Total Seats"
                                                        min={5}
                                                        max={20}
                                                        required="required"
                                                        defaultValue={currentCourse.seats}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="tuition-fee" className="text-white">
                                                    Tution Fee
                                                </label>
                                                <input
                                                    type="number"
                                                    id="tuition-fee"
                                                    name="tuition-fee"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Tution Fee"
                                                    required="required"
                                                    defaultValue={currentCourse.tuitionFee}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="start-date" className="text-white">
                                                    Start Date
                                                </label>
                                                <input
                                                    type="date"
                                                    id="start-date"
                                                    name="start-date"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Enter Starting Date"
                                                    required="required"
                                                    defaultValue={currentCourse.startDate}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="start-time" className="text-white">
                                                    Start Time
                                                </label>
                                                <input
                                                    type="time"
                                                    id="start-time"
                                                    name="start-time"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Start Time"
                                                    required="required"
                                                    defaultValue={currentCourse.startTime}
                                                />
                                            </div>
                                            <div className="form-group form-group-cell">
                                                <label htmlFor="end-time" className="text-white">
                                                    End Time
                                                </label>
                                                <input
                                                    type="time"
                                                    id="end-time"
                                                    name="end-time"
                                                    className="form-control border-0 p-4"
                                                    placeholder="End Time"
                                                    required="required"
                                                    defaultValue={currentCourse.endTime}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-secondary btn-block bigger-font-size border-0 py-3"
                                                type="submit"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}