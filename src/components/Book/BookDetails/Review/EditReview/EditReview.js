import { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { getBookById, getReview, updateReview } from '../../../../../services/firestoreService';

import './EditReview.css';
import Loader from '../../../../Shared/Loader/Loader';
import InputError from '../../../../Shared/InputError/InputError';

const EditReview = ({match, history}) => {
    const bookId = match.params.bookId;
    const reviewId = match.params.reviewId;
    const [review, setReview] = useState({});
    const [loader, setLoader] = useState('show'); 
    const [book, setBook] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [rating, setRating] = useState(0);
    useEffect(() => {
        getBookById(bookId).then((res) => {
            setBook(res);
            setLoader('hide');
        });
        getReview(bookId, reviewId).then((res) => {
            setReview(res);
        });
    },[bookId, reviewId]);

    const changeRating = (newRating) => {
        setRating(newRating);
        setErrorMessage('');
    };

    const onReviewChangeHandler = (e) => {
        if(!e.target.value){
            setErrorMessage('Review can not be empty');
        } else {
            setErrorMessage('');
            
        };
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let editedReview = {...review, content: e.target.content.value, rating: rating};
        if(rating === 0){
            setErrorMessage('Rating can not be zero');
        };

        if(review && rating > 0){ 
            updateReview(bookId, editedReview, reviewId, review.rating).then(() => {
                history.push(`/books/details/${bookId}`);
                return
            });
        };
    };

    if(loader === 'show'){
        return (<div className="editReviewloader">
            <Loader display={loader} style={{width:180}}/>
        </div>);
    };
    return(
        <div className="editContainer">
            <h2>{book.author} - {book.title}</h2>
            <InputError>{errorMessage}</InputError>
            <form onSubmit={onSubmitHandler}>
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
                <textarea 
                    type="text" 
                    name="content" 
                    id="content" 
                    defaultValue={review.content}
                    rows="10" 
                    cols="60"
                    onBlur={onReviewChangeHandler}
                />
                <button>Edit</button>
            </form>
        </div>
    );
};

export default EditReview;