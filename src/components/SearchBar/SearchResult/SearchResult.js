import { useState, useEffect} from 'react';

import'./SearchResult.css';
import BookList from '../../Book/BooksList/BooksList';
import Loader from '../../Shared/Loader/Loader';
import { search } from '../../../services/firestoreService'; 

const SearchResult = ({match}) => {
    const [result, setResult] = useState([]);
    const [loader, setLoader] = useState('show');
    
    useEffect(() => {       
        search(match.params.query).then((res) => {
            setResult(res);
            setLoader('hide')
        });
    }, [match.params.query]);

    if(loader === "show"){
        return (<Loader display={loader} style={{width:180}}/>);
    };

    return(
        <div>
            <h1 className="resultHeading">Search results for '{match.params.query}'</h1>           
            {result[0] ? 
                <BookList items={result}/>
                :
                <h2 className="resultHeading">No results</h2>
            }
        </div>        
    );
};

export default SearchResult;