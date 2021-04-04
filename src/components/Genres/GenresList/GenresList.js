import {NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';

import './GenresList.css';
import { getAllGenres } from '../../../services/firestoreService';

const GenresList = () => {
    // const Genres = [
    //     {name:'Art', id:1},
    //     {name:'Biography', id:2},
    //     {name:'Childrens', id:3},
    //     {name:'Classics', id:4},
    //     {name:'Cookbooks', id:5},
    //     {name:'Fantasy', id:6},
    //     {name:'Fiction', id:7},
    //     {name:'History', id:8},
    //     {name:'Mystery', id:9},
    //     {name:'Poetry', id:10},
    //     {name:'Psychology', id:11},
    //     {name:'Romance', id:12},
    //     {name:'Science', id:13},
    //     {name:'Science Fiction', id:14},
    //     {name:'Self Help', id:15},
    //     {name:'Travel', id:16},
    //     {name:'Thriller', id:17},
    // ];
    const [genres, setGenres] = useState([]); 
    
    useEffect(() => {
        getAllGenres(setGenres);
    }, [])

    return (
        <div className="genres">
            <h2>Genres</h2>
            <ul className="genresList">
                {genres.map(x => 
                    <li key={x.id}><NavLink to={"/genres/" + x.name} activeClassName="selected">{x.name}</NavLink></li>
                )}
            </ul>
        </div>
    );
};

export default GenresList;