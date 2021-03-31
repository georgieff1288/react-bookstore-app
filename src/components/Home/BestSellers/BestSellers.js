import './BestSellers.css';
import BestSellerBook from './BestSellerBook/BestSellerBook';

const BestSellers = () => {
    const books = [ 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:1}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:2}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:3}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:4}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:5},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:6},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:7},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:8},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:9},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:10}
    ];

    return(
        <div className="bestSellers">
            <h2 className="title">Best sellers</h2>
            <ol className="bookList">
                {books.map(x => 
                    <li>
                        <BestSellerBook key={x.id} author={x.author} title={x.title}/>
                    </li>
                )}
            </ol>
        </div>
    );
};

export default BestSellers;