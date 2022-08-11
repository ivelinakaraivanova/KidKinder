import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HeaderPage } from "../Header/HeaderPage";
import { courseSelect } from '../../context/CourseContext'
import * as courseService from '../../services/courseService';

export const CourseDetails = () => {
    const navigate = useNavigate();

    const { courseId } = useParams();

    // const currentCourse = courseSelect(courseId);

    useEffect(() => {
        courseService.getOne(courseId)
            .then(result =>
                console.log(result)
            )
    }, []);

    return (
        <>
            <HeaderPage pageInfo={{ name: "Course Details", subName: "Course Details" }} />

            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <img
                                className="img-fluid rounded mb-5 mb-lg-0"
                                src="img/about-1.jpg" //course image
                                alt=""
                            />
                        </div>
                        <div className="col-lg-5">
                            <p className="section-title pr-5">
                                <span className="pr-2">Course Details</span>
                            </p>
                            <h1 className="mb-4">Drawing Course</h1>
                            <p>
                                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor
                                lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo
                                sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                            </p>
                            <div className="row pt-2 pb-4">
                                <div className="col-6 col-md-8">
                                    <ul className="list-inline m-0">
                                        <li className="py-2 border-top border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Teacher: teacher.name
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Age of Kids: class.age
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Total Seats: class.seats
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Free Seats: class.seats free
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Class Date: class.date
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Class Time: class.time
                                        </li>
                                        <li className="py-2 border-bottom">
                                            <i className="fa fa-check text-primary mr-3" />
                                            Tution Fee: $ class.fee / Month
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <a href="" className="btn btn-primary mt-2 py-2 px-4">
                                    Book Now
                                </a>
                                <a href="" className="btn btn-primary mt-2 py-2 px-4">
                                    Edit
                                </a>
                                <a href="" className="btn btn-primary mt-2 py-2 px-4">
                                    Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}