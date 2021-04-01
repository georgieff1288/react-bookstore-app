import { Link } from 'react-router-dom';

import './BestSellerBook.css';


const BestSellerBook = ({author, title}) => {
    return(
        <span className="bestSellerBook">
                <Link to="/user/profile">{author} - {title}</Link>
        </span>
    );
};

export default BestSellerBook;