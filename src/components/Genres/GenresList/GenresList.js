import {NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';

import './GenresList.css';
import Loader from '../../Shared/Loader/Loader'
import { getAllGenres } from '../../../services/firestoreService';

const GenresList = () => {
    const [genres, setGenres] = useState([]);
    const [loader, setLoader] = useState('show'); 
    
    useEffect(() => {       
        getAllGenres(setGenres, setLoader);
    }, [])
    return (
        <div className="genres">
            <h2>Genres</h2>
            <Loader>{loader}</Loader>
            <ul className="genresList">
                {genres.map(x => 
                    <li key={x.id}><NavLink to={"/genres/" + x.name} activeClassName="selected">{x.name}</NavLink></li>
                )}
            </ul>
        </div>
    );
};

export default GenresList;