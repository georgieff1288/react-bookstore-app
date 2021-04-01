import './Genres.css';
import GenresList from './GenresList/GenresList';
import BooksList from '../Book/BooksList/BooksList';


const Genres = ({match}) => {
    const Books = [
        {
            id:1,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:1,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:2,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:2,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:3,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:3,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:4,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:4,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:5,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:5,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:6,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:3.85,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:7,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:1.79,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:8,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:4.5,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:9,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:2.87,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:10,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:1.9,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:11,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest`,
            rating:2.3,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:12,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest One Flew Over the Cuckoo's Nest`,
            rating:3.15,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        },
        {
            id:13,
            author:"Ken Kesey",
            title:`One Flew Over the Cuckoo's Nest One Flew Over the Cuckoo's Nest`,
            rating:4.5,
            price:"12.5",            
            imgSrc:"https://images-na.ssl-images-amazon.com/images/I/91QerkARMLL.jpg"
        }
    ]; //Test data

    return(
        <div className="genresPage">
            <GenresList/>
            {match.params.name ? <h2>{match.params.name}</h2> : <BooksList items={Books}/>}             
        </div>
    );
};

export default Genres;