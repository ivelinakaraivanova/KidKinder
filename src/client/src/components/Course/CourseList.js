import { useState, useEffect, useContext } from "react";
import { CourseContext } from "../../context/CourseContext";
import { HeaderPage } from "../Header/HeaderPage";
import { CourseItem } from "./CourseItem";
import * as courseService from '../../services/courseService';


export const CourseList = () => {

    // const { courses } = useContext(CourseContext);

    const [data, setData] = useState({});
    
    useEffect(() => {
        courseService.getAll()
        .then((result) => {
            setData(result);
        });
    }, []);

    return (

        <>
            <HeaderPage pageInfo={{ name: "Our courses", subName: "Our courses" }} />

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
        </>
    );
}