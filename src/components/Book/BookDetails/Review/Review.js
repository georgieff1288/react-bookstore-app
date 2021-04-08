import StarRatings from 'react-star-ratings';

import './Review.css';


const Review = (props, ) => {
      
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
                <span className="date">{props.date}</span>
            </div>
            <p>{props.content}</p>
        </div>
    );
};

export default Review;