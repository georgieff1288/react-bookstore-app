import { useState, useEffect} from 'react';

import './Genres.css';
import GenresList from './GenresList/GenresList';
import BooksList from '../Book/BooksList/BooksList';
import Loader from '../Shared/Loader/Loader';
import { getAllBooks } from '../../services/firestoreService';


const Genres = ({match}) => {
    const [books, setBooks] = useState([]);
    const [loader, setLoader] = useState('show');

    useEffect(() => {       
        getAllBooks(setBooks, setLoader);
    }, []);

    return(
        <div className="genresPage">
            <GenresList/>
            <Loader display={loader} style={{width:180}}/>
            {match.params.name ? <h2>{match.params.name}</h2> : <BooksList items={books}/>}             
        </div>
    );
};

export default Genres;