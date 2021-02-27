import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce( (total, product)=> total + product.price, 0)

    let shipping = 0;
    if(total > 35){
        shipping = 0
    }
    else if(total > 15){
        shipping = 5
    }else if(total >0){
        shipping = 12
    }

    const tax = total * 0.1;

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Total Ordered: {cart.length}</p>
            <p>Product Price: {total}</p>
            <p><small>Tax: {tax}</small></p>
            <p>Shipping Cost: {shipping}</p>
            <h4>Total Amount: {total + shipping + tax}</h4>
            <button className="order-button"><FontAwesomeIcon icon={faShoppingCart} />Place Order</button>
        </div>
    );
};

export default Cart;