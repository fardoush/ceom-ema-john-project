import React, { useEffect, useState } from 'react';
import './Shop.css';
import Products from '../Products/Products';

const Shop = () => {
    const [ products,setProducts] = useState([]);
    useEffect (() => {
fetch('products.json')
.then(res => res.json())
.then(data => setProducts(data))

    }, []); 
    return (
        <div className='shop-container'>
            <div className="product-container section-padding">
{/* <h2>Products Comming Soon {products.length}</h2> */}


{
    products.map(product => <Products
    key ={product.id}
    product = {product}

    
    > </Products>)
}



            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;