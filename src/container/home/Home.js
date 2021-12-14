
import React from 'react';
import "./Home.css"
import data from '../../data/data';
import { useState } from "react";
import CartPage from '../../pages/cart/CartPage';
import Seller from '../../pages/seller/Seller';
import Login from '../../pages/Login/Login';
import Buyer from '../../pages/buyer/Buyer';
import ProductPage from '../../pages/productPage/ProductPage';
import { Routes, Route } from "react-router-dom";
import RegisterUser from '../../pages/registerUser/RegisterUser';



export default function Home(props) {

  const { products } = data;


  const [cartItems, setCartItems] = useState([]);



  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }
    else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      // alert("Lets add item to cart")
    }
  }

  const onRemove = (product) => {

    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      if (exist.qty == 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }

    }

  }

  return (

    <html>
      <header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div class="topnav">
          <div class="brand">Mini Online Shopping</div>

          <div className="menuItem"> <a href="login">Login</a></div>


        </div>
      </header>

      <Routes>
        {/* <Route index element={<Buyer />} /> */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RegisterUser />} />
        <Route path="productPage" element={<ProductPage />} />
        <Route path="sellerPage" element={<Seller products={products} />} />
        <Route path="*" element={<Buyer products={products} onAdd={onAdd} onRemove={onRemove} cart={cartItems} />} />
        <Route path="/" element={<Buyer products={products} onAdd={onAdd} onRemove={onRemove} cart={cartItems} />}>

        </Route>
      </Routes>
    </html>

    // <div>
    //   <div className="container">
    //     {/* <div classname="item1 block">
    //       <Buyer products={products} onAdd={onAdd} onRemove= {onRemove} cart= {cartItems}/>
    //     </div> */}

    //     {/* <div>
    //       <Seller products={products}/>
    //     </div> */}

    //     <ProductPage/>

    //   </div>


    // </div>  

  )



}

