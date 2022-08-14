import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { HeaderPage } from "../Header/HeaderPage";
import * as courseService from '../../services/courseService';
import * as authService from "../../services/authService";
import * as bookService from "../../services/bookService";
import { AuthContext } from "../../context/AuthContext";
import { Footer } from "../Footer/Footer";

export const CourseDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { courseId } = useParams();

    const [data, setData] = useState({});

    useEffect(() => {
        (async () => {
            const currentCourseData = await courseService.getOne(courseId);
            const teacherData = await authService.getUserById(currentCourseData.ownerId);

            setData({ ...currentCourseData, teacherName: `${teacherData.firstName} ${teacherData.lastName}` });
        })();
    }, []);

    const isOwner = data.ownerId === user.objectId;

    const onDelete = () => {
        const confirmation = window.confirm('Are you shure you want to delete this course?');

        if (confirmation) {
            courseService.del(data.objectId)
                .then(() => {
                    navigate('/courses/myCourses');
                });
        }
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const childName = formData.get('child-name');
        const userId = user.objectId;
        const courseId = data.objectId;

        const bookData = { userId, courseId, childName };
        await bookService.create(bookData);
        await courseService.addBookedSeats(courseId, 1);
        navigate(`/courses/myBookings`);
    }

    return (
        <>
            <HeaderPage pageInfo={{ name: "Course Details", subName: `courses/${data.objectId}` }} />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src={data.imageUrl || "../img/blank-course-picture.jpg"} alt="Course pic"
                            />
                        </div>
                        <div className="col-lg-5">
                            <p className="section-title pr-5">
                                <span className="pr-2">Course Details</span>
                            </p>
                            <h1 className="mb-4">{data.title}</h1>
                            <p>{data.description}</p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Teacher: {data.teacherName}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Age of Kids: {data.ageGroup}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Total Seats: {data.seats}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Available Seats: {data.seats - data.bookedSeatsCount}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Class Date: {data.startDate}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Class Time: {data.startTime}
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Tution Fee: ${data.tuitionFee} / Month
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {user.username && isOwner
                                ?
                                <div>
                                    <Link to={`/courses/edit/${data.objectId}`} className="btn btn-primary mt-2 py-2 px-4">Edit</Link>
                                    <Link to="" className="btn btn-primary mt-2 py-2 px-4" onClick={onDelete}>Delete</Link>
                                </div>
                                : ''
                            }
                            {user.username && !isOwner && data.seats > data.bookedSeatsCount
                                ?
                                <div className="col-lg-10 mb-2 book-form">
                                    <div className="contact-form">
                                        <form name="book" onSubmit={onSubmit}>
                                            <div className="control-group">
                                                <label htmlFor="book">Book A Seat For:</label>
                                                <input
                                                    type="text"
                                                    className="form-control mb-2"
                                                    id="book"
                                                    name="child-name"
                                                    placeholder="Child Name"
                                                    required="required"
                                                    data-validation-required-message="Please enter child name"
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-primary py-2 px-4"
                                                    type="submit"
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                : ''
                            }
                            {user.username && !isOwner && data.seats <= data.bookedSeatsCount
                                ?
                                <div className="col-lg-10 mb-2 book-form">
                                    <div className="control-group">
                                        <h5>Fully booked</h5>
                                    </div>
                                </div>
                                : ''
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}