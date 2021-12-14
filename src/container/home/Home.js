
import React, {useState, useEffect} from 'react';
import "./Home.css"
import Seller from '../../pages/seller/Seller';
import Login from '../../pages/Login/Login';
import Buyer from '../../pages/buyer/Buyer';
import ProductPage from '../../pages/productPage/ProductPage';
import {Routes, Route } from "react-router-dom";
import axios from 'axios';

const Home = (props) => {

const [products, setProducts] = useState([]);

 const fetchProducts = async () => {
  axios
    .get("http://localhost:8080/products")
    .then((res) => {
      setProducts(res.data);

    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [])

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
    <Routes>
      {/* <Route index element={<Buyer />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="productPage" element={<ProductPage />} />
      <Route path="sellerPage" element={<Seller products={products} />} />
      <Route path="*" element={<Buyer products={products} onAdd={onAdd} onRemove={onRemove} cart={cartItems} />} />
      <Route path="/" element={<Buyer products={products} onAdd={onAdd} onRemove={onRemove} cart={cartItems} />}>

      </Route>
    </Routes>
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

export default Home;

