import React, { useState } from 'react';
// import fakeData from '../../../fakeData';
import fakeData from '../../fakeData'

// import Product from '../../Product';
import './Shop.css'
import Product from '../Shop/../Products/Product'
import Cart from'../Cart/Cart'



const Shop = () =>{
    const first10 = fakeData.slice(0,20)
    const [products, setProduct] = useState(first10)

    const [cart, setCart] = useState([])
    

    const handleAddProduct = (product) =>{
        console.log("Added Product", product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    console.log(products)
    return (
        <div className="shop-container">

            <div className="product-container">
                    {
                       products.map(product =><Product 
                        handleAddProduct = {handleAddProduct}
                        product={product}></Product>)
                    }
            </div>

            <div className="cart-container">

                    <Cart cart={cart}></Cart>
                {/* <h5>Order Summary: {cart.length}</h5> */}
            </div>
           
        </div>
    )
    // const first10 = fakeData.slice(0,10)
    // const [products, setProduct] = useState()
    // return (
    //     <div className="shop-container">
    //         <div className="products-container">
    //             <h3>tiejkdh</h3>
    //             <div>
    //                 {
    //                     products.map(product => <Product product={product}></Product>)
    //                 }
                    
    //             </div>
    //         </div>
    //         <div className="cart-container">
    //             <h3>This is cart</h3>
    //         </div>
    //     </div>
    // );
};

export default Shop;