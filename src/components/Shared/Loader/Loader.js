import './Loader.css'

const Loader = (props) => {
    return(
        <h3 className={props.display} style={props.style}>Loading...</h3>
    );
};

export default Loader;