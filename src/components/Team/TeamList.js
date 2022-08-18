import { useState, useEffect } from "react";
import { TeamItem } from "./TeamItem";
import { HeaderPage } from "../Header/HeaderPage";
import * as userService from "../../services/userService";
import { Footer } from "../Footer/Footer";
import { Loading } from "../Loading/Loading";

export const TeamList = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    if (error) {
        throw error;
    }

    useEffect(() => {
        userService.getAllTeachers()
            .then((result) => {
                setData(result);
                setIsLoading(false);
            }).catch(err => {
                setError(err);
            });
    }, []);

    if (isLoading) {
        return (
            <>
                <HeaderPage pageInfo={{ name: "Our teachers", subName: "teachers" }} />
                <Loading />
            </>
        );
    }

    return (
        <>
            <HeaderPage pageInfo={{ name: "Our teachers", subName: "teachers" }} />

            {data.length > 0
                ?
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5">
                                <span className="px-2">Our Teachers</span>
                            </p>
                            <h1 className="mb-4">Meet Our Teachers</h1>
                        </div>
                        <div className="row">
                            {data.map(teacher => <TeamItem key={teacher.objectId} teacher={teacher} />)}
                        </div>
                    </div>
                </div>
                :
                <div className="text-center pb-5 pt-5">
                    <h1 className="mb-4">There are no teachers.</h1>
                </div>
            }

            <Footer />
        </>
    );
}