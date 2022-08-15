import { useState, useEffect, useContext } from "react";
import { CourseContext } from "../../context/MyBookingsContext";
import { HeaderPage } from "../Header/HeaderPage";
import { CourseItem } from "./CourseItem";
import * as courseService from '../../services/courseService';
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";


export const CourseList = () => {

    // const { courses } = useContext(CourseContext);

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        courseService.getAll()
            .then(result => {
                setData(result);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err);
            });
    }, []);

    // TODO: filter by type

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
            <HeaderPage pageInfo={{ name: "Our courses", subName: 'courses' }} />

            {data.length > 0
                ?
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5">
                                <span className="px-2">Popular courses</span>
                            </p>
                            <h1 className="mb-4">Courses for Your Kids</h1>
                        </div>
                        <div className="row">
                            {data.map(course => <CourseItem key={course.objectId} course={course} />)}

                        </div>
                    </div>
                </div>
                :
                <div className="text-center pb-2">
                    <h1 className="mb-4">There are no courses available.</h1>
                </div>
            }

            <Footer />
        </>
    );
}