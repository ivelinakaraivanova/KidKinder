export const Loading = () => {
    return (
        <div>
            <div className="text-center">
                <div className="spinner-border text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-center text-info">Loading...</h3>
            </div>
        </div>
    );
}