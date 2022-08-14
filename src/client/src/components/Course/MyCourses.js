import { useState, useEffect, useContext } from "react";
import { HeaderPage } from "../Header/HeaderPage";
import { CourseItem } from "./CourseItem";
import * as courseService from '../../services/courseService';
import { Footer } from "../Footer/Footer";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";


export const MyCourses = () => {
    const { user } = useContext(AuthContext);

    // const { courses } = useContext(CourseContext);

    const [data, setData] = useState({});
    
    useEffect(() => {
        courseService.getAll()
        .then((result) => {
            const myCourses = result.filter(c => c.ownerId === user.objectId);
            setData(myCourses);
        });
    }, []);

    return (

        <>
            <HeaderPage pageInfo={{ name: "My courses", subName: "courses/myCourses" }} />

            <div className="text-center">
                <Link to="/create" className="btn btn-primary mt-2 py-2 px-4">Create Course</Link>
            </div>

            {data.length > 0
                ?
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5">
                                <span className="px-2">My courses</span>
                            </p>
                            <h1 className="mb-4">My Courses</h1>
                        </div>
                        <div className="row">
                            {data.map(course => <CourseItem key={course.objectId} course={course} />)}
                            
                        </div>
                    </div>
                </div>
                :
                <div className="text-center pb-5 pt-5">
                    <h1 className="mb-4">There are no courses available.</h1>
                </div>
            }

            <Footer />
        </>
    );
}