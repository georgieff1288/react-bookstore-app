import './BestSellers.css';
import BestSellerBook from './BestSellerBook/BestSellerBook';

const BestSellers = () => {
    const Books = [ 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:111}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:222}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:333}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:444}, 
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:555},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:666},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:777},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:888},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:999},
        {author:'Ken Kesey', title:`One Flew Over the Cuckoo's Nest`, id:101010}
    ]; //Test data

    return(
        <div className="bestSellers">
            <h2 className="bestSellersHeading">Best sellers</h2>
            <ol className="bestSellersList">
                {Books.map(x => 
                    <li key={x.id}>
                        <BestSellerBook key={x.id} author={x.author} title={x.title} id={x.id}/>
                    </li>
                )}
            </ol>
        </div>
    );
};

export default BestSellers;