import { useContext } from 'react';

import './Cart.css';
import { CartContext } from '../../context/CartContext';

const Cart = () => {
    const [cart] = useContext(CartContext);  
    const totalPrice =  Math.round(cart.reduce((addition, current) => addition + current.price, 0) * 100) / 100;

    return(
        <div className="cartLogo">
            <img className="cartImg" src="./cart-logo.png" alt=""/>
            <span>{cart.length}/${totalPrice}</span>          
        </div>
    );
};

export default Cart;