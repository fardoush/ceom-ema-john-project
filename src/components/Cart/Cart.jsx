import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart}) => {
    // const cart = props.cart; [1]
    // distruing 
    // const {cart} = props; [2]
    console.log(cart);
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart ){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;

    }

    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+ totalShipping + tax;
    return (
        <div className='cart-wrapper'>
                <h5>Order Summary</h5>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: $ {totalPrice}</p>
        <p>Total Shipping Charge: $ {totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>

        <div className="button-holder">
            <button className="btn delete-btn">Clear Cart <FontAwesomeIcon icon={faTrash}/>  </button>
            <button className="btn review-btn">Review Order <FontAwesomeIcon icon={faArrowRight}/>  </button>
            
        </div>
        </div>
    );
};

export default Cart;