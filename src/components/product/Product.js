import { useState } from "react";
import "./Product.css";
import {Outlet, Link} from "react-router-dom"

export default function Product(props) {
  const { product, onAdd, onRemove } = props;

  return (
    <div className="productCard">
      {/* <Link to="/productPage" state= {{product:product}}> <img className="small" src={product.image} alt={product.name} /></Link> */}
      
      <h4>{product.name}</h4>
      {/* <p>Posted by: {product.seller}</p> */}
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
      </div>

      <p>${product.price}</p>
      <div>
        <button className="btn" onClick={() => onAdd(product)}>
          Add to cart{" "}
        </button>

        {/* <button className= "btn" onClick={()=>onRemove(product)}>- </button> */}
      </div>
    </div>
  );
}
