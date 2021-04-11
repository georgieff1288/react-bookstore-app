import { useState, useEffect} from 'react';

import './Genres.css';
import GenresList from './GenresList/GenresList';
import BooksList from '../Book/BooksList/BooksList';
import Loader from '../Shared/Loader/Loader';
import { getAllBooks, getBooksByGenre } from '../../services/firestoreService';


const Genres = ({match}) => {
    const [books, setBooks] = useState([]);
    const [loader, setLoader] = useState('show');
    const genre = match.params.name;

    useEffect(() => {  
        if(genre){
            getBooksByGenre(genre).then((res) => {
                setBooks(res);
                setLoader('hide');
            });
        }else{
            getAllBooks().then((res) => {
                setBooks(res);
                setLoader('hide');
            });
        }
    }, [genre]);

    return(
        <div className="genresPage">
            <GenresList/>
            <Loader display={loader} style={{width:180}}/>
            <BooksList items={books}/>            
        </div>
    );
};

export default Genres;