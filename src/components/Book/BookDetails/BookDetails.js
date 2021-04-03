import StarRatings from 'react-star-ratings';

import './BookDetails.css';
import Review from './Review/Review';
import ReviewForm from './ReviewForm/ReviewForm';



const Details = ({ match }) => {
    const bookId = match.params.bookId;
    console.log(bookId);



    const book = {
        id:1,
        author:"Ken Kesey",
        title:`One Flew Over the Cuckoo's Nest`,
        publisher: "Some publisher",
        year: 2012,
        pages: 350,
        rating:3.5,
        price:"12.5$",            
        imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg",
        description:`Tyrannical Nurse Ratched rules her ward in an Oregon State mental hospital with a strict and unbending routine, unopposed by her patients, who remain cowed by mind-numbing medication and the threat of electric shock therapy. But her regime is disrupted by the arrival of McMurphy – the swaggering, fun-loving trickster with a devilish grin who resolves to oppose her rules on behalf of his fellow inmates. His struggle is seen through the eyes of Chief Bromden, a seemingly mute half-Indian patient who understands McMurphy's heroic attempt to do battle with the powers that keep them imprisoned. Ken Kesey's extraordinary first novel is an exuberant, ribald and devastatingly honest portrayal of the boundaries between sanity and madness.`
    }; //Test data

    const reviews = [
        {
            author:"Ivan",
            id:1,
            rating:5,
            date:"April 3rd 2021",
            content:`Tyrannical Nurse Ratched rules her ward in an Oregon State mental hospital with a strict and unbending routine, unopposed by her patients, who remain cowed by mind-numbing medication and the threat of electric shock therapy. But her regime is disrupted by the arrival of McMurphy – the swaggering, fun-loving trickster with a devilish grin who resolves to oppose her rules on behalf of his fellow inmates. His struggle is seen through the eyes of Chief Bromden, a seemingly mute half-Indian patient who understands McMurphy's heroic attempt to do battle with the powers that keep them imprisoned. Ken Kesey's extraordinary first novel is an exuberant, ribald and devastatingly honest portrayal of the boundaries between sanity and madness.`
        },
        {
            author:"Ivan",
            id:2,
            rating:4,
            date:"April 3rd 2021",
            content:`Tyrannical Nurse Ratched rules her ward in an Oregon State mental hospital with a strict and unbending routine, unopposed by her patients, who remain cowed by mind-numbing medication and the threat of electric shock therapy. But her regime is disrupted by the arrival of McMurphy – the swaggering, fun-loving trickster with a devilish grin who resolves to oppose her rules on behalf of his fellow inmates. His struggle is seen through the eyes of Chief Bromden, a seemingly mute half-Indian patient who understands McMurphy's heroic attempt to do battle with the powers that keep them imprisoned. Ken Kesey's extraordinary first novel is an exuberant, ribald and devastatingly honest portrayal of the boundaries between sanity and madness.`
        },
        {
            author:"Ivan",
            id:3,
            rating:3,
            date:"April 3rd 2021",
            content:`Tyrannical Nurse Ratched rules her ward in an Oregon State mental hospital with a strict and unbending routine, unopposed by her patients, who remain cowed by mind-numbing medication and the threat of electric shock therapy. But her regime is disrupted by the arrival of McMurphy – the swaggering, fun-loving trickster with a devilish grin who resolves to oppose her rules on behalf of his fellow inmates. His struggle is seen through the eyes of Chief Bromden, a seemingly mute half-Indian patient who understands McMurphy's heroic attempt to do battle with the powers that keep them imprisoned. Ken Kesey's extraordinary first novel is an exuberant, ribald and devastatingly honest portrayal of the boundaries between sanity and madness.`
        }
    ]; //Test data

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
            
                <span>Publisher: {book.publisher}</span>
                <span>Published: {book.year}</span>
                <span>Pages: {book.pages}</span>
                <span>Price: {book.price}</span>
                <button>Add to cart</button>
            </div>
            <div className="bookDescription">
                <h3>Description</h3>
                <span>{book.description}</span>   
            </div>     
        </div>
        <div className="reviews">
            <div className="reviewsList">
                {reviews.map(x => 
                    <Review key={x.id} author={x.author} content={x.content} rating={x.rating} date={x.date} id={x.id}/>
                )}
            </div>

            <div className="reviewForm">                
                <ReviewForm/>
            </div>
        </div>
    </div>        
    );
};

export default Details;