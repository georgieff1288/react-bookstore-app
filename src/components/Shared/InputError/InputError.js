import './InputError.css';

const InputError = ({children}) => {
    if(!children){
        return null;
    }
    
    return(
        <div className="inputError">{children}</div>
    );
};

export default InputError;