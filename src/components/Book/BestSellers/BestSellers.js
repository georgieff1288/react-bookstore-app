import { useState, useEffect} from 'react';

import './BestSellers.css';
import BestSellerBook from './BestSellerBook/BestSellerBook';
import Loader from '../../Shared/Loader/Loader';
import { getBestSellers } from '../../../services/firestoreService';

const BestSellers = () => {    
    const [bestSellers, setBestSellers] = useState([]);
    const [loader, setLoader] = useState('show'); 

    useEffect(() => {       
        getBestSellers(setBestSellers, setLoader);
    }, []);

    return(
        <div className="bestSellers">
            <h2 className="bestSellersHeading">Best sellers</h2>
            <Loader display={loader} style={{width:180}}/>
            <ol className="bestSellersList">
                {bestSellers.map(x => 
                    <li key={x.id}>
                        <BestSellerBook key={x.id} author={x.author} title={x.title} id={x.id}/>
                    </li>
                )}
            </ol>
        </div>
    );
};

export default BestSellers;