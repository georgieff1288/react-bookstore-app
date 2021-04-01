import { Link } from 'react-router-dom';

import './BestSellerBook.css';


const BestSellerBook = ({author, title, id}) => {
    return(
        <span className="bestSellerBook">
                <Link to={"/books/details/" + id}>{author} - {title}</Link>
        </span>
    );
};

export default BestSellerBook;