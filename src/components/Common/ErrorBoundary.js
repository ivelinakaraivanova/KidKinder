import { Component } from "react";

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        }
    }

    static getDerivedStateFromError (error) {
        console.log('getDerivedStateFromError');
        return {error: error.message};
    }

    componentDidCatch(error, errorInfo) {
        // console.log('componentdDidCatch');
        // console.log(error);
        // console.log(errorInfo);
    }

    render() {
        if(this.state.error) {
            
            return <h3 className="text-center mt-5">Something went wrong. {this.state.error}.</h3>;
        }

        return this.props.children;
    }

}