import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props.product);

    const {img,name,price,seller,rating} = props.product;

    const handleAddToCart = props.handleAddToCart;

   
    return (
        <div>
            {/* <h2>THis is Product page</h2> */}
            <div className="product">
                <img src={img} alt="" />
               <div className="product-info">
               <h4>{name}</h4>
                <h5>Price: $ {price}</h5>
                {/* <p>{seller}</p> */}
                <p>Manufacturer:   {seller}</p>
                <p>Ratting: {rating} stars</p>
                {/* <p>{quantity}</p> */}
               </div>

               <button className="cart-btn" onClick={() => handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

            </div>
        </div>
    );
};

export default Products;