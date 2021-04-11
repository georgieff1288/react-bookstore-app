import { useState, useEffect } from 'react'; 

import './DataSeedForm.css';
import InputError from '../Shared/InputError/InputError';
import { uploadImage } from '../../services/storageService';
import { addEmptyBookDoc, getAllGenres } from '../../services/firestoreService';


//NB:This component must not be part of the user interface. It serves only for seeding data!
const DataSeedForm = () =>{
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        getAllGenres(setGenres);
    }, []);

    const [file, setFile] = useState();
    const [errorMessage, setErrorMessage] = useState('');

    const onYearChangeHandler = (e) => {
        if(e.target.value < 1990 || e.target.value > 2021){
            setErrorMessage('Year field must be between 1950 and 2021');
        } else {
            setErrorMessage('');
        };
    };

    const onPagesChangeHandler = (e) => {
        if(e.target.value < 10 || e.target.value > 2000){
            setErrorMessage('Pages field must be between 10 and 2000');
        } else {
            setErrorMessage('');
        };
    };

    const onPriceChangeHandler = (e) => {
        if(e.target.value < 1 || e.target.value > 200){
            setErrorMessage('Price field must be between 1 and 200');
        } else {
            setErrorMessage('');
        };
    };
    
    const onUploadChange = (e) => {
        setFile(e.target.files[0]);
        if(e.target.files[0].size > 102400){
            setErrorMessage('Image size must be less than 100kB.');
            setFile();
        }else{
            setErrorMessage('');
        }
    };
    
    const sendData = (e) => {
        e.preventDefault();
        let roundedPrice = Math.round(e.target.price.value * 100) / 100;
        let book = {
            author:e.target.author.value,
            title:e.target.title.value,
            genre:e.target.genre.value,
            publisher:e.target.publisher.value,
            year:e.target.year.value,
            pages:e.target.pages.value,
            price:roundedPrice,
            description:e.target.description.value
        };
        if(!e.target.author.value 
            || !e.target.title.value
            || !e.target.publisher.value
            || !e.target.year.value
            || !e.target.pages.value
            || !e.target.price.value
            || !e.target.description.value
            || !file){
            setErrorMessage("All fields are required!");
        }else{
            addEmptyBookDoc().then((docId) => {
                uploadImage(file, book, docId);
            });            
            e.target.author.value='';
            e.target.title.value='';
            e.target.publisher.value='';
            e.target.year.value='';
            e.target.pages.value='';
            e.target.price.value='';
            e.target.description.value='';
            e.target.bookCover.value='';
            setFile();
            setErrorMessage('');
        };
    };

    return(
        <div className="seedContainer">
            <h2>Data seed form.</h2>
            <InputError>{errorMessage}</InputError>
            <form onSubmit={sendData}>
                <label className="seedFormLabel" htmlFor="author">Author</label>
                <br/>
                <input type="text" name="author" id="author"/>
                <br/>
                <label className="seedFormLabel" htmlFor="title">Title</label>
                <br/>
                <input type="text" name="title" id="title"/>
                <br/>
                <label className="seedFormLabel" htmlFor="genre">Genre</label>
                <br/>
                <select name="genre" id="genre">
                    {genres.map(x => 
                        <option key={x.id} value={x.name}>{x.name}</option>
                    )}
                </select>
                <br/> 
                <label className="seedFormLabel" htmlFor="publisher">Publisher</label>
                <br/>
                <input type="text" name="publisher" id="publisher"/>
                <br/>
                <label className="seedFormLabel" htmlFor="year">Year</label>
                <br/>
                <input type="number" name="year" id="year" onBlur={onYearChangeHandler}/>
                <br/>                
                <label className="seedFormLabel" htmlFor="pages">Pages</label>
                <br/>
                <input type="number" name="pages" id="pages" onBlur={onPagesChangeHandler}/>
                <br/>
                <label className="seedFormLabel" htmlFor="price">Price</label>
                <br/>
                <input type="number" name="price" id="price" step="any" onBlur={onPriceChangeHandler}/>
                <br/>
                <label className="seedFormLabel" htmlFor="description">Description</label>
                <br/>
                <textarea type="text" name="description" id="description" rows="10" cols="40"/>
                <br/>
                <label className="seedFormLabel" htmlFor="bookCover">Book cover</label>
                <br/>
                <input type="file" name="bookCover" id="bookCover" onChange={onUploadChange} accept=".jpg, .jpeg, .png"/>
                <br/>
                <InputError>{errorMessage}</InputError>
                <button>Send</button>
            </form>
        </div>
    );
};

export default DataSeedForm;