import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    console.log(props);
    return (
        <div className="product">
            <div>
                <img src={props.product.img}/>
            </div>
            <div>
                <h4 className="product-name">{props.product.name}</h4>
                <br/>
                <p><small>By: {props.product.seller}</small></p>
                <br/>
                <p>$ {props.product.price}</p>
                
                <p><small>Only {props.product.stock} pcs Available</small></p>

                <button className="main-button" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;