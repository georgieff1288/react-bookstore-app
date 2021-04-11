import { useState, useEffect, useContext } from 'react';

import './UserOrders.css';
import Loader from '../../Shared/Loader/Loader';
import { AuthContext } from '../../../context/AuthContext';
import { getUserOrders, getOrderBooks } from '../../../services/firestoreService';

const UserOrders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);
    const [orderBooks, setOrderBooks] = useState([]);
    const [loader, setLoader] = useState('show');
    const [orderId, setOrderId] = useState('');
    const [loading, setLoading] = useState('hideLoading');
    
    useEffect(() => {       
        getUserOrders(user.uid).then((res) => {
            setLoader('hide');
            setOrders(res);
        })        
    },[user.uid]);

    const getDetailsHandler = (e) => {
        setLoading('showLoading');
        let id = e.target.name;
        setOrderId(id);
        getOrderBooks(id).then((res) => {
            setOrderBooks(res);
            setLoading('hideLoading');
        });
    };

    return(
        <div className="ordersContainer">
            <div>
                <h1>My orders</h1>
                <Loader display={loader} style={{width:180}}/>
                {orders[0] ?
                    orders.map(x =>
                        <div key={x.id} className="order">
                            <span className="orderInfo">Date: {x.date} - Total: ${x.totalPrice}</span>
                            <button name={x.id} onClick={getDetailsHandler}>Order details</button>
                            <p className={loading}>Loading...</p>
                            {orderBooks[0] && x.id===orderId ?
                                <div className="orderDetails">
                                {orderBooks.map(x =>
                                <p key={x.id}>{x.author} - {x.title} / ${x.price}</p>
                                )}
                                </div>
                            :
                                <span></span>
                            }  
                        </div>

                    )
                    :
                    <h3>You don't have orders yet.</h3>
                }
            </div>
        </div>
    );
};

export default UserOrders;