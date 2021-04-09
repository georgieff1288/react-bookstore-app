import StarRatings from 'react-star-ratings';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './Review.css';
import { AuthContext } from '../../../../context/AuthContext';
import { deleteReview } from '../../../../services/firestoreService';

const Review = (props) => {
    const {user} = useContext(AuthContext);
    const history = useHistory();

    const onDeleteHandler = () => {
        deleteReview(props.bookId, props.id, user.uid, props.rating);
        history.push('/books');
    };
      
    return(
        <div className="reviewContainer">
            <div>
                <b>{props.author}</b> rate it
                <span> </span>
                <StarRatings
                    rating={props.rating}
                    starRatedColor="orange"
                    starEmptyColor="grey"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="1px"                    
                />
                <span className="reviewSettings">
                    {user && user.uid===props.creatorId ?
                        <span>
                            
                            <Link to={"/book/"+props.bookId+"/edit-review/"+props.id}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={onDeleteHandler}>Delete</button>
                            <span className="date">{props.date}</span>
                        </span>
                        :
                        <span className="date">{props.date}</span>
                    }
                </span>                
            </div>
            <p>{props.content}</p>
        </div>
    );
};

export default Review;