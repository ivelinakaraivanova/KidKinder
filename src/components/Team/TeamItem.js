
export const TeamItem = ({teacher}) => {

    return (
        <div className="col-md-6 col-lg-3 text-center team mb-5">
            <div
                className="position-relative overflow-hidden mb-4"
                style={{ borderRadius: "100%" }}
            >
                <img className="img-fluid w-100" src={teacher.imageUrl || "./img/blank-profile-picture.png"} alt="" />
            </div>
            <h4>{`${teacher.firstName} ${teacher.lastName}`}</h4>
            <i>Teacher</i>
        </div>
    );
}