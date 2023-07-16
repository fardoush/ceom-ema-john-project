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
    const savedCard = [];
   // console.log(storedCart);
   //step 1: get id of the addedProduct
   for(const id in storedCart){
    //step 2: get product from products state by using id
    const addedProduct = products.find(product => product.id === id);
    if(addedProduct){
      //step 3: add quantity
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      // step4: add the addedProduct to the saved cart 
      savedCard.push(addedProduct);
    }
    //console.log("AddedProduct:", addedProduct);
   }
   //step5: set the cart
   setCart(savedCard);
   
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




























 // useEffect(() => {
  //   console.log("products:",products);
  //   const storedCart = getShoppingCart();
  //   // console.log(storedCart);
  //   // step 1: get id
  //   let addedProducts
  //   for(const id in storedCart){
  //     console.log("id:", id);

  //     //step2: get the product by using id
  //     addedProducts = products.find(product =>{

  //       console.log(product.id  === id,product.id,id)
  //       return  product.id  === id;

  //      });
  //      if(addedProducts !== undefined){
  //       console.log("Add Product:",addedProducts);
  //       //step3: get quantity of the product
  //       const quantity = storedCart[id];
  //     addedProducts.quantity = quantity;
  //        console.log(addedProducts);
  //      }

  //   }
  // }, [products])
  //const handleAddToCart = (product) => {
  // console.log("product add", product);
  // cart.push(product);

  // state immuatable tai change hobe na