import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import './CheckoutCart.css';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../../context/CartContext';
import { AuthContext } from '../../../context/AuthContext';
import { orderBooks } from '../../../services/firestoreService';


const CheckoutCart = () => {
    const [cart, setCart] = useContext(CartContext);
    const {user} = useContext(AuthContext);
    const history = useHistory();
    const totalPrice =  Math.round(cart.reduce((addition, current) => addition + current.price, 0) * 100) / 100;

    const orderHandler = () =>{
        orderBooks(user.uid, cart, totalPrice)
            .then(() => {
                setCart([]);
                history.push("/user/orders");
        });
    };
    
    if(cart.length === 0){
        return <h1 className="emptyCart">There is no books in your shopping cart.</h1>
    }
    return (
        <div className="cartContainer">
            <h1 className="cartContainerTitle">Checkout</h1>
            {cart.map(x =>
                <CartItem 
                key = {x.author+x.title}
                author = {x.author}
                title = {x.title}
                price = {x.price}
                />
            )}
            <div className="underline"></div>  
            <span className="totalPrice">Total price: ${totalPrice}</span>
            <br/>
            <button className="btnOrder" onClick={orderHandler}>Order</button>   
        </div>
    );
};

export default CheckoutCart;