import StarRatings from 'react-star-ratings';

import './Review.css';

const Review = ({author, content, rating, date, id}) => {
    return(
        <div className="reviewContainer">
            <div>
                <b>{author}</b> rate it
                <span> </span>
                <StarRatings
                    rating={rating}
                    starRatedColor="orange"
                    starEmptyColor="grey"
                    numberOfStars={5}
                    starDimension="15px"
                    starSpacing="1px"                    
                />
                <span className="date">{date}</span>
            </div>
            <p>{content}</p>
        </div>
    );
};

export default Review;