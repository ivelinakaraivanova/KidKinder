import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as courseService from '../services/courseService';

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState({});

    useEffect(() => {
        courseService.getAll()
            .then(result => {
                console.log(result.results);
                setCourses(result.results);
            });
    }, []);

    const courseSelect = (courseId) => {
        return courses.find(c => c._id === courseId) || {};
    };

    const courseAdd = (courseData) => {
        setCourses(state => [
            ...state,
            courseData,
        ]);
        navigate('/courses');
    };

    const courseEdit = (courseId, courseData) => {
        setCourses(state => state.map(c => c._id === courseId ? courseData : c));
    };

    return (
        <CourseContext.Provider value={{ courses, courseAdd, courseEdit, courseSelect }}>
            {children}
        </CourseContext.Provider>
    );
};


//fetchClassDetails, , classDelete
