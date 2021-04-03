import StarRatings from 'react-star-ratings';
import { useState } from 'react';

import './ReviewForm.css';
import InputError from '../../../Shared/InputError/InputError';

const ReviewForm = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const changeRating = (newRating) => {
        setRating(newRating);
        setErrorMessage('');
    };

    const onSend = (e) => {
        e.preventDefault();
        if(rating === 0){
            setErrorMessage('Rating can not be zero');
        }

        if(e.target.review.value && rating > 0){            
            console.log(e.target.review.value);        
            console.log(rating);
        }
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
    );
};

export default ReviewForm;