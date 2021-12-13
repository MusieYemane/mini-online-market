import React, { Component }  from 'react';

import './Seller.css'


Seller = (props) => {
  //assuming we get products that are from this seller
  const {products}= props;

  return (

    <div>

    <header>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div class="topnav">
          <div class= "brand">Mini Online Shopping </div>
          
          <div className="menuItem"> <a href="#login">Edit Product</a></div>
          <div className="menuItem"> <a href="#login">Add product</a></div>
          <div className="menuItem"> <a href="#login">Show products</a></div>
      </div>
    </header>

    <div class= "body">
      <p>Welcome to Seller Page</p>

    </div>
{/* 
    <div className="col1">
        {products.map((product) => (
          <div className="cardContainer"> 
            <div className="card">
              <img src={product.image} alt="image loading..." id="prodImg"/>
              <h1>{product.name}</h1>
              <p class="price">${product.price}</p>
              <p>Some descriptions about the products..</p>
              <p><button className="btn">Edit product</button> </p>

            </div>
          </div>
        ))}

    </div> */}

    <div >
      <h1>add product page</h1>
    </div>
  </div>
      
  )
}

export default Seller;  