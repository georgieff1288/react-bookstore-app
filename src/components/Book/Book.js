import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import './Book.css';

const Book = (props) => {    
    
    return(
        <div className="book">
            <div>
                <img src={props.imgSrc} alt=""/>
                <br/>
                <span className="bookTitle">{props.title}</span>
                <br/>
                <span>Author: {props.author}</span>
                <br/>
                <span>Price: {props.price}$</span>
                <br/>
                <span className="rating">
                    <StarRatings
                        rating={props.rating}
                        starRatedColor="orange"
                        starEmptyColor="grey"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="1px"
                    />
                </span>
            </div>
            
            <br/>
                <Link to={"/books/details/" + props.id}><div className="btn">Details</div></Link>
        </div>
    );
};

export default Book;