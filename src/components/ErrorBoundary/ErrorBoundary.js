import { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    };

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    };

    componentDidCatch(error, errorInfo) {
        console.log('Error from componentDidCatch: ', error);
    };
    
    render() {
        if (this.state.hasError) {
            return <h1>Sorry, something has gone wrong.</h1>
        };

        return this.props.children;
    };
};

export default ErrorBoundary;