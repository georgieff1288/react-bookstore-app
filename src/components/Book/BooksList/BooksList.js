import './BookList.css'
import Book from '../Book'

const BooksList = ({items}) => {
    return(
        <div className="booksList">
            {items.map(x=>
                <Book 
                    key={x.id} 
                    author={x.author} 
                    title={x.title} 
                    rating={x.rating} 
                    price={x.price}
                    imgSrc={x.imgSrc}
                    id={x.id}
                /> 
            )}
        </div>
    );
};

export default BooksList;