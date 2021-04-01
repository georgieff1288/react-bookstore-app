import {Link} from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import './Book.css';

const Book = ({author, title, rating, price, imgSrc, id}) => {
    return(
        <div className="book">
            <div>
                <img src={imgSrc} alt={title}/>
                <br/>
                <span className="bookTitle">{title}</span>
                <br/>
                <span>Author: {author}</span>
                <br/>
                <span>Price: {price}$</span>
                <br/>
                <span className="rating">
                    <StarRatings
                        rating={rating}
                        starRatedColor="orange"
                        starEmptyColor="grey"
                        numberOfStars={5}
                        starDimension="25px"
                        starSpacing="2px"
                    />
                </span>
            </div>
            
            <br/>
                <Link to={"books/details/" + id}><div className="btn">Details</div></Link>
        </div>
    );
};

export default Book;