import { useState, useEffect } from "react";
import "./CartPage.css"
export default function CartPage(props){
  const{cartItems, onAdd, onRemove}= props;

  const[totalPrice, setTotalPrice]=useState(0);

    useEffect(()=>setTotalPrice (cartItems.reduce((tot, item)=> tot+item.price* item.qty, 0)), [cartItems])
  

  return(

    <div className="cart">
      
      {
        cartItems.map((item) => 
          <div className="itemCard">

            <div>{item.name} <br/>{item.qty}x{item.price}</div> 

            <div className="col-2">
              
              <button onClick={() => onAdd(item)} className="btn">
                +
              </button>
              <button onClick={() => onRemove(item)} className="btn">
                -
              </button>{' '}

            </div>

            <div><img id='prodIcon' src= {item.image}/></div>

          </div>)
      }


        <h3>{(totalPrice>0)? "Total price: $" + totalPrice: ""}</h3>
        {(totalPrice>0)? <button className= "btn btnCheckout">Check out</button>: ""}
    
    </div>

  )
}