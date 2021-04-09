import StarRatings from 'react-star-ratings';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import'./WriteReview.css';
import InputError from '../../../../Shared/InputError/InputError';
import { addReview } from '../../../../../services/firestoreService';

const WriteReview = (props) => {
    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('');

    const onSend = (e) => {
        e.preventDefault();
        let bookReview = {
            author:props.user.displayName,
            creatorId:props.user.uid,
            rating:rating,
            content:review
        };
        if(rating === 0){
            setErrorMessage('Rating can not be zero');
        };

        if(review && rating > 0){ 
            addReview(props.bookId, bookReview)            
            setReview('');
            setRating(0);
            history.push(`/books`);
            return null;
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
    );
};

export default WriteReview;