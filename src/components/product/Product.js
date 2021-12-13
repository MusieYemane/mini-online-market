import { useState } from "react";
import "./Product.css";

export default function Product(props) {
  const { product, onAdd, onRemove } = props;
  return (
    <div className="productCard">
      <img className="small" src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>Posted by: {product.seller}</p>
      <div>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
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
