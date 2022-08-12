import { useState, useEffect } from "react";
import { TeamItem } from "./TeamItem";
import { HeaderPage } from "../Header/HeaderPage";
import * as authService from "../../services/authService";
import { Footer } from "../Footer/Footer";

export const TeamList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        authService.getAllUsers()
            .then((result) => {
                const teachersTeam = result.filter(t => t.position === 'teacher');
                setData(teachersTeam);
            });
    }, []);

    return (
        <>
            <HeaderPage pageInfo={{ name: "Our teachers", subName: "Our teachers" }} />

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

            <Footer />
        </>
    );
}