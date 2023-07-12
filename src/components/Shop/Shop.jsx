import React, { useEffect, useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";
import { addToDb,getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  useEffect(() => {
    const storedCart = getShoppingCart();
    console.log(storedCart);
    // fetch("../../utilities/fakedb.js")
    // .then((res) => res.json())
    // .then((data) => )
  })
  const handleAddToCart = (product) => {
    // console.log("product add", product);
    // cart.push(product);

    // state immuatable tai change hobe na 

    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
    console.log(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product-container section-padding">
        {/* <h2>Products Comming Soon {products.length}</h2> */}

        {products.map((product) => (
          <Products key={product.id} product={product}
          handleAddToCart = {handleAddToCart}>
            {" "}
          </Products>
        ))}
      </div>
      <div className="cart-container">
    <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
