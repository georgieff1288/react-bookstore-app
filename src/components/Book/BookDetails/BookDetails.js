import StarRatings from 'react-star-ratings';
import { useState, useEffect } from 'react';

import './BookDetails.css';
import Review from './Review/Review';
import InputError from '../../Shared/InputError/InputError';
import { getBookById, addReiew, getBookReviews } from '../../../services/firestoreService';



const Details = ({ match }) => {
    const bookId = match.params.bookId;
    const [book, setBook] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');
    const [reviewsList, setReviewList] = useState([]);

    useEffect(() => {     
        getBookReviews(bookId, setReviewList);      
        getBookById(bookId, setBook);
    },[bookId]);
    const onSend = (e) => {
        e.preventDefault();
        let bookReview = {
            author:'Ivan ivanov',
            creatorId:123,
            rating:rating,
            content:review
        };
        if(rating === 0){
            setErrorMessage('Rating can not be zero');
        }

        if(review && rating > 0){ 
            addReiew(bookId, bookReview);
            getBookReviews(bookId, setReviewList);           
        };
    };

    const changeRating = (newRating) => {
        setRating(newRating);
        setErrorMessage('');
    };

    const onChangeHandler = (e) => {
        setReview(e.target.name = e.target.value);
        
    };

    const onReviewChangeHandler = (e) => {
        if(!e.target.value){
            setErrorMessage('Review can not be empty');
        } else {
            setErrorMessage('');
            
        };
    };

    return(
        <div>
            <div className="detailsContainer">
                <img src={book.imgSrc} alt={book.title}/>
                <div className="details">
                <h2>{book.title}</h2>
                <h3>by {book.author}</h3>
            
                <StarRatings
                    rating={book.rating}
                    starRatedColor="orange"
                    starEmptyColor="grey"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="1px"
                    className="rating"
                />
                <span className="reatingInfo">3.83/67,500 ratings</span>
                <span className="bookInfo">Publisher: {book.publisher}</span>
                <span className="bookInfo">Published: {book.year}</span>
                <span className="bookInfo">Pages: {book.pages}</span>
                <span className="bookInfo">Price: {book.price}$</span>
                <button>Add to cart</button>
            </div>
            <div className="bookDescription">
                <h3>Description</h3>
                <span>{book.description}</span>   
            </div>     
        </div>

        <div className="reviews">
            <div className="reviewsList">
                {reviewsList[0] ? 
                    reviewsList.map(x => 
                        <Review key={x.id} author={x.author} content={x.content} rating={x.rating} date={x.created} id={x.id}/>
                    ) 
                : 
                    <h2>There are no reviews yet.</h2>
                }

            </div>
            <div className="reviewFormContainer">
                <h2>Write a review</h2>
                <InputError>{errorMessage}</InputError>
                <form onSubmit={onSend}>
                    <span>
                        <span>Rate this book   </span>              
                        <StarRatings
                            rating={rating}          
                            changeRating={changeRating}
                            starRatedColor="orange"
                            starEmptyColor="grey"
                            numberOfStars={5}
                            starDimension="25px"
                            starSpacing="2px"
                            name="rating"
                            id="rating"
                        />
                    </span>
                    <br/>
                    <textarea 
                        rows="10" 
                        cols="70" 
                        name="review" 
                        id="review" 
                        onChange={onChangeHandler}
                        onBlur={onReviewChangeHandler}
                        value={review} 
                    />
                    <br/>
                    <button>Send</button>
                </form>
            </div>           
        </div>        
    </div>        
    );
};

export default Details;