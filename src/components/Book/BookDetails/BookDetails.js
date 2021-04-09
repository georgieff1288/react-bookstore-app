import StarRatings from 'react-star-ratings';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './BookDetails.css';
import Review from './Review/Review';
import WriteReview from './Review/WriteReview/WriteReview';
import Loader from '../../Shared/Loader/Loader';
import { getBookById, getBookReviews, didUserWriteReview } from '../../../services/firestoreService';
import { AuthContext } from '../../../context/AuthContext';



const Details = ({ match }) => {
    const {user} = useContext(AuthContext);
    const bookId = match.params.bookId;
    const [book, setBook] = useState({});
    const [reviewsList, setReviewList] = useState([]);
    const [loader, setLoader] = useState('show');
    const [userReviewId, setUserReviewId] = useState(null);

    useEffect(() => {
        getBookReviews(bookId, setReviewList);      
        getBookById(bookId, setBook, setLoader);
        if(user){           
            didUserWriteReview(bookId, user.uid).then((res) => {
                setUserReviewId(res);
            });            
        };          
    },[bookId, user]);
   
    if(loader === 'show'){
        return (<Loader display={loader} style={{width:180}}/>)
    };

    return(
        <div>                    
            <div className="detailsContainer">
                <img src={book.imgSrc} alt=""/>
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
                    <span className="ratingInfo">{book.rating}/{book.numOfRatings} ratings</span>
                    <span className="bookInfo">Publisher: {book.publisher}</span>
                    <span className="bookInfo">Published: {book.year}</span>
                    <span className="bookInfo">Pages: {book.pages}</span>
                    <span className="bookInfo">Price: ${book.price}</span>
                    {user ?
                        <button>Add to cart</button>
                        :
                        <h3><Link to="/user/sign-in">Login</Link> to write a review and order book</h3>
                    }
                
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
                            <Review 
                                key={x.id} 
                                author={x.author} 
                                content={x.content} 
                                rating={x.rating} 
                                date={x.created} 
                                creatorId={x.creatorId}
                                bookId={bookId} 
                                id={x.id}
                            />
                        ) 
                        : 
                        <h2>There are no reviews yet.</h2>
                    }

                </div>
                {user && !userReviewId ? 
                    <WriteReview user={user} bookId={bookId}/>
                    :
                    <span>
                    {user ? 
                        <div className="reviewFormMessage">
                            <h2>You have already written a review.</h2>
                            <h2>If you want to edit it click <Link to={"/book/"+bookId+"/edit-review/"+userReviewId}>here</Link>.</h2>
                        </div>
                        :
                        <span></span>
                     }
                    </span>
                }
            </div>                
        </div>        
    );
};

export default Details;