import { useContext } from 'react';

import './CartItem.css';
import { CartContext } from '../../../context/CartContext';

const CartItem = (props) => {
    const [cart, setCart] = useContext(CartContext);

    const removeHandler = () => {
        setCart(currentState => [...currentState.filter(obj => obj.title !== props.title)]);
    };
    return(
        <div>
            <span className="cartItem">{props.author} - {props.title} / Price:${props.price}</span> 
            <button className="btnRemove" onClick={removeHandler}>Remove</button>
        </div>
    );
};

export default CartItem;