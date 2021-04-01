import {Link} from 'react-router-dom'

import './Book.css'

const Book = ({author, title, rating, price, imgSrc, id}) => {
    return(
        <div className="book">
            <div>
                <img src={imgSrc}/>
                <br/>
                <span>{title}</span>
                <br/>
                <span>Author: {author}</span>
                <br/>
                <span>Price: {price}</span>
                <br/>
                <span>Rating:{rating}</span>
            </div>
            
            <br/>
                <Link to={"books/details/" + id}><div className="btn">Details</div></Link>
        </div>
    );
};

export default Book;